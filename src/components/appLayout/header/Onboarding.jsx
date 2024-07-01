import { Link } from "react-router-dom"

const Onboarding = () => {
  return (
    <div className="onboarding text-end">
      <Link to='/login' className='btn-info onboarding-btn btn me-3'>
        Sign In
      </Link>
      <Link to='/sign-up' className='btn-info onboarding-btn btn'>
        Create an account
      </Link>
    </div>
  )
}

export default Onboarding