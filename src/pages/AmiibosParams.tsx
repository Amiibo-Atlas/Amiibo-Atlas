import { useParams } from 'react-router-dom';

export default function AmiibosParams() {
    const parameters = useParams();
    const { id } = parameters;
    return <h1>{id}</h1>;
}
