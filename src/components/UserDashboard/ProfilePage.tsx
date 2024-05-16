// Dependencies
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import { FaUserEdit } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

// Components
import { getUser, getWishlist } from '../../features/user/userAPI';
import { Amiibo } from '../../types/Amiibo';
import { User } from '../../types/User';
import AmiiboItem from './AmiiboItem';

const ContainPage = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2rem;
`;

const MainContent = styled.div`
    justify-content: center;
    align-items: center;
`;

const ImageBox = styled.div`
    background-color: white;
    border: 5px black solid;
    border-radius: 50%;
    height: 75px;
    width: 75px;
    display: inline-block;
    top: 0;
`;

const OnlineStatus = styled.label<{ online: boolean }>`
    background: ${({ online }) => (online ? "#00FF40" :  "grey" )};
    width: 10px;
    height: 10px;
    border: 2px solid black;
    border-radius: 20px;
    margin: 25px 10px;
`;

const ProfileContent = styled.div`
    display: inline-flex;
`;

function ProfilePage() {
    // Get the user ID from the URL
    const { userId } = useParams();
    const [user, setUser] = useState<User | null>(null);
    const [wishlist, setWishlist] = useState<Amiibo[]>([]);

    useEffect(() => {
        const fetchUser = async () => {
            if (userId) {
                const fetchedUser = await getUser(userId);
                setUser(fetchedUser || null);
                const fetchedWishlist = await getWishlist(userId);
                setWishlist(fetchedWishlist);
            }
        };
        fetchUser();
    }, [userId]);

    return (
        <ContainPage>
            <MainContent>
                <ImageBox />
                <ProfileContent>
                    <div className="photo-box"></div>
                    <h3>{user?.displayName}</h3>
                    <OnlineStatus online={user != null} />
                </ProfileContent>
                <button>
                    Edit Profile! <FaUserEdit />
                </button>
                <NavLink to={`/users/${userId}/wishlist`}>Wishlist ! <FaHeart /></NavLink>
                <div className="personal-collection">
                    {wishlist.map((amiibo) => (
                        <AmiiboItem
                            amiibo={amiibo}
                            key={`${amiibo.gameSeries} - ${amiibo.name}`}
                            setWishlist={setWishlist}
                        />
                    ))}
                </div>
            </MainContent>
        </ContainPage>
    );
}

export default ProfilePage;
