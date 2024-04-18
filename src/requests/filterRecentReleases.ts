import calculateDateRecentAmiibo from '../functions/recentAmiibo';

// This function takes amiibos array consisting of objects of data, and filters it down based on NA releases, and whether or not it is considered a 'recent' amiibo based on the Date time library utilization as seen in 'recentAmiibo' function.
export default function filterRecentReleases(amiibos) {
    const recentRelease = amiibos.filter((amiibo) => {
        const releases = amiibo.release;
        return releases.na && calculateDateRecentAmiibo(releases.na);
    });
    return recentRelease;
}
