// Components
import Card from './Card';
import { fetchAmiibos } from '../requests/fetchAmiibos';

// Dependencies
import { useQuery } from '@tanstack/react-query';
import styled from '@emotion/styled';

// Layout Components
const PageContainer = styled.div`
    max-width: 1920px;
    padding: 0 24px;
    margin: 0 auto;
`;

const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    margin: 2rem 0;
`;

const BreadcrumbNav = styled.nav`
    padding: 1rem 0;
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

// Mock Data
const filters = [
    {
        id: 1,
        name: 'Amiibo Series',
        options: [
            {
                key: '0x06',
                name: '8-bit Mario',
            },
            {
                key: '0x05',
                name: 'Animal Crossing',
            },
            {
                key: '0x07',
                name: 'Skylanders',
            },
        ],
    },
    {
        id: 2,
        name: 'Game Series',
        options: [
            {
                key: '0x000',
                name: 'Super Mario',
            },
            {
                key: '0x008',
                name: "Yoshi's Woolly World",
            },
            {
                key: '0x320',
                name: 'Sonic',
            },
        ],
    },
    {
        id: 3,
        name: 'Type',
        options: [
            {
                key: '0x00',
                name: 'Figure',
            },
            {
                key: '0x01',
                name: 'Card',
            },
            {
                key: '0x02',
                name: 'Yarn',
            },
        ],
    },
];

function AmiiboList() {
    const { isLoading, error, data } = useQuery({
        queryKey: ['amiibos'],
        queryFn: async () => {
            try {
                const fullUrl = `${import.meta.env.VITE_API_URL}?amiiboSeries=Legend Of Zelda`;
                const amiibos = await fetchAmiibos(fullUrl);
                return amiibos;
            } catch (e) {
                console.error('Error...: ', e);
            }
        },
    });

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <PageContainer>
            <TitleContainer>
                <BreadcrumbNav>
                    <a href="#">Home</a> / Amiibos
                </BreadcrumbNav>
                <Title>Amiibos</Title>
            </TitleContainer>

            <MainSection>
                <FilterSection>
                    <h2>Filters</h2>
                    {filters?.map((filter) => (
                        <div key={filter.id}>
                            <h3>{filter.name}</h3>
                            {filter.options.map((option) => (
                                <div key={option.key}>
                                    <input type="checkbox" value={option.name} />
                                    <label htmlFor={`${filter.id}-${option.name}`}>
                                        {option.name}
                                    </label>
                                </div>
                            ))}
                        </div>
                    ))}
                </FilterSection>
                <GridContainer>
                    {data?.map((amiibo) => (
                        <Card key={`${amiibo.tail}-${amiibo.head}`} amiibo={amiibo} />
                    ))}
                </GridContainer>
            </MainSection>
        </PageContainer>
    );
}

export default AmiiboList;
