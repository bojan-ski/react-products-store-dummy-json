const OrderCostDetails = ({ cartItems }) => {
    const { cartItemsList, totalQuantity, shipping, orderCost } = cartItems

    return (
        <section className="bg-info py-2 px-4 mb-3 rounded-4">
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
                    <p className='fw-bold'>
                        {totalQuantity}
                    </p>
                </div>

                {/* row item 2 */}
                <div className="col-6">
                    <p className='mb-0'>
                        Shipping Cost:
                    </p>
                    <p className='fw-bold'>
                        {shipping}
                    </p>
                    <h5 className=''>
                        Grand Total:
                    </h5>
                    <p className='fw-bold'>
                        {+orderCost + shipping}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default OrderCostDetails