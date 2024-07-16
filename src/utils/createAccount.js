// firebase/firestore funcs
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { doc, setDoc, serverTimestamp } from "firebase/firestore"
import { db } from '../firebase.config'

const createAccount = async (username, email, password) => {
    try {
        const auth = getAuth()
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
        const newUser = userCredentials.user

        updateProfile(auth.currentUser, {
            displayName: username
        })

        const userCredentialsCopy = {
            username, 
            email,
            timestamp: serverTimestamp()
        }

        await setDoc(doc(db, 'users', newUser.uid), userCredentialsCopy)

        console.log('account created');
    } catch (error) {
        console.log(error);
    }

  
}

export default createAccount