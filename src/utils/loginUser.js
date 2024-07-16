// firebase/firestore funcs
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'


const loginUser = async (email, password) => {
    try {
        const auth = getAuth()
        await signInWithEmailAndPassword(auth, email, password)

        //success message
        console.log('user logged in');

        window.location.href = '/profile'
    } catch (error) {
        //error message
        console.log(error);
    }
}

export default loginUser