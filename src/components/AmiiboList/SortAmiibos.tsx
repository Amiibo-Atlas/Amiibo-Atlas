/** @jsxImportSource @emotion/react */
// Dependencies
import { useEffect, useState } from 'react';

// Constants
import {
    sortOptions,
    RELEASE_DATE,
    NEWEST_PRODUCTS,
    PRODUCT_NAME_AZ,
    PRODUCT_NAME_ZA,
} from '../../constants/constants';

// Styles
import { dropdown } from './AmiiboListStyles';

const SortAmiibos = ({ amiibos, setAmiibos }) => {
    const [sortOption, setSortOption] = useState(RELEASE_DATE);

    const sortAmiibos = (amiibos, option) => {
        switch (option) {
            case RELEASE_DATE:
                return [...amiibos].sort(
                    (a, b) => new Date(a.release.na).getTime() - new Date(b.release.na).getTime()
                );
            case NEWEST_PRODUCTS:
                return [...amiibos].sort(
                    (a, b) => new Date(b.release.na).getTime() - new Date(a.release.na).getTime()
                );
            case PRODUCT_NAME_AZ:
                return [...amiibos].sort((a, b) => a.name.localeCompare(b.name));
            case PRODUCT_NAME_ZA:
                return [...amiibos].sort((a, b) => b.name.localeCompare(a.name));
            default:
                return amiibos;
        }
    };

    useEffect(() => {
        const sortedAmiibos = sortAmiibos(amiibos, sortOption);
        setAmiibos(sortedAmiibos);
    }, [sortOption]);

    return (
        <select css={dropdown} value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
            {sortOptions.map((option) => (
                <option key={option.id} value={option.name}>
                    {option.name}
                </option>
            ))}
        </select>
    );
};

export default SortAmiibos;
