import {  getFirestore, collection, doc, addDoc, getDoc, getDocs, setDoc, deleteDoc, query, Timestamp } from "firebase/firestore";
import { firebaseApp } from "../../firebase/firebaseConfig";
import { User, UserRef } from "../../types/User";
import { Amiibo } from "../../types/Amiibo";
import { useId } from "react";

const db = getFirestore(firebaseApp);

export const getUser = async (user_uid:string): Promise<User | undefined> => {
    const usersRef = doc(db, "users", user_uid);
    const docSnap = await getDoc(usersRef);
    if (docSnap.exists()) {
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
    });
};

export const addToWishlist = async (userId: string, amiibo: Amiibo): Promise<void> => {
    const wishlistRef = collection(db, "users", userId, "wishlist");
    await addDoc(wishlistRef, {
        name: amiibo.name,
        image: amiibo.image,
        gameSeries: amiibo.gameSeries,
        amiiboSeries: amiibo.amiiboSeries,
        release: amiibo.release.na,
        addedAt: Timestamp.now(),
    });
};

export const getWishlist = async (userId: string) => {
    const wishlistRef = collection(db, "users", userId, "wishlist");
    const q = query(wishlistRef);
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
        wishlistId: doc.id,
        ...doc.data() as Amiibo
    }));
}

export const removeFromWishlist = async (useId: string, wishlistId: string) => {
    console.log(wishlistId);
    const wishlistRef = doc(db, "users", useId, "wishlist", wishlistId);
    await deleteDoc(wishlistRef);
}