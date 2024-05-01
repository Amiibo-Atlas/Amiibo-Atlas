import { useParams } from 'react-router-dom';
import { useAppSelector } from '../redux/hooks';
import { Amiibo } from '../interfaces/amiiboInterface';

export default function AmiibosParams() {
    const parameters = useParams();
    const { id } = parameters;

    // Access redux store for particular amiibo.
    const amiiboDataRedux: Amiibo[] = useAppSelector((state) => state.allAmiiboSlice.amiibos);
    const selectedAmiibo = amiiboDataRedux.find((amiibo) => amiibo.id === id);

    // Logic to ensure amiibo exist.
    if (!selectedAmiibo) {
        return <div>Loading...</div>; // You can render a loading indicator here
    }

    return (
        <div>
            <h1>{selectedAmiibo.name}</h1>
            <img src={selectedAmiibo.image} alt={selectedAmiibo.name} />
            <p>Game Series: {selectedAmiibo.gameSeries}</p>
            <p>Character: {selectedAmiibo.character}</p>
        </div>
    );
}
