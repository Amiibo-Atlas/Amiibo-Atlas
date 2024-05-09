/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { FaHeart } from 'react-icons/fa';
// import { addAmiiboWishlist } from '../redux/userSlice';
// import { useHistory } from 'react-router-dom';
// import { useDispatch } from 'react-redux';


const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border-radius: 8px;
    border: 1px solid #ccc;
`;

const ImageContainer = styled.div`
    width: 100%;
    position: relative;
    overflow: hidden;
    height: 0;
    padding-bottom: 100%;
    border: 1px solid #ccc;
`;

const CardImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: contain;
    object-position: center;
`;

const CardContent = styled.div`
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
`;

const CardTitle = styled.h3`
    font-size: 1.1rem;
    font-weight: bold;
`;

const CardText = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
`;

const Button = css`
    padding: 10px;
    background-color: white;
    text-align: center;
    text-decoration: none;
    font-size: 12px;
    cursor: pointer;
    border-radius: 999px;
`;

const HeartIcon = css`
    cursor: pointer;
    font-size: 24px;
    transition: color 0.3s ease;
    &:hover {
        color: #ff0000;
    }
`;

interface CardProps {
    amiibo: {
        image: string;
        name: string;
        gameSeries: string;
        amiiboSeries: string;
        type: string;
        release: {
            na: string;
        };
    };
}

const Card: React.FC<CardProps> = ({ amiibo }) => {
    // const history = useHistory();
    // const dispatch = useDispatch();

    const handleViewMore = () => {
        // history.push(`/amiibo/${amiibo.name}`);
    };

    const handleAddToWishlist = () => {
        // dispatch(addAmiiboWishlist(amiibo));
    };

    return (
        <CardContainer>
            <ImageContainer>
                <CardImage src={amiibo.image} alt={`${amiibo.name} image`} />
            </ImageContainer>
            <CardContent>
                <CardTitle>{amiibo.name}</CardTitle>
                <CardText>
                    <p>{amiibo.amiiboSeries}</p>
                    <p>Type: {amiibo.type}</p>
                    <p>{amiibo.release.na}</p>
                </CardText>
                <ButtonContainer>
                    <button css={Button} onClick={handleViewMore}>View More</button>
                    <FaHeart css={HeartIcon} onClick={handleAddToWishlist} />
                </ButtonContainer>
            </CardContent>
        </CardContainer>
    );
};

export default Card;