// Dependencies
/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import { useAppSelector } from '../../redux/hooks';
import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';

// Components
import { getUser } from '../../features/user/userAPI';
import { User } from '../../types/User';
import Breadcrumb from '../shared/Breadcrumb';
import { getWishlist } from '../../features/user/userAPI';
import { Amiibo } from '../../types/Amiibo';

// Styles
import {
    PageContainer,
    OnlineStatus,
    ImageBox,
    ProfileContainer,
    ProfileName,
    ProfileContent,
    BottomContainer,
    ProfileCards
} from './ProfilePageStyles';

import { Button } from '../AmiiboList/AmiiboListStyles';

const WishlistItem = styled.div`
    display: flex;
    align-items: center;
    margin: 1rem 0;
`;

const WishlistImage = styled.img`
    width: 60px;
    height: 60px;
    object-fit: contain;
    border: 1px solid #d5d5d5;
    border-radius: 10px;
    margin-right: 1rem;
`;

const headerStyle = css`
    border-bottom: 1px solid #ddd;
`;

const bodyStyle = css`
    padding-top: 1rem;
`;

const textStyle = css`
    padding-bottom: 0.5rem;
`;

function ProfilePage() {
    const navigate = useNavigate();
    const userId = useAppSelector((state) => state.user.userId);
    const [user, setUser] = useState<User | null>(null);
    const [wishlist, setWishlist] = useState<Amiibo[]>([]);

    useEffect(() => {
        const fetchUser = async () => {
            if (userId) {
                const fetchedUser = await getUser(userId);
                setUser(fetchedUser || null);
                const fetchedWishlist = await getWishlist(userId);
                setWishlist(fetchedWishlist);
            }
            else {
                console.log('No user ID found');
            }
        };
        fetchUser();
    }, [userId]);

    const navigateTo = (path) => {
        navigate(path);
    };

    return (
        <PageContainer>
            <Breadcrumb
                paths={[
                    { url: '/', name: 'Home' },
                    { url: '/account', name: 'My Account' },
                ]}
                currentUrl='/account'
            />
            <ProfileContainer>
                <ProfileContent>
                    <ImageBox src={user?.profile_picture} />
                    <ProfileName>{user?.displayName}</ProfileName>
                    <OnlineStatus online={user != null} />
                </ProfileContent>
            </ProfileContainer>

            <BottomContainer>
                <ProfileCards>
                    <div>
                        <div css={headerStyle}>
                            <h2>Wishlists</h2>
                        </div>
                        {wishlist?.length > 0 ? (
                            <>
                                {wishlist.slice(0, 3).map((item) => (
                                    <WishlistItem>
                                        <WishlistImage src={item.image} alt={item.name} />
                                        <div>{item.name}</div>
                                    </WishlistItem>
                                ))}
                                <button css={Button} onClick={() => navigateTo('/wishlist')}>View All</button>
                            </>
                        ) : (
                            <div css={bodyStyle}>
                                <p css={textStyle}>You currently have no wishlists.</p>
                                <button css={Button} onClick={() => navigateTo('/amiibos')}>Add Wishlist</button>
                            </div>
                        )}
                    </div>
                </ProfileCards>
                <ProfileCards>
                    <div>
                        <div css={headerStyle}>
                            <h2>My Amiibos</h2>
                        </div>
                        <div css={bodyStyle}>
                            <p css={textStyle}>You currently have no amiibos.</p>
                            <button css={Button} onClick={() => navigateTo('/amiibos')}>Add Amiibos</button>
                        </div>
                    </div>
                </ProfileCards>
            </BottomContainer>
        </PageContainer>
    );
}

export default ProfilePage;
