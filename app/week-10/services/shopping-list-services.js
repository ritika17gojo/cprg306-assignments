import {db} from "../_utils/firebase";
import {collection, getDocs, addDoc, query} from "firebase/firestore";

export async function getItems(userID) {
    const items=[];

    try {
        const userItemRef = collection(db, 'users/${userID}/items');
        const itemsQuerySnapshot = await getDocs(userItemsRef);

        itemsQuerySnapshot.forEach((doc) => {
            items.push({
                id: doc.id,
                data: doc.data(),
            });
        });
    } catch (error) {
        console.error("Error getting items:", error);
    }
    return items;
}

export async function addItem(userId, item) {
    try {
        const userItemRef = collection(db, 'users/${userID}/items');
        const newItemRef = await addDoc(userItemsRef, item);

        return newItemRef.id;
    } catch (error) {
        console.error("Error adding item:", error);
        return null;
    }
}