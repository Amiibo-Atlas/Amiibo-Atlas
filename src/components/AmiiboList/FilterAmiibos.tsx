import { useState, useEffect } from 'react';
import { filterOptions } from '../constants/constants';
import { INITIAL_FILTER_OPTIONS_COUNT } from '../constants/constants';

const FilterAmiibos = ({ originalData, setAmiibos }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [selectedFilters, setSelectedFilters] = useState([]);

    useEffect(() => {
        const filteredAmiibos = originalData.filter((amiibo) => {
            console.log(amiibo);
            return selectedFilters.length > 0 ? selectedFilters.includes(amiibo.amiiboSeries) : true;
        });
        setAmiibos(filteredAmiibos);
    }, [selectedFilters]);

    const handleFilterChange = (e) => {
        if (e.target.checked) {
            setSelectedFilters([...selectedFilters, e.target.value]);
        } else {
            setSelectedFilters(selectedFilters.filter(filter => filter !== e.target.value));
        }
    }

    return (
        <>
            {filterOptions?.map((filter) => (
                <div key={filter.id}>
                    <h3>{filter.name}</h3>
                    {filter.options
                        .slice(0, isExpanded ? filter.options.length : INITIAL_FILTER_OPTIONS_COUNT)
                        .map((option) => (
                            <div key={option.key}>
                                <label>
                                    <input
                                        type="checkbox"
                                        value={option.name}
                                        onChange={handleFilterChange}
                                    />
                                    {option.name}
                                </label>
                            </div>
                        ))}
                    {filter.name === 'Franchise' && (
                        <button onClick={() => setIsExpanded(!isExpanded)}>
                            {isExpanded ? '-Less' : '+More'}
                        </button>
                    )}
                </div>
            ))}
        </>
    );
};

export default FilterAmiibos;