/** @jsxImportSource @emotion/react */
// Dependencies
import { NavLink, useNavigate } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { useAppSelector } from '../../redux/hooks';
import { getUser } from '../../features/user/userAPI';
import { signOut } from '../../features/auth/Auth';
import { User } from '../../types/User';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

// Styles
import myImage from '../../assets/amiibo.png';

const NavContainer = styled.header`
    width: 100%;
    margin: 0 2em 0 auto;
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

const userImage = css`
    width: 40px;
    height: 40px;
    border-radius: 50%;
`;

const userBox = css`
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;
`;

const modalContent = css`
    background: #fff;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    position: absolute;
    top: 150%;
    right: 0;
    min-width: 200px;
    display: flex;
    flex-direction: column;
    z-index: 1000;
`;

const modalLink = css`
    margin: 5px 0;
    color: #1f2937;
    text-decoration: none;
    cursor: pointer;
    &:hover {
        color: #4b5563;
    }
`;

function Navbar() {
    const userId = useAppSelector((state) => state.user.userId);
    const [user, setUser] = useState<User | null>();
    const [modalOpen, setModalOpen] = useState(false);
    const modalRef = useRef(null);
    const navigate = useNavigate();

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };

    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            setModalOpen(false);
        }
    };

    const handleSignOut = () => {
        signOut();
        setModalOpen(false);
        navigate('/');
    }

    const navigateTo = (path) => {
        navigate(path);
        setModalOpen(false);
    };

    useEffect(() => {
        const fetchUser = async () => {
            if(userId) {
                const userRef = await getUser(userId);
                if(userRef) {
                    setUser(userRef);
                }
            }
        }
        fetchUser();
    }, [userId]);

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <NavContainer>
            <Logo href="/">
                <img src={myImage} alt="amiibo" />
            </Logo>
            <LinkContainer>
                <Link to="/home">Amiibo Atlas</Link>
                <Link to="/amiibos">Amiibos</Link>
            </LinkContainer>
            <NavbarUserSection>
                {userId ? (
                    <div css={userBox} onClick={toggleModal} ref={modalRef}>
                        <img css={userImage} src={user?.profile_picture || "/default-user-icon.webp"} />
                        {modalOpen && (
                            <div css={modalContent}>
                                <div css={modalLink} onClick={() => navigateTo(`/users/${userId}`)}>Account</div>
                                <div css={modalLink} onClick={() => navigateTo('/')}>Settings</div>
                                <div css={modalLink} onClick={handleSignOut}>Sign Out</div>
                            </div>
                        )}
                    </div>
                ) : (
                    <Link to="/login">Sign In</Link>
                )}
            </NavbarUserSection>
        </NavContainer>
    );
}

export default Navbar;