const OrderCardDetails = ({cardDetails}) => {
    return (
        <>
            <h2>Card details</h2>

            <section>
                <p className="fw-bold">
                    Name on card
                </p>
                <p className="fw-bold text-muted capitalize">
                    {cardDetails.nameOnCard}
                </p>
                <p className="fw-bold">
                    Card number
                </p>
                <p className="fw-bold text-muted">
                    {cardDetails.cardNumber}
                </p>
                <p className="fw-bold">
                    Secure code
                </p>
                <p className="fw-bold text-muted">
                    {cardDetails.secureCode}
                </p>
                <p className="fw-bold">
                    Card expires
                </p>
                <p className="fw-bold text-muted">
                    {cardDetails.cardExpires}
                </p>
            </section>
        </>
    )
}

export default OrderCardDetails