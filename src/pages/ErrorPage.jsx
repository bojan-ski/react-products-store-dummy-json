import { useRouteError } from "react-router-dom"
// components
import Error from "../components/errorPage/Error"

const ErrorPage = () => {
    const errorType = useRouteError()

    return (
        <div>
            {errorType === 404 ? (
                <Error textOne='Page you are looking for does not exist' textTwo='Please return to the Home page'/>
            ) : (
                <Error textOne='There was an error' textTwo='Please return to the Home page'/>
            )}
        </div>
    )
}

export default ErrorPage