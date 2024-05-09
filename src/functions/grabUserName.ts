import { useAppSelector } from '../redux/hooks';

export default function grabUserNameCapitalized() {
    // Grab user from user global state.
    const user = useAppSelector((state) => state.setUser);
    const userCapitalized = user?.username
        ? user.username.charAt(0).toUpperCase() + user.username.slice(1)
        : 'Temporary user name...fix this before release!';
    return userCapitalized;
}
