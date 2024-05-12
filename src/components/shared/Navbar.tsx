// Dependencies
import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

// Components
import { useAppSelector } from '../../redux/hooks';
import grabUserNameCapitalized from '../../functions/grabUserName';

// Styles
import myImage from '../../assets/amiibo.png';
import { FaUser } from 'react-icons/fa';

const NavContainer = styled.header`
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.25rem 1.5rem;
    @media (min-width: 1024px) {
        max-width: 1280px;
    }
`;

const LinkContainer = styled.div`
    display: none;
    gap: 3rem;
    @media (min-width: 1024px) {
        display: flex;
    }
`;

const Logo = styled.a`
    flex: 1;
    padding: 1rem;
    img {
        height: 2rem;
        width: auto;
    }
`;

const Link = styled(NavLink)`
    font-size: 1rem;
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
        <NavContainer>
            <Logo href="/">
                <img src={myImage} alt="amiibo" />
            </Logo>
            <LinkContainer>
                <Link to="/home">Amiibo Atlas</Link>
                <Link to="/amiibos">Amiibos</Link>
                <Link to="/wishlist">WishList</Link>
                <Link to="/profile">Profile Page</Link>
            </LinkContainer>
            <NavbarUserSection>
                {user.loginStatus ? (
                    <h2>Hello, {userNameCapitalized}</h2>
                ) : (
                    <Link to="/login">
                        <FaUser />
                    </Link>
                )}
            </NavbarUserSection>
        </NavContainer>
    );
}

export default Navbar;
