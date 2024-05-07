/** @jsxImportSource @emotion/react */

import { useState, useEffect } from 'react';
import { filterOptions } from '../../constants/constants';
import { INITIAL_FILTER_OPTIONS_COUNT } from '../../constants/constants';
import {
    filterContainer,
    filterTitle,
    optionContainer,
    optionLabel,
    checkbox,
    expandButton,
} from './AmiiboListStyles';

const FilterAmiibos = ({ originalData, setAmiibos }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [selectedCheckbox, setSelectedCheckbox] = useState<string[]>([]);

    useEffect(() => {
        let filteredAmiibos = originalData;
        if (selectedCheckbox.length > 0) {
            filteredAmiibos = originalData.filter((amiibo) => {
                return (
                    selectedCheckbox.includes(amiibo.amiiboSeries) ||
                    selectedCheckbox.includes(amiibo.gameSeries)
                );
            });
        }
        setAmiibos(filteredAmiibos);
    }, [selectedCheckbox]);

    const handleFilterChange = (e) => {
        if (e.target.checked) {
            setSelectedCheckbox([...selectedCheckbox, e.target.value]);
        } else {
            setSelectedCheckbox(selectedCheckbox.filter((filter) => filter !== e.target.value));
        }
    };

    return (
        <>
            {filterOptions?.map((filter) => (
                <div css={filterContainer} key={filter.id}>
                    <h3 css={filterTitle}>{filter.name}</h3>
                    {filter.options
                        .slice(0, isExpanded ? filter.options.length : INITIAL_FILTER_OPTIONS_COUNT)
                        .map((option) => (
                            <div css={optionContainer} key={option.key}>
                                <label css={optionLabel}>
                                    <input
                                        css={checkbox}
                                        type="checkbox"
                                        value={option.name}
                                        onChange={handleFilterChange}
                                    />
                                    {option.name}
                                </label>
                            </div>
                        ))}
                    <button css={expandButton} onClick={() => setIsExpanded(!isExpanded)}>
                        {isExpanded ? '- Less' : '+ More'}
                    </button>
                </div>
            ))}
        </>
    );
};

export default FilterAmiibos;
