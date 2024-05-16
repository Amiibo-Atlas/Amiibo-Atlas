// // Dependencies
// import { useState, ChangeEvent, useEffect } from 'react';
// import { FiShare } from 'react-icons/fi';
// import styled from '@emotion/styled';
// import { FaHeart } from 'react-icons/fa';
// import { useParams } from 'react-router-dom';

// // Components
// import AmiiboItem from './AmiiboItem';
// import Popup from './WishlistPopup';
// import { Amiibo } from '../../types/Amiibo';
// import { User } from '../../types/User';
// import { getUser } from '../../features/user/userAPI';
// import { removeFromWishlist } from '../../features/user/updateWishlist';


// const Button = styled.button`
//     &:hover {
//         border-color: black;
//     }
//     cursor: pointer;
//     transition: border-color 0.25s;
//     border-radius: 8px;
//     border: 1px solid transparent;
//     padding: 0.6em 1.2em;
//     font-size: 1em;
//     font-weight: 500;
//     font-family: inherit;
//     color: white;
//     background-color: #646cff;
//     font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
// `;

// const Page = styled.div`
//     padding: 2rem;
//     min-width: 320px;
//     min-height: 100vh;
//     font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
//     margin-left: auto;
//     margin-right: auto;
//     width: 960px;
// `;

// const Wishes = styled.div`
//     display: list-item;
//     list-style: none;
//     width: 50%;
//     margin: auto;
// `;

// function WishlistPage() {
//     const { userId } = useParams();
//     const [user, setUser] = useState<User | null>();
//     const [defaultWish, setDefaultWishlist] = useState<Amiibo[]>([]);

//     useEffect(() => {
//         const fetchUser = async () => {
//             if (userId) {
//                 const fetchedUser = await getUser(userId);
//                 setUser(fetchedUser || null);
//             }
//         };
//         fetchUser();
//         if (user) {
//             setDefaultWishlist(user.wishlist);
//         }
//     }, [userId]);

//     const [popupOpen, setPopupOpen] = useState(false);
//     const [isPublic, setIsPublic] = useState(false);
//     const [type, setType] = useState('');
//     const [publicCall, setPublicCall] = useState(false);
//     const togglePopup = () => {
//         setType('sharing');
//         setPopupOpen(!popupOpen);
//     };

//     const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
//         setType('public');
//         setPublicCall(!publicCall);
//     };

//     const removeWishlistItem = (amiibo: Amiibo) => {
//         const updatedWishlist = defaultWish.filter((item) => item.name !== amiibo.name);
//         setDefaultWishlist(updatedWishlist);
//         removeFromWishlist(userId, updatedWishlist, amiibo);
//     };

//     return (
//         <Page>
//             <label>
//                 <input
//                     id="checkbox"
//                     type="checkbox"
//                     checked={isPublic}
//                     onChange={handleOnChange}
//                     onClick={togglePopup}
//                 />
//             </label>
//             <p className="route-directory">Home - Wishlist</p>
//             <h3>Explore or remove items form your Wish List here. </h3>
//             <p>Item Count: {defaultWish.length}</p>

//             <div className="wishlist-share-button">
//                 <Button id="share-button" onClick={togglePopup}>
//                     <FiShare /> Share Wishlist!
//                 </Button>
//                 {
//                     <Popup
//                         showPopup={popupOpen}
//                         setShowPopup={setPopupOpen}
//                         type={type}
//                         publicStatus={isPublic}
//                         setPublicStatus={setIsPublic}
//                     />
//                 }
//             </div>

//             {isPublic && (
//                 <Wishes>
//                     {defaultWish.map((wish) => (
//                         <AmiiboItem
//                         amiibo={wish}
//                         key={`${wish.gameSeries} - ${wish.name}}`}
//                         Icon={FaHeart}
//                         onRemove={removeWishlistItem}
//                     />
//                     ))}
//                     {defaultWish.length == 0 && 
//                     <p>Your wishlist is currently empty...</p>
//                     }
//                 </Wishes>
//             )}
//         </Page>
//     );
// }

// export default WishlistPage;
