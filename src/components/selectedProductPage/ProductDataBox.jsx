import { useState } from "react"
import { useLoaderData } from "react-router-dom"
// context
import { useGlobalContext } from "../../context"


const ProductDataBox = () => {
    const { id, availabilityStatus, brand, category, description, dimensions, discountPercentage, images, minimumOrderQuantity, price, rating, returnPolicy, reviews, shippingInformation, stock, tags, thumbnail, title, warrantyInformation, weight } = useLoaderData()

    const { setCartItems } = useGlobalContext()

    const [cartItem, setCartItem] = useState({
        id,
        thumbnail,
        title,
        brand,
        category,
        price,
        quantity: 1,
        totalPrice: 0
    })

    const handleAmount = e => {
        e.preventDefault()

        setCartItem(prevItemState => ({
            ...prevItemState,
            quantity: +e.target.value,
            totalPrice: prevItemState.price * e.target.value
        }));
    }

    // console.log(cartItem);

    const addProductToCart = () => {
        // console.log(cartItem);

        setCartItems((prevState) => {
            const updatedCartItems = [...prevState.cartItemsList, cartItem];
            const updatedTotalQuantity = updatedCartItems.reduce((acc, item) => acc + item.quantity, 0);
            const updatedOrderCost = updatedCartItems.reduce((acc, item) => acc + item.totalPrice, 0);

            return {
                ...prevState,
                cartItemsList: updatedCartItems,
                totalQuantity: updatedTotalQuantity,
                orderCost: updatedOrderCost.toFixed(2)
            };
        })

        // console.log(cartItem);
        alert('product added to cart')
    }

    return (
        <>
            <div className="product-data">


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

            <div className="add-to-cart my-4">
                <div className="input-group">
                    <label className="input-group-text fw-bold">
                        Quantity
                    </label>

                    <select className="form-select" onChange={handleAmount}>
                        {Array.from({ length: 10 }, (_, idx) => {
                            const amount = idx + 1

                            return (
                                <option key={amount} value={amount}>
                                    {amount}
                                </option>
                            )
                        })}
                    </select>

                    <button className="btn btn-success" onClick={addProductToCart}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </>
    )
}

export default ProductDataBox