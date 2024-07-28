// context
import { useGlobalContext } from "../../context";

const CartItem = ({ cartItem }) => {
    // console.log(cartItem);
    const { cartItems, setCartItems } = useGlobalContext()
    // console.log(cartItems);

    const { id, thumbnail, title, brand, category, price, quantity, totalPrice } = cartItem

    const handleUpdatedAmount = (e) => {
        e.preventDefault()

        setCartItems(prevState => {
            const newCartItemsList = prevState.cartItemsList.map(cartItem => {
                if (cartItem.id === id) {
                    return { ...cartItem, quantity: +e.target.value, totalPrice: cartItem.price * +e.target.value };
                }
                return cartItem;
            });

            const newTotalQuantity = newCartItemsList.reduce((acc, item) => acc + item.quantity, 0);
            const newOrderCost = newCartItemsList.reduce((acc, item) => acc + item.totalPrice, 0);

            return {
                ...prevState,
                cartItemsList: newCartItemsList,
                totalQuantity: newTotalQuantity,
                orderCost: newOrderCost.toFixed(2),
            };
        });

        alert('Cart updated')
    }

    console.log(cartItems);

    return (
        <div className="col-12 mb-3">

            <div className="bg-info cart-item-details rounded rounded-4 p-3 d-flex flex-row align-items-center justify-content-around">

                <div className="cart-item-details-1">
                    <img src={thumbnail} alt={title} className="img-fluid" />
                </div>

                <div className="cart-item-details-2">
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
                    <h5 className="mb-0">
                        ${price}
                    </h5>
                </div>

                <div className="cart-item-details-3">
                    <select className="form-select mb-2" value={quantity} onChange={handleUpdatedAmount}>
                        {Array.from({ length: 10 }, (_, idx) => {
                            const amount = idx + 1

                            return (
                                <option key={amount} value={amount}>
                                    {amount}
                                </option>
                            )
                        })}
                    </select>

                    <p className='fw-bold mb-0'>
                        {totalPrice}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CartItem