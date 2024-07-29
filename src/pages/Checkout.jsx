import { Link } from "react-router-dom"
// context
import { useGlobalContext } from "../context"
// components
import PageHeader from "../components/PageHeader"
import OrderCostDetails from "../components/checkoutPage/OrderCostDetails"
import CheckoutForm from "../components/checkoutPage/CheckoutForm"

const Checkout = () => {
  const { cartItems } = useGlobalContext() 

  return (
    <div className="checkout-page">
      <div className="container">

        <section className="d-flex align-items-center justify-content-between my-5">
          <Link to='/cart' className="btn btn-warning">
            Back
          </Link>
        </section>

        <PageHeader page='Checkout' />

        {cartItems.cartItemsList && cartItems.cartItemsList.length > 0 ? (
          <>
            <OrderCostDetails cartItems={cartItems} />

            <CheckoutForm cartItems={cartItems}/>
          </>
        ) : (
          <h1>Your cart is empty</h1>
        )}
      </div>
    </div>
  )
}

export default Checkout