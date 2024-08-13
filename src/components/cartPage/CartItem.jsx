// context
import { useGlobalContext } from "../../context";

const CartItem = ({ cartItem }) => {
    // console.log(cartItem);
    const { setCartItems } = useGlobalContext()
    // console.log(cartItems);

    const { id, thumbnail, title, brand, category, price, quantity, totalPrice } = cartItem

    const handleUpdatedCart = (e) => {
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

    const handleRemoveProduct = () => {
        if (window.confirm('Are you sure you want to remove product?')){
            setCartItems(prevState => {
                const newCartItemsList = prevState.cartItemsList.filter(cartItem => cartItem.id !== id);
    
                const newTotalQuantity = newCartItemsList.reduce((acc, item) => acc + item.quantity, 0);
                const newOrderCost = newCartItemsList.reduce((acc, item) => acc + item.totalPrice, 0);
    
                return {
                    ...prevState,
                    cartItemsList: newCartItemsList,
                    totalQuantity: newTotalQuantity,
                    orderCost: newOrderCost.toFixed(2),
                };
            });

            alert('Product removed form cart')
        }
    }


    return (
        <div className="col-12 mb-3">

            <div className="bg-info cart-item-details rounded rounded-4 p-3 d-flex flex-row align-items-center justify-content-around">

                <div className="cart-item-details-1 d-none d-lg-block">
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
                    <h6 className="fw-bold">
                        {title}
                    </h6>
                    <h6 className="mb-0">
                        ${price}
                    </h6>
                </div>

                <div className="cart-item-details-3">
                    <select className="form-select mb-2" value={quantity} onChange={handleUpdatedCart}>
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
                        $ {totalPrice}
                    </p>
                </div>

                <div className="cart-item-details-3">
                    <button className="btn btn-danger" onClick={handleRemoveProduct}>
                        Remove
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CartItem