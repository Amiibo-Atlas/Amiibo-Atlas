export default function grabUserNameCapitalized(user) {
    // Ensure you pass the user SLICE into the param.
    // Returns capitalized[0] username, woohoo.
    const userCapitalized = user?.username
        ? user.username.charAt(0).toUpperCase() + user.username.slice(1)
        : 'Temporary user name...fix this before release!';
    return userCapitalized;
}
