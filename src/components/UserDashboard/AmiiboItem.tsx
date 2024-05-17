/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { RxCross2 as Icon } from 'react-icons/rx';
import { format } from 'date-fns';
import { useState } from 'react';
import { toast } from 'react-toastify';

// Components
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';
import { setSelectedAmiibo } from '../../features/amiibo/amiiboSlice';
import { removeFromWishlist } from '../../features/user/userAPI';
import DetermineModal from '../DetermineModal';

const ItemBox = styled.div`
    display: flex;
    overflow: hidden;
    border: 1px solid #ddd;
    border-radius: 20px;
    position: relative;
    gap: 10px;
    transition: all 0.3s ease;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
    }
    margin: 15px;
    padding: 1rem;
    height: 55px;
    width: 600px;
    font-size: 15px;
    background-color: white;
`;

const AmiiboImg = styled.img`
    width: auto;
    height: auto;
`;

const ButtonBox = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: stretch;
    padding: 0.3rem 1rem 0.5rem;
    min-height: 70px;
`;

const Button = css`
    padding: 10px;
    background-color: white;
    text-align: center;
    text-decoration: none;
    font-size: 12px;
    cursor: pointer;
    border-radius: 999px;
    text-transform: uppercase;
    font-size: 0.8125rem;
    font-weight: 700;
    letter-spacing: 0.5px;
    line-height: 19px;
    &:hover {
        border-color: #646cff;
    }
    margin-bottom: auto;
`;

const IconDesign = css`
    cursor: pointer;
    font-size: 24px;
    transition: color 0.3s ease;
    &:hover {
        color: #ff0000;
    }
    margin-bottom: auto;
    padding: 10px;
`;

const BoxTitle = styled.h3`
    padding: 1rem 2rem;
    font-size: 1.2rem;
    font-weight: bold;
    min-height: 80px;
    margin: auto;
`;

const TimestampText = styled.div`
    font-size: 0.75rem;
    color: #666;
    font-style: italic;
`;

const AmiiboItem = ({ amiibo, setWishlist }) => {
    const userId = useAppSelector((state) => state.user.userId);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const addedAtFormatted = format(amiibo.addedAt.toDate(), 'PPpp');
    const [determineModalStatus, setDetermineModalStatus] = useState(false);

    const handleDetails = () => {
        dispatch(setSelectedAmiibo(amiibo));
        navigate(`/amiibos/${amiibo.tail}-${amiibo.head}`);
    };

    // const handleRemove = async () => {
    //     if (window.confirm(' you want to remove this item from your wishlist?')) {
    //         await removeFromWishlist(userId, amiibo.wishlistId);
    //         setWishlist((prev) => prev.filter((item) => item.wishlistId !== amiibo.wishlistId));
    //     }
    // };

    const handleRemove = () => {
        setDetermineModalStatus(true);
    };

    const confirmRemove = async () => {
        try {
            await removeFromWishlist(userId, amiibo.wishlistId);
            setWishlist((prev) => prev.filter((item) => item.wishlistId !== amiibo.wishlistId));
            toast.success('Removed from wishlist');
        } catch (error) {
            console.error('Failed to remove from wishlist', error);
            toast.error('Failed to remove from wishlist');
        } finally {
            setDetermineModalStatus(false);
        }
    };

    const cancelRemove = () => {
        setDetermineModalStatus(false);
    };

    return (
        <>
            <ItemBox>
                <AmiiboImg src={amiibo.image}></AmiiboImg>
                <BoxTitle>
                    {amiibo.name} ({amiibo.amiiboSeries})
                    <TimestampText>Added: {addedAtFormatted}</TimestampText>
                </BoxTitle>
                <ButtonBox>
                    <button css={Button} onClick={handleDetails}>
                        Details
                    </button>
                    <Icon css={IconDesign} onClick={handleRemove} />
                </ButtonBox>
            </ItemBox>
            {determineModalStatus && (
                <DetermineModal
                    message="Are you sure you want to remove this item from your wishlist?"
                    onConfirm={confirmRemove}
                    onCancel={cancelRemove}
                />
            )}
        </>
    );
};
export default AmiiboItem;
