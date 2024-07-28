// context
import { useGlobalContext } from '../../context'

const CartCostDetails = () => {
    const { cartItems } = useGlobalContext()

    return (
        <div>
            <h4 className='mb-3'>
                CartCostDetails
            </h4>

            <p className='mb-0'>
                Total number of products:
            </p>
            <p className='fw-bold'>
                {cartItems.cartItemsList.length}
            </p>

            <p className='mb-0'>
                Total Quantity:
            </p>
            <p className='fw-bold'>
                {cartItems.totalQuantity}
            </p>

            <p className='mb-0'>
                Order Cost:
            </p>
            <p className='fw-bold'>
                {cartItems.orderCost}
            </p>

            <p className='mb-0'>
                Shipping Cost:
            </p>
            <p className='fw-bold'>
                {cartItems.shipping}
            </p>

            <p className='mb-0'>
                Grand Total:
            </p>
            <p className='fw-bold'>
                {+cartItems.orderCost + cartItems.shipping}
            </p>
        </div>
    )
}

export default CartCostDetails