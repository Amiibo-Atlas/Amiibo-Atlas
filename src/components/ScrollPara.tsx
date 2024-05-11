import { useState, useEffect } from 'react';
import AmiiboCard from './AmiiboCard';
import { useAppSelector } from '../redux/hooks';
import { Amiibo } from '../interfaces/amiiboInterface';

import styled from '@emotion/styled';

const Container = styled.div`
    display: flex;
    flex-direction: row;
`;

export default function Scroll() {
    // Selecting amiibo data from the redux store...
    const amiiboDataRedux = useAppSelector((state) => state.allAmiiboSlice.amiibos);

    // State designed in order to shuffle five random amiibo from the amiibo global store.
    const [randomAmiibo, setRandomAmiibo] = useState<Amiibo[]>([]);

    // Function to shuffle array
    function randomizeAmiiboSplash(array) {
        const randomAmiiboArr = [...array]; // Copy the array, as we do not want to mismanage the original...
        for (let i = randomAmiiboArr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [randomAmiiboArr[i], randomAmiiboArr[j]] = [randomAmiiboArr[j], randomAmiiboArr[i]];
        }
        return randomAmiiboArr;
    }

    // Shuffle the amiibo data when it changes
    useEffect(() => {
        const shuffleFiveAmiibo = randomizeAmiiboSplash(amiiboDataRedux);
        setRandomAmiibo(shuffleFiveAmiibo.slice(0, 5)); // Randomize 5 amiibo
    }, [amiiboDataRedux]);

    return (
        <Container>
            <AmiiboCard amiiboProps={randomAmiibo} />
        </Container>
    );
}
