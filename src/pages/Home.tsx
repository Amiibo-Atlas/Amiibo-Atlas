import filterRecentReleases from '../requests/filterRecentReleases';
import GetAmiibo from '../requests/fetchAmiiboData';
import AmiiboCard from '../components/AmiiboCard';

export default function Home() {
    const { data, isLoading, error } = GetAmiibo();
    console.log('Testing....: ', data);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>{error.message}</p>;

    const recentRelease = filterRecentReleases(data);
    console.log('Check this out too...: ', recentRelease);

    return (
        <>
            <h1>Amiibo Atlas</h1>
            <img src="src/assets/amiibo.png" />
            <h2> New Releases | See all</h2>
            <AmiiboCard data={recentRelease} />
        </>
    );
}
