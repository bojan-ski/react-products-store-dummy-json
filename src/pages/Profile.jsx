import { Link, useLoaderData } from "react-router-dom"
// context
import { useGlobalContext } from "../context"
// api func 
import fetchUserOrderHistoryFromFirebase from '../api/fetchUserOrderHistoryFromFirebase'
// components
import PageHeader from "../components/PageHeader"
import UserShippingDetails from "../components/profilePage/UserShippingDetails"


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
    <div className="profile-page">
      <div className="container">

        <PageHeader page="Profile" />

        {userProfileDetails.userName ? (
          <>
            <div className="profile-btn-container d-flex align-items-center justify-content-between">
              <div>
                <Link to='/profile/order-history' className='btn-info btn me-3'>
                  Order history
                </Link>
                <Link to='/profile/bookmarked-products' className='btn-info btn me-3'>
                  Bookmarked Products
                </Link>
              </div>
              <button className='btn btn-danger' onClick={logOutUser}>
                log out
              </button>
            </div>

            <UserShippingDetails />
          </>
        ) : (
          <h1>Please login</h1>
        )}
      </div>
    </div>
  )
}

export default Profile