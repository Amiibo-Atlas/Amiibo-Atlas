/** @jsxImportSource @emotion/react */
// Dependencies
import { useState, useEffect } from 'react';
import { FiShare } from 'react-icons/fi';
import { RxCross2 as Icon } from 'react-icons/rx';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

// Components
import AmiiboItem from './AmiiboItem';
import { Amiibo } from '../../types/Amiibo';
import { User } from '../../types/User';
import { getShareId, getUser, getWishlist } from '../../features/user/userAPI';
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

import { useAppSelector } from '../../redux/hooks';

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

const WishlistPage = () => {
    const userId = useAppSelector((state) => state.user.userId);
    const [user, setUser] = useState<User | null>();
    const [shareId, setShareId] = useState('');
    const [wishlist, setWishlist] = useState<Amiibo[]>([]);
    const [modalOpen, setModalOpen] = useState(false);

    console.log(user);

    useEffect(() => {
        const fetchUser = async () => {
            if (userId) {
                const fetchedUser = await getUser(userId);
                setUser(fetchedUser || null);
                const fetchedWishlist = await getWishlist(userId);
                setWishlist(fetchedWishlist);
                const fetchedShareId = await getShareId(userId);
                setShareId(fetchedShareId || null);
            }
        };
        fetchUser();
    }, [userId]);

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };

    return (
        <PageContainer>
            <Breadcrumb
                paths={[
                    { url: '/', name: 'Home' },
                    { url: '/account', name: 'My Account' },
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
                        <p>You currently have no items in your wishlist.</p>
                    </>
                )}
            </Collection>
            {modalOpen && (
                <ModalContainer>
                    <div css={modalContent}>
                    <ModalButton onClick={toggleModal}><Icon/></ModalButton>
                        <div css={topper}>Share Wish List</div>
                        <div css={informationBox}>
                            <WishlistShare shareId={shareId}></WishlistShare>
                        </div>
                    </div>
                </ModalContainer>
            )}
        </PageContainer>
    );
}

export default WishlistPage;
