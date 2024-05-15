/** @jsxImportSource @emotion/react */
import { FaHeart } from 'react-icons/fa';
import { CardContainer, ImageContainer, CardImage, CardTitle, CardFooter, Button, HeartIcon } from './AmiiboListStyles';
import { useEffect, useState } from 'react';
import { User } from '../../types/User';
import { useAppSelector } from '../../redux/hooks';
import { getUser } from '../../features/user/userAPI';
import { Amiibo } from '../../types/Amiibo';
import { addToWishlist } from '../../features/user/updateWishlist';

const Card = ({ amiibo, onClick }) => {

    const userId = useAppSelector((state) => state.user.userId);
    const [user, setUser] = useState<User | null>();
    const [defaultWish, setDefaultWishlist] = useState<Amiibo[]>([]);

    useEffect(() => {
        const fetchUser = async () => {
            if(userId) {
                const userRef = await getUser(userId);
                if(userRef) {
                    setUser(userRef || null);
                }
            }
        }
        fetchUser();
        if (user) {
            setDefaultWishlist(user.wishlist);
        }
    }, [userId]);

    const handleAddWishlist = () => {
        const dupe = defaultWish.find((figure) => figure.image === amiibo.image);
        if (dupe) {
            alert(`The amiibo: ${JSON.stringify(amiibo.name)} (${amiibo.amiiboSeries}) is already in your wishlist!`);
        }
        else {
            // HERE - the state seems to be getting overwritten.
            const newList = [...defaultWish, amiibo];
            setDefaultWishlist(newList);
            addToWishlist(userId, newList, amiibo);
        }      
    };

    return (
        <CardContainer>
            <ImageContainer>
                <CardImage src={amiibo.image} alt={`${amiibo.name} image`} />
            </ImageContainer>
            <CardTitle>{amiibo.name} ({amiibo.amiiboSeries})</CardTitle>
            <CardFooter>
                <button css={Button} onClick={onClick}>View More</button>
                <FaHeart css={HeartIcon} onClick={handleAddWishlist}/>
            </CardFooter>
        </CardContainer>
    );
};

export default Card;
