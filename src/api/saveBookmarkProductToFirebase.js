// firebase/firestore funcs
import { addDoc, doc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase.config";

const saveBookmarkProductToFirebase = async (userID, product) => {
    // console.log(product);
    // console.log(userID);
    
    try {
        const productData = {
            ...product,
            timestamp: serverTimestamp()
        }

        const userDocRef = doc(db, `users/${userID}`);
    
        // Reference to the orderHistory subcollection
        const bookmarkedProductsCollectionRef = collection(userDocRef, 'bookmarkedProducts');
        
        // Add a new document to the orderHistory subcollection
       await addDoc(bookmarkedProductsCollectionRef, productData);

       alert('Product has been bookmarked')
    } catch (error) {
        console.log(error);        
    }  
}

export default saveBookmarkProductToFirebase