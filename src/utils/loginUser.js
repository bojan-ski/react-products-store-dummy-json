// firebase/firestore funcs
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

const loginUser = async (email, password) => {
    try {
        const auth = getAuth()
        await signInWithEmailAndPassword(auth, email, password)

        console.log('user logged in');
    } catch (error) {
        console.log(error);
    }
}

export default loginUser