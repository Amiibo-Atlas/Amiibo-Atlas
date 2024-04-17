import GetRecentAmiibo from '../requests/recentAmiibo';
import AmiiboCard from '../components/AmiiboCard';

export default function Home() {
    const { data, isLoading, error } = GetRecentAmiibo();
    return (
        <>
            <h1>Amiibo Atlas</h1>
            <img src="src/assets/amiibo.png" />
            <h2> New Releases | See all</h2>
            <AmiiboCard data={data} />
        </>
    );
}
