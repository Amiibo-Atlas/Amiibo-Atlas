import { doc, getDoc, setDoc, getFirestore } from "firebase/firestore";
import { firebaseApp } from "../../firebase/firebaseConfig";
import { User, UserRef } from "../../types/User";

const db = getFirestore(firebaseApp);

export const getUser = async (user_uid:string): Promise<User | undefined> => {
    const usersRef = doc(db, "users", user_uid);
    const docSnap = await getDoc(usersRef);
    if (docSnap.exists()) {
        // console.log(docSnap.data());
        return docSnap.data() as User;
    }
};

export const postUser = async (userRef: UserRef): Promise<void> => {
    const user = userRef.user;
    // Takes a reference to the document and a map of the key-value pair to write to the document.
    await setDoc(doc(db, "users", userRef.uid), {
        displayName: user.displayName,
        email: user.email,
        profile_picture: user.profile_picture,
        wishlist: user.wishlist,
    });
};