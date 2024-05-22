/** @jsxImportSource @emotion/react */
// Dependencies
import { NavLink, useNavigate } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

// Components
import { useAppSelector } from '../../redux/hooks';
import { getUser } from '../../features/user/userAPI';
import { signOut } from '../../features/auth/Auth';
import { User } from '../../types/User';

// Styles
import myImage from '../../assets/amiibo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

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

const modalRow = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    cursor: pointer;
    &:hover {
        background-color: #f2f2f2;
    }
    border-radius: 5px;
    color: #1f2937;
`;

const modalLink = css`
    display: flex;
    align-items: center;
    justify-content: start;
    margin: 5px 0;
    text-decoration: none;
    cursor: pointer;
`;

const modalIcon = css`
    min-width: 20px;
`;

const modalSpan = css`
    padding-left: 12px;
`;

function Navbar() {
    const userId = useAppSelector((state) => state.user.userId);
    const [user, setUser] = useState<User | null>();
    const [modalOpen, setModalOpen] = useState(false);
    const modalRef = useRef<HTMLDivElement | null>(null);
    const navigate = useNavigate();

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };

    // If the modal is open and the click event's target is not within the modal, close the modal
    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            setModalOpen(false);
        }
    };

    const navigateTo = (path) => {
        navigate(path);
        setModalOpen(false);
    };

    const handleSignOut = () => {
        signOut();
        setModalOpen(false);
        navigate('/');
    };

    useEffect(() => {
        const fetchUser = async () => {
            if (userId) {
                const userRef = await getUser(userId);
                if (userRef) {
                    setUser(userRef);
                }
            }
        };
        fetchUser();
    }, [userId]);

    // Add event listener to listen for clicks outside of the modal when the component mounts
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <NavContainer>
            <Logo href="/">
                <img src={myImage} alt="amiibo" />
            </Logo>
            <LinkContainer>
                <Link to="/">Amiibo Atlas</Link>
                <Link to="/amiibos">Amiibos</Link>
                <Link to="/aboutamiibo">What are Amiibo?</Link>
            </LinkContainer>
            <NavbarUserSection>
                {userId ? (
                    <div css={userBox} onClick={toggleModal} ref={modalRef}>
                        <img
                            css={userImage}
                            src={user?.profile_picture || '/default-user-icon.webp'}
                        />
                        {modalOpen && (
                            <div css={modalContent}>
                                <div css={modalRow} onClick={() => navigateTo(`/users/${userId}`)}>
                                    <div css={modalLink}>
                                        <FontAwesomeIcon icon={faUser} css={modalIcon} />
                                        <span css={modalSpan}>Account</span>
                                    </div>
                                    <FontAwesomeIcon icon={faAngleRight} />
                                </div>
                                <div css={modalRow} onClick={handleSignOut}>
                                    <div css={modalLink}>
                                        <FontAwesomeIcon
                                            icon={faRightFromBracket}
                                            css={modalIcon}
                                        />
                                        <span css={modalSpan}>Sign Out</span>
                                    </div>
                                    <FontAwesomeIcon icon={faAngleRight} />
                                </div>
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
