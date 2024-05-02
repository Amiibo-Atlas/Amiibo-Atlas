import { useEffect, useState } from 'react';

const SortAmiibos = ({ amiibos, setAmiibos }) => {
    const [sortOption, setSortOption] = useState('Release Date');

    const sortAmiibos = (amiibos, option) => {
        switch (option) {
            case 'Release Date':
                return [...amiibos].sort((a, b) => new Date(a.release.na) - new Date(b.release.na));
            case 'Newest products':
                return [...amiibos].sort((a, b) => new Date(b.release.na) - new Date(a.release.na));
            case 'Product Name A-Z':
                return [...amiibos].sort((a, b) => a.name.localeCompare(b.name));
            case 'Product Name Z-A':
                return [...amiibos].sort((a, b) => b.name.localeCompare(a.name));
            default:
                return amiibos;
        }
    };

    useEffect(() => {
        setAmiibos(sortAmiibos(amiibos, sortOption));
    }, [sortOption]);

    return (
        <select value={sortOption} onChange={e => setSortOption(e.target.value)}>
            <option value="Release Date">Release Date</option>
            <option value="Newest products">Newest products</option>
            <option value="Product Name A-Z">Product Name A-Z</option>
            <option value="Product Name Z-A">Product Name Z-A</option>
        </select>
    );
};

export default SortAmiibos;