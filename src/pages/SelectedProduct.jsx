import { useLoaderData, Link } from "react-router-dom"
// utils 
import fetchDataFromDB from "../utils/fetchDataFromDB"
// components
import ImagesGalleryBox from "../components/selectedProductPage/ImagesGalleryBox"
import ProductDataBox from "../components/selectedProductPage/ProductDataBox"
import DescriptionBox from "../components/selectedProductPage/DescriptionBox"
import ReviewsBox from "../components/selectedProductPage/ReviewsBox"


// LOADER
export const loader = async ({ params }) => {
    const selectedProductDetails = await fetchDataFromDB('', `/${params.id}`)

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
                        <div className="col-12 col-md-6 text-center">
                            <ImagesGalleryBox />
                        </div>

                        {/* row item 2 */}
                        <div className="col-12 col-md-6 mb-4">
                            <ProductDataBox />
                        </div>

                        {/* row item 3 */}
                        <div className="col-12 col-md-6 mb-4">
                            <DescriptionBox />
                        </div>

                        {/* row item 4 */}
                        <div className="col-12 col-md-6 mb-4">
                            <ReviewsBox />
                            {/* <h5 className="text-center">
                                Reviews:
                            </h5>
                            {reviews.map(review => <ul className="list-unstyled">
                                {Object.entries(review).map(([key, value]) => (
                                    <li key={key}>
                                        <span className="fw-bold">{key}</span>: {value}
                                    </li>
                                ))}
                            </ul>
                            )} */}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default SelectedProduct