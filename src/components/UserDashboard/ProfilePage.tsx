import styled from '@emotion/styled';
import AmiiboItem from './PersonalItem';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getUser } from '../../features/user/userAPI';
import { Amiibo } from '../../types/Amiibo';
import { FaUserEdit } from 'react-icons/fa';
import { ImCheckmark } from 'react-icons/im';
import { FaHeart } from 'react-icons/fa';
import { User } from '../../types/User';

const ContainPage = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2rem;
`;

const MainContent = styled.div`
    justify-content: center;
    align-items: center;
`;

function ProfilePage() {
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
        },
    ];

    return (
        <div>
            <ContainPage>
                <MainContent>
                    <div className="profile-info">
                        <p className="bio">{user?.displayName}</p>
                        <button>
                            Edit Profile! <FaUserEdit />
                        </button>
                    </div>
                    <button>
                        Wishlist! <FaHeart />
                    </button>
                    <div className="personal-collection">
                        {personalCollection.map((amiibo) => (
                            <AmiiboItem
                                amiibo={amiibo}
                                key={`${amiibo.gameSeries} - ${amiibo.name}`}
                                Icon={ImCheckmark}
                            />
                        ))}
                    </div>
                </MainContent>
            </ContainPage>
        </div>
    );
}

export default ProfilePage;
