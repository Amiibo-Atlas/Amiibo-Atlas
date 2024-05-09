import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
import myImage from '../assets/react.svg';

import { useAppSelector } from '../redux/hooks';
import grabUserNameCapitalized from '../functions/grabUserName';

const NavbarContainer = styled.header`
    max-width: 100%;
    width: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1.5rem;
    @media (min-width: 1024px) {
        max-width: 1280px;
    }
`;

const NavbarLinkContainer = styled.div`
    display: none;
    gap: 3rem;
    @media (min-width: 1024px) {
        display: flex;
    }
`;

const NavbarLogo = styled.a`
    flex: 1;
    padding: 1.5rem;
    margin: -0.375rem;
    img {
        height: 2rem;
        width: auto;
    }
`;

const NavbarLink = styled(NavLink)`
    font-size: 0.875rem;
    font-weight: 600;
    line-height: 1.5;
    color: #1f2937;
    text-decoration: none;
    &:hover,
    &:focus,
    &.active {
        color: #4b5563;
    }
`;

const NavbarUserSection = styled.div`
    display: none;
    flex: 1;
    justify-content: end;
    @media (min-width: 1024px) {
        display: flex;
    }
`;

function Navbar() {
    // Grab user from user global state.
    const user = useAppSelector((state) => state.setUser);
    const userNameCapitalized = grabUserNameCapitalized(user);

    return (
        <NavbarContainer>
            <NavbarLogo href="#">
                <img src={myImage} alt="Amiibo Atlas" />
            </NavbarLogo>
            <NavbarLinkContainer>
                <NavbarLink to="/">Amiibo Atlas</NavbarLink>
                <NavbarLink to="/amiibos">Amiibos Page</NavbarLink>
                <NavbarLink to="/wishlist">WishList</NavbarLink>
                <NavbarLink to="/profile">Profile Page</NavbarLink>
            </NavbarLinkContainer>
            <NavbarUserSection>
                {user.loginStatus ? (
                    <h2>Hello, {userNameCapitalized}</h2>
                ) : (
                    <NavbarLink to="/login">Log in →</NavbarLink>
                )}
            </NavbarUserSection>
        </NavbarContainer>
    );
}

export default Navbar;
