import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GetAmiibo, filterRecentReleases } from './features/amiibo/amiiboAPI';
import AmiiboCard from './components/AmiiboCard';

import { useState } from 'react';
import { useAppSelector } from './redux/hooks';

import { getUser } from './features/user/userAPI';
import { User } from './types/User';

import Scroll from '../src/components/ScrollPara';
import styled from '@emotion/styled';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import useAuthState from './features/auth/useAuthState';

const PaginateButton = styled.button`
    background-color: red;
    border: none;
    border-radius: 10px;
    color: white;
    padding: 0.5rem 1rem;
    margin-top: 1rem;
    font-size: 1.2em;
    cursor: pointer;
    margin-bottom: 2rem;

    :hover {
        background-color: #a01414;
    }
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2rem;
`;

const CenterContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const SplashInfo = styled.div`
    padding: 2rem;
    border: 1px solid gray;
    border-radius: 7px;
    background-color: white;
    transition: 0.3s ease;
    box-shadow: 2px 5px rgba(0, 0, 0, 0.15);
`;

const Container = styled.div`
    display: flex;
    flex-direction: row;
`;

const ExpandButton = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 1.2em;
    padding-left: 1rem;
    padding-right: 1rem;
    margin-top: 1rem;
    margin-left: 1rem;
    border-radius: 10px;
    transition: background-color 0.3s ease, transform 0.3s ease;
    background-color: rgb(211, 82, 82);

    :hover {
        background-color: rgb(235, 117, 117);
        transform: scale(1.2);
    }

    :active {
        transform: scale(0.9);
    }
`;

// Deconstruct data from TanStack function 'GetAmiibo', utilize its state management for checking for data (isLoading, data, error), render conditionally.
// Calls function to filter out recent releases, sends to component card function component (reused assets for showcasing amiibo).
export default function App() {
    useAuthState();
    const [allAmiibo, setAllAmiibo] = useState(false);
    const [toggle, setToggle] = useState(false);
    const { isLoading, error } = GetAmiibo();
    const [pageScroll, setPageScroll] = useState(1); // Pagination on homepage.
    const itemsPerPage = 50;

    const { userId } = useParams();
    const [, setUser] = useState<User | null>(null);

    useEffect(() => {
        const fetchUser = async () => {
            if (userId) {
                const fetchedUser = await getUser(userId);
                setUser(fetchedUser || null);
            }
        };
        fetchUser();
    }, [userId]);

    const handleExpansion = () => {
        setToggle((prevIsOn) => !prevIsOn);
        setAllAmiibo(!allAmiibo);
    };

    // Selecting amiibo data from the redux store...
    const amiiboDataRedux = useAppSelector((state) => state.allAmiiboSlice.amiibos);

    // Filter amiibo data based on allAmiibo state
    const filterAmiiboAllOrRecent = allAmiibo
        ? amiiboDataRedux
        : filterRecentReleases(amiiboDataRedux);

    // utilize for pagination.
    const amiiboPaginationHP = filterAmiiboAllOrRecent.slice(0, pageScroll * itemsPerPage);

    const handleLoadMore = () => {
        setPageScroll((prevPage) => prevPage + 1);
    };

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>{error.message}</p>;

    return (
        <>
            <Wrapper>
                <h1>Welcome to Amiibo Atlas!</h1>
                <SplashInfo>
                    <CenterContent>
                        <h2>Featured Amiibo</h2>
                        <Scroll />
                    </CenterContent>
                    <p>
                        Amiibo Atlas is a modern, easy to use, modern web application designed for
                        collectors, enthusiasts, or those who are interested in the current state of
                        Nintendo’s Amiibo figurines. These figurines have been in production for ten
                        years now, and have varied use cases amongst Nintendo’s catalog of games.
                    </p>
                    <p>
                        Core functionality includes authentication, parameterized pages, and various
                        abilities, such as to wishlisting particular Amiibo. The frontend was built
                        using the React framework for building the user interface based on its
                        component-like implementation. Given how React handles state management, and
                        the scope of our web app, we have integrated Redux Toolkit for global state
                        management. Additionally, we are utilizing a various set of modern libraries
                        that have optimized our development of this web app. As for the backend,
                        there is Google Firebase integration - which handles various functionality
                        including seamless authentication, cookies, etc.
                    </p>
                    <p>
                        The team that developed this web application is proud of our accomplishment,
                        and have made great progress within the capstone progress.
                    </p>
                </SplashInfo>
            </Wrapper>

            <Container>
                <CenterContent>
                    <h2>
                        {toggle ? 'Every Amiibo' : 'Recently Released Amiibo'}
                        <ExpandButton onClick={handleExpansion}>
                            {toggle ? (
                                <FontAwesomeIcon icon={faMinus} />
                            ) : (
                                <FontAwesomeIcon icon={faPlus} />
                            )}
                        </ExpandButton>
                    </h2>
                    <AmiiboCard amiiboProps={amiiboPaginationHP} />
                    {amiiboPaginationHP.length < filterAmiiboAllOrRecent.length && (
                        <PaginateButton onClick={handleLoadMore}>Load more Amiibo!</PaginateButton>
                    )}
                </CenterContent>
            </Container>
        </>
    );
}
