// firebase/firestore funcs
import { addDoc, collection, doc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase.config";
// utils func 
import getCurrentTimeAndDate from "../utils/getCurrentTimeAndDate";

const submitOrder = async (userProfileDetails, orderData) => {
    try {
        const orderDataCopy = {
            ...orderData,
            orderCreatedBy: userProfileDetails.userName,
            userID: userProfileDetails.userID,
            timestamp: serverTimestamp(),
            orderCreated: getCurrentTimeAndDate()
        }

        const userDocRef = doc(db, `users/${userProfileDetails.userID}`);
    
        // Reference to the orderHistory subcollection
        const orderHistoryCollectionRef = collection(userDocRef, 'orderHistory');
        
        // Add a new document to the orderHistory subcollection
       await addDoc(orderHistoryCollectionRef, orderDataCopy);

        // Add a new document to the orders collection
       await addDoc(collection(db, 'orders'), orderDataCopy);

        alert('Your order has been submitted')
    } catch (error) {
        console.log(error);
    }
}

export default submitOrder