const OrderedProducts = ({orderDetails}) => {
    return (
        <>
            <h2>Ordered Products</h2>

            <section>
                {orderDetails.cartItemsList.map(product => {
                    const { id, title, thumbnail, quantity, price, totalPrice } = product

                    return <div key={id} className="ordered-product-details bg-info rounded rounded-4 p-3 d-flex flex-row align-items-center justify-content-around">

                        <div className="ordered-product-details-1">
                            <img src={thumbnail} alt={title} className="img-fluid" />
                        </div>

                        <div className="ordered-product-details-2">
                            <h6 className="fw-bold">
                                {title}
                            </h6>
                            <h6 className="mb-0">
                                ${price}
                            </h6>
                        </div>

                        <div className="ordered-product-details-3">
                            <h6 className="fw-bold">
                                Quantity: {quantity}
                            </h6>
                            <h6 className="mb-0">
                                ${totalPrice}
                            </h6>
                        </div>
                    </div>
                })}
            </section>
        </>
    )
}

export default OrderedProducts