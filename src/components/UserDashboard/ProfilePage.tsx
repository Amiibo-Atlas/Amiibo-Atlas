// Dependencies
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import { FaUserEdit } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import { RxCross2 } from "react-icons/rx";
import { NavLink } from 'react-router-dom';

// Components
import { getUser } from '../../features/user/userAPI';
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

const placeholder =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu laoreet mi. Morbi cursus tortor vitae diam congue, at dignissim orci sollicitudin. Aenean euismod pharetra turpis posuere efficitur. Aliquam erat volutpat. Nulla fringilla augue quis enim iaculis, non rutrum ipsum sodales. Nunc tempus turpis et est fermentum, in convallis enim tincidunt. Maecenas finibus laoreet diam vitae sollicitudin. Duis eget nibh urna. Duis a risus massa. Maecenas non orci vitae enim faucibus aliquet. Integer tristique sem ac diam rutrum, ut sodales diam fringilla. Nullam in leo turpis. Donec placerat vestibulum leo, sed condimentum mauris porttitor sed. Duis tincidunt massa at tortor rutrum imperdiet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum sit amet nulla in libero vestibulum iaculis suscipit id magna.';

function ProfilePage() {
    // Get the user ID from the URL
    const { userId } = useParams();
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const fetchUser = async () => {
            if (userId) {
                const fetchedUser = await getUser(userId);
                setUser(fetchedUser || null);
            }
        };
        fetchUser();
    }, [userId]);

    const removePersonalItem = ( amiibo: Amiibo ) => {
        console.log('handle removing from owned collection...');
    }

    // placeholder
    const personalCollection: Amiibo[] = [
        {
            character: 'Link',
            amiiboSeries: 'Super Smash Bros.',
            gameSeries: 'The Legend of Zelda',
            name: 'Link',
            image: 'https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_01000000-00040002.png',
            tail: '00040002',
            release: undefined,
            id: undefined,
            head: '',
        },
        {
            character: 'Link',
            amiiboSeries: 'Legend of Zelda',
            gameSeries: 'The Legend of Zelda',
            name: 'Link - Archer',
            image: 'https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_01000000-03530902.png',
            tail: '03530902',
            release: undefined,
            id: undefined,
            head: '',
        },
        {
            character: 'Legend of Zelda',
            amiiboSeries: 'Link',
            gameSeries: 'The Legend of Zelda',
            name: '8-Bit Link',
            image: 'https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_01000000-034f0902.png',
            tail: '034f0902',
            release: undefined,
            id: undefined,
            head: '',
        },
        {
            character: 'Link',
            amiiboSeries: 'Legend of Zelda',
            gameSeries: 'The Legend of Zelda',
            name: 'Link - Rider',
            image: 'https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_01000000-03540902.png',
            tail: '03540902',
            release: undefined,
            id: undefined,
            head: '',
        },
        {
            character: 'Link',
            amiiboSeries: 'Legend of Zelda',
            gameSeries: 'The Legend of Zelda',
            name: 'Toon Link - The Wind Waker',
            image: 'https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_01000100-03500902.png',
            tail: '03500902',
            release: undefined,
            id: undefined,
            head: '',
        },
    ];

    const path = `/users/${userId}/wishlist`;

    return (
        <ContainPage>
            <MainContent>
                <ImageBox />
                <ProfileContent>
                    <div className="photo-box"></div>
                    <h3>{user?.displayName}</h3>
                    <OnlineStatus online={user != null} />    
                </ProfileContent>
                <p className="bio">{placeholder}</p>
                <button>
                    Edit Profile! <FaUserEdit />
                </button>
                <NavLink to={path}>Wishlist ! <FaHeart /></NavLink>
                <div className="personal-collection">
                    {personalCollection.map((amiibo) => (
                        <AmiiboItem
                            amiibo={amiibo}
                            key={`${amiibo.gameSeries} - ${amiibo.name}`}
                            Icon={RxCross2}
                            onRemove={removePersonalItem}
                        />
                    ))}
                </div>
            </MainContent>
        </ContainPage>
    );
}

export default ProfilePage;
