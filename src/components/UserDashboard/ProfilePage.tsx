// Dependencies
/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FiShare } from 'react-icons/fi';
import { RxCross2 as Icon, RxCross2 } from 'react-icons/rx';

// Components
import { getUser, getWishlist } from '../../features/user/userAPI';
import { Amiibo } from '../../types/Amiibo';
import { User } from '../../types/User';
import AmiiboItem from './AmiiboItem';
import WishlistShare from './WishlistShare';

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
    ModalContainer,
    modalContent,
    informationBox,
    ModalButton,
    topper,
} from './ProfilePageStyles';


function ProfilePage() {
    // Get the user ID from the URL
    const { userId } = useParams();
    const [user, setUser] = useState<User | null>(null);
    const [wishlist, setWishlist] = useState<Amiibo[]>([]);
    const [modalOpen, setModalOpen] = useState(false);


    const toggleModal = () => {
        console.log(modalOpen);
        setModalOpen(!modalOpen);
    };

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
                    <ShareButton onClick={toggleModal}> <FiShare /> Share Wishlist!</ShareButton>
                    { modalOpen && (
                        <ModalContainer>
                            <div css={modalContent}>
                            <ModalButton onClick={toggleModal}><Icon/></ModalButton>
                                <div css={topper}>Share Wish List</div>
                                <div css={informationBox}>
                                    <WishlistShare></WishlistShare>
                                </div>
                            </div>
                        </ModalContainer>
                    )}
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
