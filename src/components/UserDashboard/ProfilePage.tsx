// Dependencies
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FiShare } from 'react-icons/fi';

// Components
import { getUser, getWishlist } from '../../features/user/userAPI';
import { Amiibo } from '../../types/Amiibo';
import { User } from '../../types/User';
import AmiiboItem from './AmiiboItem';

// Styles
import {
    PageContainer,
    MainContent,
    OnlineStatus,
    ImageBox,
    ProfileContainer,
    ShareButton,
    ProfileName,
    ProfileContent,
    ProfileCount,
    BottomContainer,
    RightSection,
    LeftSection, 
    Collection,
} from './ProfilePageStyles';



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
        <PageContainer>
            <MainContent>
                <ProfileContainer>
                    <ProfileContent>
                        <ImageBox src={user?.profile_picture} />
                        <ProfileName>{user?.displayName}</ProfileName>
                        <OnlineStatus online={user != null} />
                    </ProfileContent>
                    <ProfileCount>CURRENT WISH COUNT: {wishlist?.length}</ProfileCount>
                    <ShareButton> <FiShare /> Share Wishlist!</ShareButton>
                </ProfileContainer>

                <BottomContainer>
                    <LeftSection>
                    <Collection>
                        {wishlist.map((amiibo) => (
                            <AmiiboItem
                                amiibo={amiibo}
                                key={`${amiibo.gameSeries} - ${amiibo.name}`}
                                setWishlist={setWishlist}
                            />
                        ))}
                    </Collection>
                    </LeftSection>
                    <RightSection />  
                </BottomContainer>
            </MainContent>
        </PageContainer>
    );
}

export default ProfilePage;
