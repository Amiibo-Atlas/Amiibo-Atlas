/** @jsxImportSource @emotion/react */
// Dependencies
import { useEffect, useState } from 'react';
import { useAppSelector } from '../../redux/hooks';
import { css } from '@emotion/react';
import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
import { format } from 'date-fns';

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

const WishlistItem = styled.div`
    display: flex;
    align-items: center;
    margin: 1rem 0;
`;

const ImgWrapper = styled.div`
    width: 73px;
    height: 73px;
    border: 1px solid #d5d5d5;
    border-radius: 10px;
    margin-right: 1rem;
`;

const headerStyle = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ddd;
`;

const bodyStyle = css`
    padding-top: 1rem;
`;

const textStyle = css`
    padding-bottom: 0.5rem;
`;

const link = css`
    color: black;
    font-size: 0.875rem;
    font-weight: bold;
    &:hover {
        color: #E60711;
    }
`;

const imgStyle = css`
    inset: 0px;
    box-sizing: border-box;
    padding: 0px;
    border: none;
    margin: auto;
    display: block;
    width: 0px;
    height: 0px;
    min-width: 100%;
    max-width: 100%;
    min-height: 100%;
    max-height: 100%;
`;

const button = css`
    color:  white;
    padding: 10px 20px;
    background-color: #e60012;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    border-radius: 999px;
    text-transform: uppercase;
    font-size: 0.8125rem;
    letter-spacing: 0.5px;
    font-weight: bold;
    line-height: 19px;
    &:hover {
        background: #f80001;
        box-shadow: 0 5px 5px 0 rgba(248, 0, 1, .25);
        transition: box-shadow .2s ease-in-out;
    }
`;

const ItemContainer = styled.div`
    display: flex;
    flex: 1;
    justify-content: space-between;
`;

const TimestampText = styled.div`
    font-size: 0.7rem;
    color: #666;
`;

const ProfilePage = () => {
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
        };
        fetchUser();
    }, [userId]);

    console.log(wishlist);

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
                            {wishlist?.length > 0 ? <NavLink to="/wishlist" css={link}>VIEW ALL</NavLink> : null}
                        </div>
                        {wishlist?.length > 0 ? (
                            wishlist.slice(0, 3).map((item) => (
                                <WishlistItem>
                                    <ImgWrapper>
                                        <img src={item.image} css={imgStyle} alt={item.name} />
                                    </ImgWrapper>
                                    <ItemContainer>
                                        <div>{item.name}</div>
                                        <TimestampText>Added: {format(item.addedAt.toDate(), 'PP')}</TimestampText>
                                    </ItemContainer>
                                </WishlistItem>
                            ))
                        ) : (
                            <div css={bodyStyle}>
                                <p css={textStyle}>You currently have no wishlists.</p>
                                <NavLink to="/amiibos" css={button}>ADD WISHLIST</NavLink>
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
                            <NavLink to="/wishlist" css={button}>ADD AMIIBOS</NavLink>
                        </div>
                    </div>
                </ProfileCards>
            </BottomContainer>
        </PageContainer>
    );
}

export default ProfilePage;
