import { Link } from "react-router-dom"

const Error = ({ textOne, textTwo }) => {
    return (
        <div>
            <h1>
                {textOne}
            </h1>
            <h2>
                {textTwo}
            </h2>

            <Link to='/' className="btn">
                Back Home
            </Link>
        </div>
    )
}

export default Error