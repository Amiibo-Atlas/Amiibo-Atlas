import filterRecentReleases from '../requests/filterRecentReleases';
import GetAmiibo from '../requests/fetchAmiiboList';
import AmiiboCard from '../components/AmiiboCard';

// Deconstruct data from TanStack fucntion 'GetAmiibo', utilize its state management for checking for data (isLoading, data, error), render conditionally.
// Calls function to filter out recent releases, sends to componetized card function component (reused assets for showcasing amiibo).
export default function Home() {
    const { data, isLoading, error } = GetAmiibo();

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>{error.message}</p>;

    const recentRelease = filterRecentReleases(data);

    return (
        <>
            <h1>Amiibo Atlas</h1>
            <img src="src/assets/amiibo.png" />
            <h2> New Releases | See all</h2>
            <AmiiboCard data={recentRelease} />
        </>
    );
}
