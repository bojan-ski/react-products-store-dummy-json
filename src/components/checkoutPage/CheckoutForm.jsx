// context
import submitOrder from "../../api/submitOrder"
import { useGlobalContext } from "../../context"
// components
import CreditCardDetails from "./CreditCardDetails"
import ShippingDetails from "./ShippingDetails"

const CheckoutForm = ({ cartItems }) => {
    const { userProfileDetails, clearCart } = useGlobalContext()

    const handleSubmit = async e => {
        e.preventDefault()

        const orderData = {
            orderDetails: cartItems,
            grandTotal: +(+cartItems.orderCost + cartItems.shipping).toFixed(2),
            cardDetails: {
                nameOnCard: e.target[0].value.trim(),
                cardNumber: e.target[1].value.trim(),
                secureCode: e.target[3].value.trim(),
                cardExpires: e.target[4].value.trim()
            },
            shippingDetails: {
                streetAddress: e.target[5].value.trim(),
                city: e.target[6].value.trim(),
                zip: e.target[7].value.trim(),
                state: e.target[8].value.trim()
            }
        }

        // console.log(orderData);
        await submitOrder(userProfileDetails, orderData)
    }

    return (
        <form className="mb-5" onSubmit={handleSubmit}>
            <div className="row">

                {/* row item 1 */}
                <section className="col-12 col-md-6 mb-3">
                    <CreditCardDetails />
                </section>

                {/* row item 2 */}
                <section className="col-12 col-md-6 mb-3">
                    <ShippingDetails />
                </section>
            </div>

            <div className="checkout-btn-container d-flex justify-content-between">
                <button type="submit" className="btn btn-success">
                    Proceed
                </button>

                <button className='btn btn-danger px-3 py-2' onClick={clearCart}>
                    Cancel
                </button>
            </div>
        </form>
    )
}

export default CheckoutForm