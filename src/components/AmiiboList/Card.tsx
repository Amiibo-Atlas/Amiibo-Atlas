/** @jsxImportSource @emotion/react */
import { FaHeart } from 'react-icons/fa';
import { CardContainer, ImageContainer, CardImage, CardTitle, CardFooter, Button, HeartIcon } from './AmiiboListStyles';

const Card = ({ amiibo }) => {
    const handleViewMore = () => {
        
    };

    const handleAddWishlist = () => {
        
    };

    return (
        <CardContainer>
            <ImageContainer>
                <CardImage src={amiibo.image} alt={`${amiibo.name} image`} />
            </ImageContainer>
            <CardTitle>{amiibo.name} ({amiibo.amiiboSeries})</CardTitle>
            <CardFooter>
                <button css={Button} onClick={handleViewMore}>View More</button>
                <FaHeart css={HeartIcon} onClick={handleAddWishlist} />
            </CardFooter>
        </CardContainer>
    );
};

export default Card;