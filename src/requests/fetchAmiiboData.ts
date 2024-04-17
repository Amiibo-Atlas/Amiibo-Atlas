import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

async function fetchAmiiboData() {
    const API = import.meta.env.VITE_API_URL;
    const response = await axios.get(`${API}`);
    return response.data.amiibo;
}

export default function GetAmiibo() {
    const { isLoading, error, data } = useQuery({
        queryKey: ['data'],
        queryFn: async () => {
            try {
                const amiibos = await fetchAmiiboData();
                return amiibos;
            } catch (e) {
                console.error('Error...: ', e);
            }
        },
    });
    return { isLoading, error, data };
}
