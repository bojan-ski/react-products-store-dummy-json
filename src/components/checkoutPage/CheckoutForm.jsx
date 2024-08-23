import { useState } from "react"
import { useLoaderData } from "react-router-dom"
// context
import { useGlobalContext } from "../../context"
// api func
import submitOrder from "../../api/submitOrder"
// components
import CreditCardDetails from "./CreditCardDetails"
import ShippingDetails from "./ShippingDetails"


const CheckoutForm = () => {
    const userShippingDetails = useLoaderData()
    const { userProfileDetails, cartItems, clearCart, handleClearCart, navigate } = useGlobalContext()
    // console.log(userShippingDetails);  

    const [cardDetails, setCardDetails] = useState({
        nameOnCard: '',
        cardNumber: '',
        secureCode: '',
        cardExpires: ''
    })

    const [shippingDetails, setShippingDetails] = useState({
        streetAddress: '',
        city: '',
        zip: '',
        state: ''
    })

    const handleSetShippingDetails = () => {
        setShippingDetails({
            streetAddress: userShippingDetails ? userShippingDetails.ShippingDetailsData.streetAddress : '',
            city: userShippingDetails ? userShippingDetails.ShippingDetailsData.city : '',
            zip: userShippingDetails ? userShippingDetails.ShippingDetailsData.zip : '',
            state: userShippingDetails ? userShippingDetails.ShippingDetailsData.state : '',
        })
    }

    const handleClearFormsData = () => {
        if (window.confirm('Are you sure you want to clear form data?')) {
            setCardDetails({
                nameOnCard: '',
                cardNumber: '',
                secureCode: '',
                cardExpires: ''
            })

            setShippingDetails({
                streetAddress: '',
                city: '',
                zip: '',
                state: ''
            })
        }
    }

    const handleSubmitOrderDetails = async e => {
        e.preventDefault()

        if (window.confirm('Place Order?')) {
            // console.log('handleSubmitOrderDetails');

            const orderFormsData = {
                orderDetails: cartItems,
                grandTotal: cartItems.gradTotal,
                orderStatus: 'pending',
                cardDetails,
                shippingDetails
            }

            // const orderFormsData = {
            //     orderDetails: cartItems,
            //     grandTotal: +(+cartItems.orderCost + cartItems.shipping).toFixed(2),
            //     cardDetails: {
            //         nameOnCard: e.target[0].value.trim(),
            //         cardNumber: e.target[1].value.trim(),
            //         secureCode: e.target[2].value.trim(),
            //         cardExpires: e.target[3].value.trim()
            //     },
            //     shippingDetails: {
            //         streetAddress: e.target[4].value.trim(),
            //         city: e.target[5].value.trim(),
            //         zip: e.target[6].value.trim(),
            //         state: e.target[7].value.trim()
            //     }
            // }

            console.log(orderFormsData);
            const response = await submitOrder(userProfileDetails, orderFormsData)

            if(response) console.log('order submitted');

            // if(response) setTimeout(() => {
            //     clearCart()
            //     navigate('/profile')
            // }, 1500)
            
        }
    }

    return (
        <form className="mb-5" onSubmit={handleSubmitOrderDetails}>
            <div className="row">

                {/* row item 1 */}
                <section className="col-12 col-md-6 mb-3">
                    <CreditCardDetails cardDetails={cardDetails} setCardDetails={setCardDetails} />
                </section>

                {/* row item 2 */}
                <section className="col-12 col-md-6 mb-3">
                    <ShippingDetails shippingDetails={shippingDetails} setShippingDetails={setShippingDetails} />
                </section>
            </div>

            <div className="checkout-btn-container">
                <div className="d-flex justify-content-between mb-3">
                    <button type="button" className="btn btn-primary" onClick={handleSetShippingDetails}>
                        Use Set Shipping Details
                    </button>

                    <button type="button" className='btn btn-warning px-3 py-2' onClick={handleClearFormsData}>
                        Clear Form
                    </button>
                </div>

                <div className="d-flex justify-content-between">
                    <button type="submit" className="btn btn-success">
                        Proceed
                    </button>

                    <button type="button" className='btn btn-danger px-3 py-2' onClick={handleClearCart}>
                        Cancel
                    </button>
                </div>
            </div>
        </form>
    )
}

export default CheckoutForm