import recentAmiibo from '../functions/recentAmiibo';

export default function filterRecentReleases(amiibos) {
    const recentRelease = amiibos.filter((amiibo) => {
        const releases = amiibo.release;
        return releases.na && recentAmiibo(releases.na);
    });
    return recentRelease;
}
