export function filterWishedAmiibos(amiibo, wishlist) {
    return [amiibo, wishlist.map(item => item.image).includes(amiibo.image)];
    };
    