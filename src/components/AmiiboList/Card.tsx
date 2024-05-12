/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { FaHeart } from 'react-icons/fa';

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border-radius: 20px;
    border: 1px solid #ddd;
    background-color: white;
    transition: all 0.3s ease;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);

    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
    }
`;

const ImageContainer = styled.div`
    width: 100%;
    position: relative;
    overflow: hidden;
    height: 380px;
    border: 1px solid #ddd;
`;

const CardImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    padding: 1rem;
    object-position: center;
    box-sizing: border-box;
`;

const CardTitle = styled.h3`
    padding: 1rem 2rem;
    font-size: 1.2rem;
    font-weight: bold;
    min-height: 80px;
    margin: 0.25rem 0 1rem 0;
`;

const CardFooter = styled.div`
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #ddd;
    align-items: center;
    padding: .3rem 1rem .5rem;
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
    font-size: .8125rem;
    font-weight: 700;
    letter-spacing: .5px;
    line-height: 19px;
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
            <CardTitle>{amiibo.name} ({amiibo.amiiboSeries})</CardTitle>
            <CardFooter>
                <button css={Button} onClick={handleViewMore}>View More</button>
                <FaHeart css={HeartIcon} onClick={handleAddToWishlist} />
            </CardFooter>
        </CardContainer>
    );
};

export default Card;