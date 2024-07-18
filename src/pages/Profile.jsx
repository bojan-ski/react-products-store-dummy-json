import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
// firebase/firestore funcs
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth"
import PageHeader from "../components/PageHeader"

const Profile = () => {
  const auth = getAuth()
  // console.log(auth.currentUser);

  const [userData, setUserData] = useState({
    userID: '',
    userName: ''
  })

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        auth.currentUser ? (
          setUserData({
            userID: user.uid,
            userName: user.displayName
          })
        ) : (
          setUserData({
            userID: '',
            userName: ''
          })
        )
      }
    })
  }, [])

  // log out user
  const navigate = useNavigate()

  const logOutUser = async () => {
    if (window.confirm('Are you sure you want to log out')) {
      try {
        await signOut(auth)

        setUserData({
          userID: '',
          userName: ''
        })

        // success message
        console.log('you have successfully logged out');

        // after the user has logged out, the user is redirected to the Dashboard page
        navigate('/')
      } catch (error) {
        //error message
        console.log(error);
      }
    }
  }

  return (
    <div className="profile-page text-center">
      <PageHeader page="Profile" />
      {auth.currentUser ? (
        <div>
          <h1>{userData.userName}</h1>
          <button className='btn btn-danger' onClick={logOutUser}>
            log out
          </button>
        </div>
      ) : (
        <h1>Please login</h1>
      )}
    </div>
  )
}

export default Profile