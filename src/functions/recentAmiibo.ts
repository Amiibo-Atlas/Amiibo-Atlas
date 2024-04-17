export default function recentAmiibo(date) {
    if (!date) return false;
    const today = new Date();
    const oneYearAgo = new Date(today.getFullYear() - 1, today.getMonth(), today.getDate());
    const releaseDate = new Date(date);
    return releaseDate >= oneYearAgo;
}
