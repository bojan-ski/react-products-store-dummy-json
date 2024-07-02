import { useLoaderData, Link } from "react-router-dom"
// utils 
import fetchSelectedProductDetailsFromDB from "../utils/fetchSelectedProductDetailsFromDB"

// LOADER
export const loader = async ({ params }) => {
    const selectedProductDetails = await fetchSelectedProductDetailsFromDB(params.id)

    // console.log(selectedProductDetails);
    return selectedProductDetails
}

const SelectedProduct = () => {
    const { availabilityStatus, brand, category, description, dimensions, discountPercentage, images, minimumOrderQuantity, price, rating, returnPolicy, reviews, shippingInformation, stock, tags, thumbnail, title, warrantyInformation, weight } = useLoaderData()

    return (
        <div className="selected-product-page my-5">
            <div className="container">

                <section className="d-flex align-items-center justify-content-between my-5">
                    <Link to='/' className="btn btn-warning">
                        Back
                    </Link>
                    <h2 className="fw-bold mb-0">
                        {title}
                    </h2>
                    <h5 className={`fw-bold mb-0 ${availabilityStatus == "In Stock" ? 'text-success' : 'text-danger'}`}>
                        {availabilityStatus}
                    </h5>
                </section>

                <section className="recipe-details-main">
                    <div className="row">

                        {/* row item 1 */}
                        <div className="col-12 col-md-6 mb-4">
                            <img src={images[0]} alt={title} className="img-fluid" />
                        </div>

                        {/* row item 2 */}
                        <div className="col-12 col-md-6 mb-4">
                            <p className="mb-2">
                                <span className="fw-bold">Brand: </span> {brand}
                            </p>
                            <p className="mb-2">
                                <span className="fw-bold">Category:</span> {category}
                            </p>
                            <p className="mb-1">
                                <span className="fw-bold">Dimensions:</span>
                            </p>
                            <ul >
                                {Object.entries(dimensions).map(([key, value]) => (
                                    <li key={key}>
                                        <span className="fw-bold">{key}</span>: {value}
                                    </li>
                                ))}
                            </ul>
                            <p className="mb-2">
                                <span className="fw-bold">Weight:</span> {weight}
                            </p>
                            <p className="mb-2">
                                <span className="fw-bold">Price:</span> {price}
                            </p>
                            <p className="mb-2">
                                <span className="fw-bold">Rating:</span> {rating}
                            </p>
                            <p className="mb-2">
                                <span className="fw-bold">Shipping information:</span> {shippingInformation}
                            </p>
                            <p className="mb-2">
                                <span className="fw-bold">Return policy:</span> {returnPolicy}
                            </p>
                            <p className="mb-2">
                                <span className="fw-bold">Warranty information:</span> {warrantyInformation}
                            </p>
                        </div>

                        {/* row item 3 */}
                        <div className="col-12 col-md-6 mb-4">
                            <h5 className="text-center">
                                Description:
                            </h5>
                            <p>
                                {description}
                            </p>
                        </div>

                        {/* row item 4 */}
                        <div className="col-12 col-md-6 mb-4">
                            <h5 className="text-center">
                                Reviews:
                            </h5>
                            {reviews.map(review => <ul className="list-unstyled">
                                {Object.entries(review).map(([key, value]) => (
                                    <li key={key}>
                                        <span className="fw-bold">{key}</span>: {value}
                                    </li>
                                ))}
                            </ul>
                            )}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default SelectedProduct