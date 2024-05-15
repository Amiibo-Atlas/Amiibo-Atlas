import { filterRecentReleases, GetAmiibo } from '../features/amiibo/amiiboAPI';
import AmiiboCard from './AmiiboCard';
import { useState } from 'react';
import { useAppSelector } from '../redux/hooks';

import styled from '@emotion/styled';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

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
export default function Home() {
    const [allAmiibo, setAllAmiibo] = useState(false);
    const [toggle, setToggle] = useState(false);
    const { isLoading, error } = GetAmiibo();

    const handleExpansion = () => {
        setToggle((prevIsOn) => !prevIsOn);
        setAllAmiibo(!allAmiibo);
    };

    // Selecting amiibo data from the redux store...
    const amiiboDataRedux = useAppSelector((state) => state.allAmiiboSlice.amiibos);
    // console.log('Testing...: ', amiiboDataRedux);

    // Filter amiibo data based on allAmiibo state
    const filterAmiiboAllOrRecent = allAmiibo
        ? amiiboDataRedux
        : filterRecentReleases(amiiboDataRedux);

    // console.log('Recent...: ', filterAmiiboAllOrRecent);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>{error.message}</p>;

    return (
        <>
            <h1>Amiibo Atlas</h1>
            <Container>
                <UserInfoContainer>
                    <UserInfo>
                        <h4>Select User Session</h4>
                        <h4>Display User options</h4>
                    </UserInfo>
                    <UserInfo>
                        <h3>User Wishlist</h3>
                        <p>TO DO: Hook into Redux store</p>
                        <p>Select User Session</p>
                        <p>Display Current User Wishlist here from global state</p>
                    </UserInfo>
                </UserInfoContainer>
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
