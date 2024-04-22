import { useState } from 'react';
import WishItem from '../components/WishItem';
import { FiShare } from "react-icons/fi";
import styled from '@emotion/styled';
import Popup from '../components/WishlistPopup';


// test for now 
// ideally, we should be able to get the amiibo object
// interface Amiibo {

// }

// const amiibo = "mario";


// to display each wishlist entry in a list 
// https://www.guvi.in/blog/how-to-render-an-array-of-objects-in-react/#:~:text=JavaScript%20map()-,To%20render%20an%20array%20of%20objects%2Fitems%20in%20React%2C%20we,item%20in%20the%20given%20array.

// placeholder wishlist until backend is implemented
 // used for placeholder amiibo information. 
 interface Amiibo {
  character: string;
  amiiboSeries: string;
  gameSeries: string;
  name: string,
  image: string,
  id: number;
}

const Button = styled.button`
  &:hover {
    border-color: black;
  }; 
  cursor: pointer;
  transition: border-color 0.25s;
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  color: white;
  background-color: #646cff;
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
`;

const Page = styled.div`
  padding: 2rem;
  min-width: 320px;
  min-height: 100vh;
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  margin-left:auto;
  margin-right:auto;
  width:960px;
  
`;

const Wishes = styled.div`
  display: list-item;
  list-style: none;
  width: 50%;
  margin: auto;
`;
// placeholder
const defaultWishlist: Amiibo[]= [
    {
      character: "Metal Mario",
      amiiboSeries: "Mario Sports Superstars",
      gameSeries: "Mario Sports Superstars",
      name: "Metal Mario - Tennis",
      image: "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_09d00301-02bb0e02.png",
      id: 1,
    },
    {
      character: "Mario Cereal",
      amiiboSeries: "Others",
      gameSeries: "Kellogs",
      name: "Super Mario Cereal",
      image: "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_37400001-03741402.png",
      id: 2,
    },
    {
      character: "Baby Mario",
      amiiboSeries: "Mario Sports Superstars",
      gameSeries: "Mario Sports Superstars",
      name: "Baby Mario - Soccer",
      image: "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_09cc0101-02a50e02.png",
      id: 3,
    },
    {
      character: "Metal Mario",
      amiiboSeries: "Mario Sports Superstars",
      gameSeries: "Mario Sports Superstars",
      name: "Metal Mario - Soccer",
      image: "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_09d00101-02b90e02.png",
      id: 4,
    },
    {
      character: "Mario",
      amiiboSeries: "Mario Sports Superstars",
      gameSeries: "Mario Sports Superstars",
      name: "Mario - Soccer",
      image: "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_09c00101-02690e02.png",
      id: 5,
    },

  ];


function WishlistPage() {
  const [ popupOpen, setPopupOpen ] = useState(false);
  const togglePopup = () => {
    setPopupOpen(!popupOpen);
  }
  return (

     
    <Page>
      <h1 id="page-title">Wishlist</h1>
      <p className="route-directory">Home - Wishlist</p>
      <h3>Explore or remove items form your Wish List here. </h3>
      <div className="wishlist-share-button">
     
          <Button id="share-button" onClick={togglePopup}>
            <FiShare /> Share Wishlist!  
          </Button>
          <Popup showPopup={popupOpen} setShowPopup={setPopupOpen} />
           
        </div>
        
      <Wishes>
        {defaultWishlist.map((wish) => (
            <WishItem amiiboWish={wish} key={`${wish.gameSeries} - ${wish.name}}`} />
        ))}
      </Wishes>
    </Page>
  )
}

export default WishlistPage
