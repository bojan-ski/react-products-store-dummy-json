// context
import { useGlobalContext } from "../context"
// components
import PageHeader from "../components/PageHeader"
import OrderCostDetails from "../components/checkoutPage/OrderCostDetails"
import CheckoutForm from "../components/checkoutPage/CheckoutForm"
import BackButtons from "../components/BackButtons"

const Checkout = () => {
  const { cartItems } = useGlobalContext() 

  return (
    <div className="checkout-page">
      <div className="container">

        <BackButtons backPath='/cart'/>

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