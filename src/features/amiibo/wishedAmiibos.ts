import { useState, useEffect } from 'react';
import { Amiibo } from '../../types/Amiibo';
import { getWishlist } from '../user/userAPI';

export function filterWishedAmiibos(amiibo, userId) {
    const [status, setStatus] = useState(false);

    const handleWishedStatus = async (userId) => {

        const wishlist = await getWishlist(userId)
        setStatus(wishlist.map(item => item.image).includes(amiibo.image));
        
    }
    handleWishedStatus(userId);
    return [amiibo, status];
};
