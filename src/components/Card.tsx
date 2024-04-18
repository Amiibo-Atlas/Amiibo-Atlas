import React from 'react';
import styled from '@emotion/styled';

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
    padding: 1rem;
    display: flex;
    flex-direction: column;
`;

const CardTitle = styled.h3`
    font-size: 1rem;
    font-weight: bold;
    color: #1f2937;
`;

const CardText = styled.p`
    font-size: 0.875rem;
    color: #6b7280;
`;

const Badge = styled.div`
    background-color: #ef4444;
    color: white;
    padding: 0.25rem 0.5rem;
    border-radius: 10px;
    font-size: 0.75rem;
    text-align: center;
    width: fit-content;
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
    return (
        <CardContainer>
            <ImageContainer>
                <CardImage src={amiibo.image} alt={`${amiibo.name} image`} />
            </ImageContainer>
            <CardContent>
                <CardTitle>{amiibo.name}</CardTitle>
                <CardText>Amiibo Series: {amiibo.amiiboSeries}</CardText>
                <CardText>Game Series: {amiibo.gameSeries}</CardText>
                <CardText>Type: {amiibo.type}</CardText>
                <Badge>Release: {amiibo.release.na}</Badge>
            </CardContent>
        </CardContainer>
    );
};

export default Card;