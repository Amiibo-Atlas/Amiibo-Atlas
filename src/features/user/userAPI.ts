import {
    getFirestore,
    collection,
    doc,
    addDoc,
    where,
    getDoc,
    getDocs,
    setDoc,
    deleteDoc,
    query,
    Timestamp,
    updateDoc,
} from 'firebase/firestore';
import firebaseApp from '../../firebase/firebaseConfig';
import { User, UserRef } from '../../types/User';
import { Amiibo } from '../../types/Amiibo';
import { v4 as uuidv4 } from 'uuid';

const db = getFirestore(firebaseApp);

export const getUser = async (user_uid: string): Promise<User | undefined> => {
    const usersRef = doc(db, 'users', user_uid);
    const docSnap = await getDoc(usersRef);
    if (docSnap.exists()) {
        return docSnap.data() as User;
    }
};

export const postUser = async (userRef: UserRef): Promise<void> => {
    const user = userRef.user;
    // Takes a reference to the document and a map of the key-value pair to write to the document.
    await setDoc(doc(db, 'users', userRef.uid), {
        displayName: user.displayName,
        email: user.email,
        profile_picture: user.profile_picture,
    });
};

export const addToWishlist = async (userId: string, amiibo: Amiibo): Promise<void> => {
    const wishlistRef = collection(db, 'users', userId, 'wishlist');
    console.log('wishlistRef: ', wishlistRef);

    // Identify if the amiibo already exists within the wishlist for the user...
    const findWishlist = query(wishlistRef, where('name', '==', amiibo.name));
    const querySnapshot = await getDocs(findWishlist);
    if (!querySnapshot.empty) {
        // Amiibo exists in the wishlist if particular amiibo is non-empty.
        throw new Error('Amiibo already in wishlist');
    }

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
    const wishlistRef = collection(db, 'users', userId, 'wishlist');
    const q = query(wishlistRef);
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({
        wishlistId: doc.id,
        ...(doc.data() as Amiibo),
    }));
};

export const removeFromWishlist = async (useId: string, wishlistId: string) => {
    console.log(wishlistId);
    const wishlistRef = doc(db, 'users', useId, 'wishlist', wishlistId);
    await deleteDoc(wishlistRef);
};

export const getShareId = async (user_uid: string) => {
    const usersRef = doc(db, 'users', user_uid);
    const docSnap = await getDoc(usersRef);
    if (docSnap.exists()) {
        if (!docSnap.data().shareId) {
            const shareID = uuidv4();
            await updateDoc(usersRef, {
                shareId: shareID
            });
            return shareID;
        }
        return docSnap.data().shareId;
    }
};

export const getUserFromShareId = async (share_id: string) => {
    const q = query(collection(db, 'users'), where('shareId', '==', share_id));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({
        userId: doc.id,
        ...(doc.data() as User),
    }));
};

export const getWishlistFromShareId = async(share_id: string) => {
    const q = query(collection(db, 'users'), where('shareId', '==', share_id));
    const querySnapshot = await getDocs(q);
    // get the user's id
    const userRef = querySnapshot.docs.map(docs => docs.id);
    console.log(userRef);

    const wishlistRef = collection(db, 'users', userRef[0], 'wishlist');
    const q2 = query(wishlistRef);
    const querySnapshot2 = await getDocs(q2);
    return querySnapshot2.docs.map((doc) => ({
        
        wishlistId: doc.id,
        ...(doc.data() as Amiibo),
    }));
};

export const getUserIdFromShareId = async(share_id) => {
    const q = query(collection(db, 'users'), where('shareId', '==', share_id));
    const querySnapshot = await getDocs(q);
    // get the user's id
    const userRef = querySnapshot.docs.map(docs => docs.id);
    return userRef;
}