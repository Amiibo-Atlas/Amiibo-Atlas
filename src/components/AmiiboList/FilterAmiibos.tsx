/** @jsxImportSource @emotion/react */
// Dependencies
import { useState, useEffect } from 'react';

// Constants
import { filterOptions } from '../../constants/constants';

// Styles
import {
    filterContainer,
    filterTitle,
    optionContainer,
    optionLabel,
    checkbox,
} from './AmiiboListStyles';

const FilterAmiibos = ({ originalData, setAmiibos }) => {
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
                        .slice(0, filter.options.length)
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
                </div>
            ))}
        </>
    );
};

export default FilterAmiibos;
