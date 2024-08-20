// components
import PageHeader from "../components/PageHeader"
import OrderCostDetails from "../components/checkoutPage/OrderCostDetails"
import CheckoutForm from "../components/checkoutPage/CheckoutForm"
import BackButtons from "../components/BackButtons"


const Checkout = () => {
  return (
    <div className="checkout-page">
      <div className="container">

        <BackButtons backPath='/cart' />

        <PageHeader page='Checkout' />

        <OrderCostDetails />

        <CheckoutForm />
      </div>
    </div>
  )
}

export default Checkout