/** @jsxImportSource @emotion/react */
// Dependencies
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';

// Components
import Card from './Card';
import SortAmiibos from './SortAmiibos';
import FilterAmiibos from './FilterAmiibos';
import Breadcrumb from '../shared/Breadcrumb';
import { fetchAmiiboList } from '../../features/amiibo/amiiboAPI';
import { CARDS_PER_LOAD } from '../../constants/constants';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSelectedAmiibo } from '../../features/amiibo/amiiboSlice';
import { addToWishlist } from '../../features/user/userAPI';
import { useAppSelector } from '../../redux/hooks';

// Styles
import nintendo from '../../assets/super_nintendo_world.png';
import mario from '../../assets/mario.png';
import { css } from '@emotion/react';
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
    ColMd4,
} from './AmiiboListStyles';
import { BeatLoader } from 'react-spinners';

const modalOverlay = css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const modalContent = css`
    background: white;
    padding: 20px;
    border-radius: 5px;
    width: 300px;
    text-align: center;
    z-index: 10;
`;

const modalButton = css`
    padding: 10px 20px;
    border-radius: 15px;
    margin: 10px;
    border: none;
    cursor: pointer;
`;

const AmiiboList = () => {
    const userId = useAppSelector((state) => state.user.userId);
    const [amiibos, setAmiibos] = useState([]);
    const [originalData, setOriginalData] = useState([]);
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    const [itemsToShow, setItemsToShow] = useState(CARDS_PER_LOAD);
    const [isModalOpen, setModalOpen] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

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

    const handleViewMore = (amiibo) => {
        dispatch(setSelectedAmiibo(amiibo));
        navigate(`/amiibos/${amiibo.tail}-${amiibo.head}`);
    };

    const handleAddWishlist = async (amiibo) => {
        if (!userId && !isModalOpen) {
            setModalOpen(true);
            return;
        }
        try {
            await addToWishlist(userId, amiibo);
            toast.success('Added to wishlist');
        } catch (error) {
            if (error instanceof Error) {
                if (error.message === 'Amiibo already in wishlist') {
                    toast.error('This amiibo is already in your wishlist');
                } else {
                    console.error('Failed to add to wishlist', error);
                    toast.error('Failed to add to wishlist');
                }
            } else {
                console.error('Unexpected error', error);
                toast.error('An unexpected error occurred');
            }
        }
    };

    const closeModal = (e) => {
        e.stopPropagation();
        setModalOpen(false);
    };

    const handleContentClick = (e) => {
        e.stopPropagation();
    };

    const navigateTo = (path) => {
        navigate(path);
        setModalOpen(false);
    };

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
                        <p>
                            Explore, filter, and add amiibos to your wishlist. This site uses data
                            from Amiibo API - Learn more at
                            <a href="https://www.amiiboapi.com" target="_blank">
                                {' '}
                                amiiboapi.com
                            </a>
                            .
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
                            <Card
                                key={`${amiibo.tail}-${amiibo.head}`}
                                amiibo={amiibo}
                                onClickDetail={() => handleViewMore(amiibo)}
                                onClickWishlist={() => handleAddWishlist(amiibo)}
                            />
                        ))}
                    </GridContainer>
                    {itemsToShow < amiibos.length && (
                        <div className="text-center">
                            <LoadMoreButton onClick={handleLoading}>Load More</LoadMoreButton>
                        </div>
                    )}
                </MainSection>
            </LayoutContainer>
            {isModalOpen && (
                <div css={modalOverlay} onClick={closeModal}>
                    <div css={modalContent} onClick={handleContentClick}>
                        <h3>Sign in to save to your wishlist</h3>
                        <button
                            css={modalButton}
                            onClick={() => navigateTo('/login')}
                            style={{ backgroundColor: 'red', color: 'white' }}
                        >
                            SIGN IN
                        </button>
                        <button css={modalButton} onClick={closeModal}>
                            CLOSE
                        </button>
                    </div>
                </div>
            )}
        </PageContainer>
    );
};

export default AmiiboList;
