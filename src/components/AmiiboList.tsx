// Components
import Card from './Card';
import SortAmiibos from './SortAmiibos';
import { fetchAmiiboList } from '../requests/fetchAmiiboList';

// Dependencies
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import styled from '@emotion/styled';

// Layout Components
const PageContainer = styled.div`
    max-width: 1920px;
    padding: 0 24px;
    margin: 0 auto;
`;

const Breadcrumb = styled.nav`
    padding: 1rem 0;
`;

const TopSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    margin: 2rem 0;
`;

const Title = styled.h1`
    padding: 0 25px;
    margin: 0 auto;
`;

const MainSection = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 -15px;
`;

const FilterSection = styled.aside`
    width: 15rem;
    margin-right: 20px;
`;

const GridContainer = styled.div`
    flex-grow: 1;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-bottom: 3rem;
`;

const LoadMoreButton = styled.button`
    padding: 10px 20px;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        background-color: #0056b3;
    }
`;

const filters = [
    {
        id: 1,
        name: 'Franchise',
        options: [
            { key: 'animal-crossing', name: 'Animal Crossing' },
            { key: 'chibi-robo', name: 'Chibi-Robo' },
            { key: 'fire-emblem', name: 'Fire Emblem' },
            { key: 'kirby', name: 'Kirby' },
            { key: 'metroid', name: 'Metroid' },
            { key: 'monster-hunter', name: 'Monster Hunter' },
            { key: 'pikmin', name: 'Pikmin' },
            { key: 'pokemon', name: 'Pokemon' },
            { key: 'shovel-knight', name: 'Shovel Knight' },
            { key: 'splatoon', name: 'Splatoon' },
            { key: 'street-fighter', name: 'Street Fighter' },
            { key: 'super-smash-bros', name: 'Super Smash Bros' },
            { key: 'the-legend-of-zelda', name: 'The Legend of Zelda' },
        ],
    },
];

function AmiiboList() {
    const [selectedSeries, setSelectedSeries] = useState('');
    const [isExpanded, setIsExpanded] = useState(false);
    const [itemsToShow, setItemsToShow] = useState(12);

    const { isLoading, error, data } = useQuery({
        queryKey: ['amiibos', selectedSeries],
        queryFn: async () => {
            const fullUrl = new URL(`${import.meta.env.VITE_API_URL}?amiiboSeries=${selectedSeries}`);
            const amiibos = await fetchAmiiboList(fullUrl.toString());
            return amiibos;
        },
    });

    const [sortedData, setSortedData] = useState(data);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    if (data.length === 0) return <p>No data found</p>;

    return (
        <PageContainer>
            <Breadcrumb>
                <a href="/">Home</a> / Amiibos
            </Breadcrumb>
            <TopSection>
                <Title>Amiibos</Title>
                <p>{data.length} results</p>
            </TopSection>

            <SortAmiibos data={data} setSortedData={setSortedData} />

            {sortedData && (
                <MainSection>
                    <FilterSection>
                        <h2>Filters</h2>
                        {filters?.map((filter) => (
                            <div key={filter.id}>
                                <h3>{filter.name}</h3>
                                {filter.options.slice(0, isExpanded ? filter.options.length : 5).map((option) => (
                                    <div key={option.key}>
                                        <label>
                                            <input type="checkbox" value={option.name} onChange={e => setSelectedSeries(e.target.checked ? e.target.value : '')} />
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
                    </FilterSection>
                    <div>
                        <GridContainer>
                            {sortedData.slice(0, itemsToShow).map((amiibo) => (
                                <Card key={`${amiibo.tail}-${amiibo.head}`} amiibo={amiibo} />
                            ))}
                        </GridContainer>
                        {itemsToShow < sortedData.length && (
                            <LoadMoreButton onClick={() => setItemsToShow(itemsToShow + 12)}>Load More</LoadMoreButton>
                        )}
                    </div>
                </MainSection>
            )}
        </PageContainer>
    );
}

export default AmiiboList;
