import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

// Fetches entire amiibo data from the RESTful API, API sourced in .env file, see documentation for setting up locally.
// Returns all amiibo data.
async function fetchAmiiboData() {
    const API = import.meta.env.VITE_API_URL;
    const response = await axios.get(`${API}`);
    return response.data.amiibo;
}

// Utilization of TanStack Query to ensure solid state management for amiibo data - ensures caching of data too. Designed to work with async.
// When called, if `isLoading` (data undefined until data is successfully pulled), will display a message, otherwise, once data loads, will render data
// based on above fetchAmiiboData function.
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
