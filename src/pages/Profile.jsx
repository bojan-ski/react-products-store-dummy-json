// context
import { useGlobalContext } from "../context"
// components
import PageHeader from "../components/PageHeader"

const Profile = () => {
  const { userProfileDetails, logOutUser } = useGlobalContext()
  // console.log(userProfileDetails);

  return (
    <div className="profile-page text-center">

      <PageHeader page="Profile" />

      {userProfileDetails.userName ? (
        <div>
          <h1>{userProfileDetails.userName}</h1>
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