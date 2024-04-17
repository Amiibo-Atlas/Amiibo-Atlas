import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

function recentAmiibo(date) {
    if (!date) return false;
    const today = new Date();
    const oneYearAgo = new Date(today.getFullYear() - 1, today.getMonth(), today.getDate());
    const releaseDate = new Date(date);
    return releaseDate >= oneYearAgo;
}

export default function GetRecentAmiibo() {
    const API = import.meta.env.VITE_API_URL;
    console.log('API is...: ', API);
    const { isLoading, error, data } = useQuery({
        queryKey: ['data'],
        queryFn: async () => {
            try {
                const response = await axios.get(`${API}`);

                const recentRelease = response.data.amiibo.filter((amiibo) => {
                    const releases = amiibo.release;
                    return releases.na && recentAmiibo(releases.na);
                });
                console.log('Most recent amiibos:', recentRelease);
                return recentRelease;
            } catch (e) {
                console.error('Error...: ', e);
            }
        },
    });
    return { isLoading, error, data };
}
