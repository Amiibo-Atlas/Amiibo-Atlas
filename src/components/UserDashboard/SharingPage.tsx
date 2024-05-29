/** @jsxImportSource @emotion/react */
// Dependencies
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FiShare } from 'react-icons/fi';
import { RxCross2 as Icon } from 'react-icons/rx';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

// Components
import AmiiboItem from './AmiiboItem';
import { Amiibo } from '../../types/Amiibo';
import { getWishlist } from '../../features/user/userAPI';
import WishlistShare from './WishlistShare';

import { 
    PageContainer,
    Collection, 
    ShareButton, 
    ModalContainer, 
    ModalButton, 
    topper, 
    informationBox, 
    modalContent 
} from './ProfilePageStyles';
import Breadcrumb from '../shared/Breadcrumb';


const PageTop = styled.div`
    display: flex;
    margin: 1rem 8rem;
    justify-content: space-between;
    border-bottom: 2px solid #ddd;
`;

const TopLeft = styled.div`
    display: flex;
`;

const TopRight = styled.div`
    align-self: center;
`;

const headerStyle = css`
    font-size: 2rem;
`;

const countStyle = css`
    padding-left: 2rem;
    align-self: center;

`;

const SharingPage = () => {
    const { userId } = useParams();
    const [wishlist, setWishlist] = useState<Amiibo[]>([]);
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        const fetchWishlist = async () => {
            if (userId) {
                const fetchedWishlist = await getWishlist(userId);
                setWishlist(fetchedWishlist);
            }
        };
        fetchWishlist();
    }, [userId]);


    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };

    return (
        <PageContainer>
            <Breadcrumb
                paths={[
                    { url: '/', name: 'Home' },
                    { url: '/wishlist', name: 'Wishlist' },
                ]}
                currentUrl='/wishlist'
            />
            <PageTop>
                <TopLeft>
                    <h1 css={headerStyle}>Wishlist</h1>
                    <p css={countStyle}>{wishlist?.length} items</p>
                </TopLeft>
                <TopRight>
                    <ShareButton onClick={toggleModal}> <FiShare /> Share Wishlist</ShareButton>
                </TopRight>
            </PageTop>
            <Collection>
                {wishlist?.length > 0 ? (
                    wishlist.map(({ gameSeries, name, ...rest }) => (
                        <AmiiboItem
                            amiibo={{ gameSeries, name, ...rest }}
                            key={`${gameSeries} - ${name}`}
                            setWishlist={setWishlist}
                        />
                    ))
                ) : (
                    <>
                        <p>User currently has no items in their wishlist.</p>
                    </>
                )}
            </Collection>
            {modalOpen && (
                <ModalContainer>
                    <div css={modalContent}>
                    <ModalButton onClick={toggleModal}><Icon/></ModalButton>
                        <div css={topper}>Share Wish List</div>
                        <div css={informationBox}>
                            <WishlistShare userId={userId}></WishlistShare>
                        </div>
                    </div>
                </ModalContainer>
            )}
        </PageContainer>
    );
}

export default SharingPage;
