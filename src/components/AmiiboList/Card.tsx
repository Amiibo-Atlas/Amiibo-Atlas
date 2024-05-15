/** @jsxImportSource @emotion/react */
import { FaHeart } from 'react-icons/fa';
import { CardContainer, ImageContainer, CardImage, CardTitle, CardFooter, Button, HeartIcon } from './AmiiboListStyles';

const Card = ({ amiibo, onClick }) => {
    return (
        <CardContainer>
            <ImageContainer>
                <CardImage src={amiibo.image} alt={`${amiibo.name} image`} />
            </ImageContainer>
            <CardTitle>{amiibo.name} ({amiibo.amiiboSeries})</CardTitle>
            <CardFooter>
                <button css={Button} onClick={onClick}>View More</button>
                <FaHeart css={HeartIcon} />
            </CardFooter>
        </CardContainer>
    );
};

export default Card;