// context
import { useGlobalContext } from "../context"
// components
import PageHeader from "../components/PageHeader"
import CartItemsList from "../components/cartPage/CartItemsList"


const Cart = () => {
    const { cartItems } = useGlobalContext()
    // console.log(cartItems);

    return (
        <div className="cart-page">
            <PageHeader page='Cart' />

            <div className="container">

                {cartItems.cartItems && cartItems.cartItems.length > 0 ? (
                    <div className="row">
                        {/* row item 1 */}
                        <div className="col-12 col-md-7">
                            <CartItemsList />
                        </div>

                        <div className="col-12 col-md-5">
                            <section>
                                Order details
                            </section>
                        </div>

                        {/* row item 2 */}
                    </div>
                ) : (
                    <h1>Your cart is empty</h1>
                )}
            </div>
        </div>
    )
}

export default Cart