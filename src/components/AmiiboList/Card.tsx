/** @jsxImportSource @emotion/react */
import { CardContainer, ImageContainer, CardImage, CardTitle, CardFooter, Button, HeartIcon } from './AmiiboListStyles';
import { useAppSelector } from '../../redux/hooks';
import { addToWishlist } from '../../features/user/userAPI';

const Card = ({ amiibo, onClick }) => {
    const userId = useAppSelector((state) => state.user.userId);

    const handleAddWishlist = async () => {
        if (!userId) {
            alert("Please sign in to add to wishlist");
            return;
        }
        await addToWishlist(userId, amiibo);
        alert("Added to wishlist");
    };

    return (
        <CardContainer>
            <ImageContainer>
                <CardImage src={amiibo.image} alt={`${amiibo.name} image`} />
            </ImageContainer>
            <CardTitle>{amiibo.name} ({amiibo.amiiboSeries})</CardTitle>
            <CardFooter>
                <button css={Button} onClick={onClick}>View More</button>
                <button css={HeartIcon} onClick={handleAddWishlist}>Wishlist</button>
            </CardFooter>
        </CardContainer>
    );
};

export default Card;
