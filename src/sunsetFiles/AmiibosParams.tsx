/// SUNSET THIS FILE ///
/// SUNSET THIS FILE ///
/// SUNSET THIS FILE ///
/// SUNSET THIS FILE ///
/// SUNSET THIS FILE ///

import { useParams } from 'react-router-dom';

import { useAppSelector } from '../redux/hooks';
import { AmiiboState } from '../types/Amiibo';

import { Amiibo } from '../types/Amiibo';
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
    // const selectedAmiibo = amiiboDataRedux.find((amiibo) => amiibo.id === id);

    /// kjsdghlsjdghsd

    const selectedAmiibo = useAppSelector((state: AmiiboState) => state.amiibo.selectedAmiibo);
    console.log('TESTING...!!!!!!!!: ');

    // sdjgksdghsdgj

    // log store.
    console.log('Redux store for single amiibo: ', selectedAmiibo);
    console.log('Redux store for ALL amiibo: ', amiiboDataRedux);

    // Find the amiibo within the same series, based on all amiibo state.
    // Use this to filter additional amiibo wihtin the same series.
    const sameSeries = amiiboDataRedux.filter(
        (amiibo) => amiibo.amiiboSeries === selectedAmiibo?.amiiboSeries && amiibo.id !== id
    );

    // Logic to ensure amiibo exist.
    if (!selectedAmiibo) {
        return (
            <div>
                Loading Amiibo...if there is an error, try again. (Fix this! Amiibo should have one
                unique ID, and not change on reload...)
            </div>
        ); // This should change.
    }

    return (
        <div>
            <h1>{selectedAmiibo.name}</h1>
            <ImgWrapper>
                {/* <AmiiboCard amiiboProps={filterAmiiboAllOrRecent} /> */}
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

            <h3>Other Amiibos in the Same Series:</h3>
            <ul>
                {sameSeries.map((amiibo) => (
                    <li key={amiibo.id}>
                        {/* <Link to={`/amiibos/${amiibo.id}`}>{amiibo.name}</Link> */}
                        navigate(`/amiibos/${amiibo.tail}-${amiibo.head}`);
                    </li>
                ))}
            </ul>
        </div>
    );
}
