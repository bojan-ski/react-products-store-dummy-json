// firebase/firestore funcs
import { addDoc, doc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase.config";


const saveUserShippingDetailsToFirebase = async (userID, formData) => {
  // console.log(userID);
    // console.log(userShippingDetails);
    
    try {
        const userShippingDetails = {
            ...formData,
            timestamp: serverTimestamp()
        }

        const userDocRef = doc(db, `users/${userID}`);
    
        // Reference to the bookmarkedProducts subcollection
        const userShippingDetailsRef = collection(userDocRef, 'shippingDetails');
        
        // Add a new document to the bookmarkedProducts subcollection
       await addDoc(userShippingDetailsRef, userShippingDetails);

       // success message
       alert('Shipping Details saved')
    } catch (error) {
        console.log(error);        
    }  
}

export default saveUserShippingDetailsToFirebase