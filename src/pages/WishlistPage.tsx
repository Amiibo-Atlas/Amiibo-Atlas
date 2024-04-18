
import './App.css';
import WishItem from '../components/WishItem';
import { FiShare } from "react-icons/fi";


// placeholder wishlist until backend is implemented
 interface Amiibo {
  character: string;
  amiiboSeries: string;
  gameSeries: string;
  name: string,
  id: number;
}
const defaultWishlist: Amiibo[]= [
  {
    character: "Metal Mario",
    amiiboSeries: "Mario Sports Superstars",
    gameSeries: "Mario Sports Superstars",
    name: "Metal Mario - Tennis",
    id: 1,
  },
  {
    character: "Mario Cereal",
    amiiboSeries: "Others",
    gameSeries: "Kellogs",
    name: "Super Mario Cereal",
    id: 2,
  },
  {
    character: "Baby Mario",
    amiiboSeries: "Mario Sports Superstars",
    gameSeries: "Mario Sports Superstars",
    name: "Baby Mario - Soccer",
    id: 3,
  },
  {
    character: "Metal Mario",
    amiiboSeries: "Mario Sports Superstars",
    gameSeries: "Mario Sports Superstars",
    name: "Metal Mario - Soccer",
    id: 4,
  },
];
// - - - - - - - - - - - DELETE ONCE BACKEND IS IMPLEMENTED - - - - - - - 


function WishlistPage() {

  return (
    <div id="wishlist">
      <h1 id="page-title">Wishlist</h1>
      <p>Explore or remove items form your Wish List here. </p>
      <div className="route-directory">Home - Wishlist</div>
      <div className="wishlist-share-button">
          <button id="share-button">
            <FiShare /> Share Wishlist! </button>
        </div>

      <div className="whole-wishlist">
        {defaultWishlist.map((wish) => (
            <WishItem amiiboWish={wish} />
        ))}
      </div>
    </div>
  )
}

export default WishlistPage