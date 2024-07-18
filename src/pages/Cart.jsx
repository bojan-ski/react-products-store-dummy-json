// context
import { useGlobalContext } from "../context"
// components
import PageHeader from "../components/PageHeader"


const Cart = () => {
    const { cartItems } = useGlobalContext()
    console.log(cartItems);

    return (
        <div className="cart-page">
            <PageHeader page='Cart' />

            <div className="container">

            </div>
        </div>
    )
}

export default Cart