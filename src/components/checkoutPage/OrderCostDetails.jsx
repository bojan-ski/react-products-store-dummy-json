// context
import { useGlobalContext } from "../../context"


const OrderCostDetails = () => {
    const { cartItems } = useGlobalContext()
    // console.log(cartItems);
    
    const { cartItemsList, totalQuantity, shipping, orderCost, gradTotal } = cartItems

    return (
        <section className="bg-info p-3 mb-5 rounded-4">
            <div className="row text-center">
                {/* row item 1 */}
                <div className="col-6">
                    <p className='mb-0'>
                        Number of products:
                    </p>
                    <p className='fw-bold'>
                        {cartItemsList.length}
                    </p>
                    <p className='mb-0'>
                        Total Quantity:
                    </p>
                    <p className='fw-bold mb-0'>
                        {totalQuantity}
                    </p>
                </div>

                {/* row item 2 */}
                <div className="col-6">
                    <p className='mb-0'>
                        Shipping Cost:
                    </p>
                    <p className='fw-bold'>
                        + {shipping} %
                    </p>
                    <h5 className='mb-0'>
                        Grand Total:
                    </h5>
                    <p className='fw-bold mb-0'>
                        $ {gradTotal}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default OrderCostDetails