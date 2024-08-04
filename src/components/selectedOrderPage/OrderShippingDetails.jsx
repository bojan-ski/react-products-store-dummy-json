const OrderShippingDetails = ({shippingDetails}) => {
    return (
        <>
            <h2>Shipping details</h2>

            <section>
                <p className="fw-bold">
                    Street address
                </p>
                <p className="fw-bold text-muted capitalize">
                    {shippingDetails.streetAddress}
                </p>
                <p className="fw-bold">
                    City
                </p>
                <p className="fw-bold text-muted capitalize">
                    {shippingDetails.city}
                </p>
                <p className="fw-bold">
                    ZIP
                </p>
                <p className="fw-bold text-muted">
                    {shippingDetails.zip.toUpperCase()}
                </p>
                <p className="fw-bold">
                    State
                </p>
                <p className="fw-bold text-muted capitalize">
                    {shippingDetails.state}
                </p>
            </section>
        </>
    )
}

export default OrderShippingDetails