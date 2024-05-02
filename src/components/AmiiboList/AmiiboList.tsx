// Components
import Card from './Card';
import SortAmiibos from './SortAmiibos';
import FilterAmiibos from './FilterAmiibos';
import Breadcrumb from '../shared/Breadcrumb';
import { fetchAmiiboList } from '../../requests/fetchAmiiboList';
import { CARDS_PER_LOAD } from '../constants/constants';

// Styles
import { PageContainer, TopSection, LayoutContainer, FilterSection, MainSection, Title, GridContainer, LoadMoreButton, Overlay } from './AmiiboListStyles';
import { BeatLoader } from 'react-spinners';

// Dependencies
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';


const AmiiboList = () => {
    const [amiibos, setAmiibos] = useState([]);
    const [originalData, setOriginalData] = useState([]);
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    const [itemsToShow, setItemsToShow] = useState(CARDS_PER_LOAD);

    const handleLoading = () => {
        setIsLoadingMore(true);
        setTimeout(() => {
            setItemsToShow(itemsToShow + CARDS_PER_LOAD);
            setIsLoadingMore(false);
        }, 1000);
    };

    const { isLoading } = useQuery({
        queryKey: ['amiibos'],
        queryFn: async () => {
            const response = await fetchAmiiboList(`${import.meta.env.VITE_API_URL}`);
            setOriginalData(response);
            setAmiibos(response);
        },
    });

    return (
        <PageContainer>
            <Breadcrumb
                paths={[{ url: '/', name: 'Home' }, { url: '/amiibos', name: 'Amiibos' }]}
                currentUrl="/amiibos"
            />
            <TopSection>
                <Title>Amiibos</Title>
                <p>{amiibos.length} results</p>
            </TopSection>

            <LayoutContainer>
                <FilterSection>
                    <SortAmiibos amiibos={amiibos} setAmiibos={setAmiibos} />
                    <FilterAmiibos originalData={originalData} setAmiibos={setAmiibos} />
                </FilterSection>

                <MainSection>
                    {isLoading || isLoadingMore ? (
                        <Overlay>
                            <BeatLoader color="#123abc" size={15} />
                        </Overlay>
                    ) : null}
                    <GridContainer>
                            {amiibos.slice(0, itemsToShow).map((amiibo) => (
                                <Card key={`${amiibo.tail}-${amiibo.head}`} amiibo={amiibo} />
                            ))}
                        </GridContainer>
                        {itemsToShow < amiibos.length && (
                            <div className='text-center'>
                                <LoadMoreButton onClick={handleLoading}>Load More</LoadMoreButton>
                            </div>
                        )}
                </MainSection>
            </LayoutContainer>
        </PageContainer>
    );
}

export default AmiiboList;
