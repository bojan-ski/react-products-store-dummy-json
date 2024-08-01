import { useLoaderData } from "react-router-dom"
// context
import { useGlobalContext } from "../context"
// api func 
import fetchUserOrderHistoryFromFirebase from '../api/fetchUserOrderHistoryFromDB'
// components
import PageHeader from "../components/PageHeader"


// LOADER
export const loader = async () => {
  const userOrderHistory = await fetchUserOrderHistoryFromFirebase()
  // console.log(userOrderHistory);
  return userOrderHistory
}

const Profile = () => {
  const { userProfileDetails, logOutUser } = useGlobalContext()
  // console.log(userProfileDetails);
  const userOrderHistory = useLoaderData()
  // console.log(userOrderHistory);

  return (
    <div className="profile-page text-center">
      <div className="container">

        <PageHeader page="Profile" />

        {userProfileDetails.userName ? (
          <section>
            
          </section>
        ) : (
          <h1>Please login</h1>
        )}
      </div>
    </div>
  )
}

export default Profile