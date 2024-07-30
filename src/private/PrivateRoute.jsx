import { Navigate, Outlet } from "react-router-dom"
// context
import { useGlobalContext } from "../context"

const PrivateRoute = () => {
    const { userProfileDetails } = useGlobalContext()

    return userProfileDetails.userName ? <Outlet/> : <Navigate to='/login'/>
}

export default PrivateRoute