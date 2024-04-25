import filterRecentReleases from '../requests/filterRecentReleases';
import GetAmiibo from '../requests/fetchAmiiboList';
import AmiiboCard from '../components/AmiiboCard';
import myImage from '../assets/amiibo.png';

// Deconstruct data from TanStack function 'GetAmiibo', utilize its state management for checking for data (isLoading, data, error), render conditionally.
// Calls function to filter out recent releases, sends to component card function component (reused assets for showcasing amiibo).
export default function Home() {
    const { data, isLoading, error } = GetAmiibo();

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>{error.message}</p>;

    const recentRelease = filterRecentReleases(data);
    console.log(recentRelease);

    return (
        <>
            <h1>Amiibo Atlas</h1>
            <img src={myImage} />
            <h2> New Releases | See all</h2>
            <AmiiboCard />
        </>
    );
}
