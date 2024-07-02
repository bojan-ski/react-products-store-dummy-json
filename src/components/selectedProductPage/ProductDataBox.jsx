import { useLoaderData } from "react-router-dom"

const ProductDataBox = () => {
    const { availabilityStatus, brand, category, description, dimensions, discountPercentage, images, minimumOrderQuantity, price, rating, returnPolicy, reviews, shippingInformation, stock, tags, thumbnail, title, warrantyInformation, weight } = useLoaderData()

    return (
        <>
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
        </>
    )
}

export default ProductDataBox