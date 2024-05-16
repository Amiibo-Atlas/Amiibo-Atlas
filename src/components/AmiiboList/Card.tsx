/** @jsxImportSource @emotion/react */
import { CardContainer, ImageContainer, CardImage, CardTitle, CardFooter, Button } from './AmiiboListStyles';

const Card = ({ amiibo, onClickDetail, onClickWishlist }) => {
    return (
        <CardContainer>
            <ImageContainer>
                <CardImage src={amiibo.image} alt={`${amiibo.name} image`} />
            </ImageContainer>
            <CardTitle>{amiibo.name} ({amiibo.amiiboSeries})</CardTitle>
            <CardFooter>
                <button css={Button} onClick={onClickDetail}>View More</button>
                <button css={Button} onClick={onClickWishlist}>Wishlist</button>
            </CardFooter>
        </CardContainer>
    );
};

export default Card;
