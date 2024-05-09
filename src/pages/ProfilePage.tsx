import styled from '@emotion/styled';
import AmiiboItem from '../components/PersonalItem';

import { Amiibo } from '../interfaces/amiiboInterface';
import { FaUserEdit } from 'react-icons/fa';
import { ImCheckmark } from 'react-icons/im';
import { FaHeart } from 'react-icons/fa';

import grabUserNameCapitalized from '../functions/grabUserName';
import { useAppSelector } from '../redux/hooks';

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

const placeholder =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu laoreet mi. Morbi cursus tortor vitae diam congue, at dignissim orci sollicitudin. Aenean euismod pharetra turpis posuere efficitur. Aliquam erat volutpat. Nulla fringilla augue quis enim iaculis, non rutrum ipsum sodales. Nunc tempus turpis et est fermentum, in convallis enim tincidunt. Maecenas finibus laoreet diam vitae sollicitudin. Duis eget nibh urna. Duis a risus massa. Maecenas non orci vitae enim faucibus aliquet. Integer tristique sem ac diam rutrum, ut sodales diam fringilla. Nullam in leo turpis. Donec placerat vestibulum leo, sed condimentum mauris porttitor sed. Duis tincidunt massa at tortor rutrum imperdiet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum sit amet nulla in libero vestibulum iaculis suscipit id magna.';

function ProfilePage() {
    // // Grab user from user global state.
    // const user = useAppSelector((state) => state.setUser);
    // const userCapitalized = user?.username
    //     ? user.username.charAt(0).toUpperCase() + user.username.slice(1)
    //     : '';

    // Grab user from user global state.
    const user = useAppSelector((state) => state.setUser);
    const userNameCapitalized = grabUserNameCapitalized(user);

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
                        <ImageBox />
                        <div className="photo-box"></div>
                        <h3>{userNameCapitalized}'s Profile Page</h3>
                        <p className="bio">{placeholder}</p>
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
