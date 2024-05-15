import { Amiibo } from './Amiibo';

export interface User {
    profile_picture: string;
    email: string;
    displayName: string;
    wishlist: Amiibo[];
}

export interface UserRef {
    uid: string;
    user: User;
}