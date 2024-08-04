const OrderTotal = ({selectedOrderDetails, orderDetails}) => {
    return (
        <>
            <h2>TOTAL</h2>

            <section>
                <p className="fw-bold">
                    Order created
                </p>
                <p className="fw-bold text-muted capitalize">
                    {selectedOrderDetails.orderCreated}
                </p>
                <p className="fw-bold">
                    Total Quantity
                </p>
                <p className="fw-bold text-muted capitalize">
                    {orderDetails.totalQuantity}
                </p>
                <p className="fw-bold">
                    Grand Total
                </p>
                <p className="fw-bold text-muted capitalize">
                    {selectedOrderDetails.grandTotal}
                </p>
            </section>
        </>
    )
}

export default OrderTotal