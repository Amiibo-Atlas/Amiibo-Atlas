import filterRecentReleases from '../requests/filterRecentReleases';
import GetAmiibo from '../requests/fetchAmiiboList';
import AmiiboCard from '../components/AmiiboCard';
import myImage from '../assets/amiibo.png';
import { useState } from 'react';
import { useAppSelector } from '../redux/hooks';

import styled from '@emotion/styled';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

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
            <img src={myImage} />
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
        </>
    );
}
