import { Link } from 'react-router-dom'

const BackButtons = ( {backPath} ) => {
    console.log(backPath);
    return (
        <section className="d-flex align-items-center justify-content-between my-5">
            <Link to={`/${backPath}`} className="btn btn-warning">
                Back
            </Link>
        </section>
    )
}

export default BackButtons