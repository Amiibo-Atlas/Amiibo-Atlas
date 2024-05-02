const FetchStatus = ({ isLoading, error, data }) => {
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    if (Array.isArray(data) && data.length === 0) return <p>No data found</p>;

    return null;
}

export default FetchStatus;