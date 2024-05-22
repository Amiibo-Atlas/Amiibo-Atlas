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

const UserInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 2px solid black;
    border-radius: 7px;
    margin: 2rem;
    padding-left: 1rem;
    padding-right: 1rem;
`;

const UserInfo = styled.div`
    margin-top: 2rem;
`;

const ExpandButton = styled.button`
    background: transparent;
    border: none;
    :hover {
        cursor: pointer;
    }
    font-size: 1.2em;
    padding-left: 1rem;
    margin-top: 1rem;
`;

// Deconstruct data from TanStack function 'GetAmiibo', utilize its state management for checking for data (isLoading, data, error), render conditionally.
// Calls function to filter out recent releases, sends to component card function component (reused assets for showcasing amiibo).
export default function App() {
    useAuthState();
    const [allAmiibo, setAllAmiibo] = useState(false);
    const [toggle, setToggle] = useState(false);
    const { isLoading, error } = GetAmiibo();

    const { userId } = useParams();
    const [user, setUser] = useState<User | null>(null);

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
                        collectors, enthusiasts, or those that are interested in the current state
                        of Nintendo’s Amiibo figurines. These figurines have been in production for
                        ten years now, and have varied use cases amongst Nintendo’s catalog of
                        games.
                    </p>

                    <p>
                        Core functionality includes authentication, parameterized pages, and various
                        the ability to wishlist particular amiibos, etc. The frontend was built
                        using the React framework for building the user interface based on its
                        component like implementation. Given how React handles state management, and
                        the scope of our web app, we have integrated Redux Toolkit for global state
                        management. Thus far, we have created a global state for the currently
                        logged in User (and their settings), and Amiibos. The backend includes
                        firestore integration.
                    </p>
                </SplashInfo>
            </Wrapper>

            <h1>Amiibo Atlas</h1>

            <Container>
                {/* <UserInfoContainer>
                    <UserInfo>
                        <h2>{user?.displayName}</h2>
                        <h3>{user?.email}</h3>

                        <h4>Select User Session</h4>
                        <h4>Display User options</h4>
                    </UserInfo>
                    <UserInfo>
                        <h3>User Wishlist</h3>
                        <p>TO DO: Hook into Redux store</p>
                        <p>Select User Session</p>
                        <p>Display Current User Wishlist here from global state</p>
                    </UserInfo>
                </UserInfoContainer> */}
                <h2>
                    {toggle ? 'Every Amiibo' : 'Recently Released Amiibo'} |
                    <ExpandButton onClick={handleExpansion}>
                        {toggle ? (
                            <FontAwesomeIcon icon={faMinus} />
                        ) : (
                            <FontAwesomeIcon icon={faPlus} />
                        )}
                    </ExpandButton>
                </h2>
                <AmiiboCard amiiboProps={filterAmiiboAllOrRecent} />
            </Container>
        </>
    );
}
