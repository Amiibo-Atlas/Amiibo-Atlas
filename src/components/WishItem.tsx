import { FaHeart } from "react-icons/fa";
import { RiInformation2Fill } from "react-icons/ri";

// used for placeholder amiibo information. 
interface Amiibo {
    character: string;
    amiiboSeries: string;
    gameSeries: string;
    name: string,
    id: number;
}

interface WishProps {
    amiiboWish: Amiibo;
}

// placeholder information 
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

const WishItem = ({amiiboWish}: WishProps) => {       

    // functionality to remove from wishlist
    const removeItem = (wish: Amiibo) => {
        console.log("prev wishlist: " + JSON.stringify(defaultWishlist));
        console.log("wish: " + JSON.stringify(wish));

    }

    return (
        <div className="wish-item">
            <h3>{amiiboWish.character} - {amiiboWish.name}</h3>
            <div className="wishlist-details-button"> 
                <button id="details-button">
                    <RiInformation2Fill />
                </button>
            </div>
            <div className="wishlist-add-button">
              <button id="remove-button" onClick={() => removeItem(amiiboWish)}><FaHeart /></button>
            </div>
        </div>
    )
}

export default WishItem