// Components
import Card from './Card';
import SortAmiibos from './SortAmiibos';
import FilterAmiibos from './FilterAmiibos';
import Breadcrumb from '../shared/Breadcrumb';
import { fetchAmiiboList } from '../../requests/fetchAmiiboList';
import { CARDS_PER_LOAD } from '../../constants/constants';
import nintendo from '../../assets/super_nintendo_world.png';
import mario from '../../assets/mario.png';

// Styles
import {
    PageContainer,
    LayoutContainer,
    ControlSection,
    MainSection,
    GridContainer,
    LoadMoreButton,
    Overlay,
    BannerHero,
    ColMd8,
    ColMd4
} from './AmiiboListStyles';
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
            setAmiibos(response);
            setOriginalData(response);
            return response;
        },
    });

    return (
        <PageContainer>
            <Breadcrumb
                paths={[
                    { url: '/', name: 'Home' },
                    { url: '/amiibos', name: 'Amiibos' },
                ]}
                currentUrl="/amiibos"
            />
            <BannerHero>
                <ColMd8>
                    <div style={{ padding: '1rem 4rem' }}>
                        <h1>amiibo</h1>
                        <p>Explore, filter, and add amiibos to your wishlist. This site uses data from Amiibo API - Learn more at 
                            <a href='amiiboapi.com'> amiiboapi.com</a>.
                        </p>
                    </div>
                </ColMd8>
                <ColMd4>
                    <img src={nintendo} alt="Mario" style={{ height: 'auto', width: '50%' }} />
                    <img src={mario} alt="Mario" style={{ height: 'auto', width: '50%' }} />
                </ColMd4>
            </BannerHero>

            <LayoutContainer>
                <ControlSection>
                    <p style={{ width: '100%', paddingLeft: '4rem' }}>{amiibos.length} results</p>
                    <SortAmiibos amiibos={amiibos} setAmiibos={setAmiibos} />
                    <FilterAmiibos originalData={originalData} setAmiibos={setAmiibos} />
                </ControlSection>

                <MainSection>
                    {isLoading || isLoadingMore ? (
                        <Overlay>
                            <BeatLoader size={15} />
                        </Overlay>
                    ) : null}
                    <GridContainer>
                        {amiibos.slice(0, itemsToShow).map((amiibo: any) => (
                            <Card key={`${amiibo.tail}-${amiibo.head}`} amiibo={amiibo} />
                        ))}
                    </GridContainer>
                    {itemsToShow < amiibos.length && (
                        <div className="text-center">
                            <LoadMoreButton onClick={handleLoading}>Load More</LoadMoreButton>
                        </div>
                    )}
                </MainSection>
            </LayoutContainer>
        </PageContainer>
    );
};

export default AmiiboList;
