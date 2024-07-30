import { Link } from "react-router-dom"
// context
import { useGlobalContext } from "../../../context"

const Onboarding = () => {
  const { userProfileDetails, logOutUser } = useGlobalContext()
  // console.log(userProfileDetails);

  return (
    <div className="onboarding text-end mb-3">
      {userProfileDetails.userName ? (
        <div className="d-flex align-items-center justify-content-end">
          <h6 className="capitalize mb-0 me-3">
            Welcome {userProfileDetails.userName}
          </h6>
          <button className='btn btn-danger' onClick={logOutUser}>
            log out
          </button>
        </div>
      ) : (
        <>
          <Link to='/sign-up' className='btn-info onboarding-btn btn me-3'>
            Create an account
          </Link>
          <Link to='/login' className='btn-info onboarding-btn btn me-3'>
            Sign In
          </Link>
        </>
      )}
    </div>
  )
}

export default Onboarding