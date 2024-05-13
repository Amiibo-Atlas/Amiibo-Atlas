import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { getAmiibo } from './getAllAmiibo';
import store from '../../redux/store';
import calculateDateRecentAmiibo from './recentAmiibo';

import { v4 as uuidv4 } from 'uuid';

export async function fetchAmiiboList(API: string) {
    const response = await axios.get(`${API}`);
    if (response.status < 200 || response.status >= 400) {
        throw new Error(response.statusText);
    }

    return response.data.amiibo.map((amiibo) => ({
        ...amiibo,
        id: amiibo.id || uuidv4(),
    }));
}

export function GetAmiibo() {
    const { isLoading, error, data } = useQuery({
        queryKey: ['data'],
        queryFn: async () => {
            try {
                const amiibos = await fetchAmiiboList(import.meta.env.VITE_API_URL);
                store.dispatch(getAmiibo(amiibos));
                return amiibos;
            } catch (e) {
                console.error('Error...: ', e);
            }
        },
    });
    return { isLoading, error, data };
}

// This function takes amiibos array consisting of objects of data, and filters it down based on NA releases, and whether or not it is considered a 'recent' amiibo based on the Date time library utilization as seen in 'recentAmiibo' function.
export function filterRecentReleases(amiibos) {
    const recentRelease = amiibos.filter((amiibo) => {
        const releases = amiibo.release;
        return releases.na && calculateDateRecentAmiibo(releases.na);
    });
    return recentRelease;
}
