import { Link } from "react-router-dom"

const Onboarding = () => {
  return (
    <div className="onboarding text-end mb-3">
      <Link to='/sign-up' className='btn-info onboarding-btn btn me-3'>
        Create an account
      </Link>
      <Link to='/login' className='btn-info onboarding-btn btn me-3'>
        Sign In
      </Link>
    </div>
  )
}

export default Onboarding