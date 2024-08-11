// firebase/firestore funcs
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'

const userResetPassword = async () => {
    try {
        const auth = getAuth()
        await sendPasswordResetEmail(auth, enteredEmail)

        // success message
        alert('Please check your email to complete the reset password process');

        return true
    } catch (error) {
        // error message
        alert('There was an error, please try again later')
        console.error(error)

        return false
    }
}

export default userResetPassword