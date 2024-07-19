// context
import { useGlobalContext } from "../../context";


const CartItemsList = () => {
    const { cartItems } = useGlobalContext()

    return (
        <section className="row">
            {cartItems.cartItems?.map(cartItem => {
                // console.log(cartItem);
                const { thumbnail, title, brand, category, price, quantity, totalPrice } = cartItem

                return <div className="col-12 mb-3">

                    <div className="card-details rounded rounded-4 p-3">

                        <div className="card-details-header text-center mb-2">
                            <img src={thumbnail} alt={title} className="img-fluid" />
                        </div>

                        <div className="card-details-body">
                            <div className="d-flex justify-content-between align-items-center mb-2">
                                <p className="mb-0">
                                    {category}
                                </p>
                                {brand && (
                                    <p className="mb-0">
                                        {brand}
                                    </p>
                                )}
                            </div>
                            <h5 className="fw-bold">
                                {title}
                            </h5>
                            <h5>
                                ${price}
                            </h5>
                        </div>
                    </div>
                </div>
            })}
        </section>
    )
}

export default CartItemsList