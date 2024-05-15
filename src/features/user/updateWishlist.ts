import { doc, getFirestore, updateDoc } from "firebase/firestore";
import { firebaseApp } from "../../firebase/firebaseConfig";
import { Amiibo } from '../../types/Amiibo';

const db = getFirestore(firebaseApp);


export const addToWishlist = async (userId, curList: Amiibo[], amiibo: Amiibo) => {

    try {
        const userRef = doc(db, 'users', userId);

        console.log('updatedList: ', curList);
        await updateDoc(userRef, {
            wishlist: curList,
        });
     
        console.log("THE LIST THAT'LL BE USED TO BE UPDATED: ", curList);
        
    }
    catch (error) {
        console.error(error);
    }
};

export const removeFromWishlist = async (userId, curList: Amiibo[], amiibo: Amiibo) => {
    try {
        const userRef = doc(db, 'users', userId);

        console.log('updatedList: ', curList);
        await updateDoc(userRef, {
            wishlist: curList,
        });
     
        console.log("THE LIST THAT'LL BE USED TO BE UPDATED: ", curList);
    }
    catch (error) {
        console.error(error);
    }
};

