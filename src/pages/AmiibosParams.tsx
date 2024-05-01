import { useParams } from 'react-router-dom';
import { useAppSelector } from '../redux/hooks';
import { Amiibo } from '../interfaces/amiiboInterface';
import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

const ImgWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const ContainImg = styled.img`
    width: 100px;
    height: auto;
`;

export default function AmiibosParams() {
    const parameters = useParams();
    const { id } = parameters;

    // Access redux store for particular amiibo.
    const amiiboDataRedux: Amiibo[] = useAppSelector((state) => state.allAmiiboSlice.amiibos);
    const selectedAmiibo = amiiboDataRedux.find((amiibo) => amiibo.id === id);

    // log store.
    console.log('Redux store for single amiibo: ', selectedAmiibo);
    console.log('Redux store for ALL amiibo: ', amiiboDataRedux);

    // Logic to ensure amiibo exist.
    if (!selectedAmiibo) {
        return <div>Loading...</div>; // This should change.
    }

    return (
        <div>
            <h1>{selectedAmiibo.name}</h1>
            <ImgWrapper>
                <ContainImg src={selectedAmiibo.image} />
            </ImgWrapper>

            <p>Game Series: {selectedAmiibo.gameSeries}</p>
            <p>Amiibo Series: {selectedAmiibo.amiiboSeries}</p>
            <p>Character: {selectedAmiibo.character}</p>
            <h3>Release Date: </h3>
            <p>Australia: {selectedAmiibo.release.au}</p>
            <p>Europe: {selectedAmiibo.release.eu}</p>
            <p>Japan: {selectedAmiibo.release.jp}</p>
            <p>North America: {selectedAmiibo.release.na}</p>
        </div>
    );
}
