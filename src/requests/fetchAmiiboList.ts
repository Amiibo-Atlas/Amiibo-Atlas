import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export async function fetchAmiiboList(API: string) {
    const response = await axios.get(`${API}`);
    if (response.status < 200 || response.status >= 400) {
        throw new Error(response.statusText);
    }
    return response.data.amiibo;
}

export default function GetAmiibo() {
    const { isLoading, error, data } = useQuery({
        queryKey: ['data'],
        queryFn: async () => {
            try {
                const amiibos = await fetchAmiiboList(import.meta.env.VITE_API_URL);
                return amiibos;
            } catch (e) {
                console.error('Error...: ', e);
            }
        },
    });
    return { isLoading, error, data };
}
