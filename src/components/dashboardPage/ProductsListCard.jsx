import { Link } from "react-router-dom";

const ProductsListCard = ({ product }) => {
    // console.log(product);
    const { id, brand, category, price, rating, thumbnail, title } = product

    return (
        <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card-details rounded rounded-4 p-3">
                <div className="card-details-header text-center mb-2">
                    <img src={thumbnail} alt={title} className="img-fluid" />
                </div>

                <div className="card-details-body mb-3 border-bottom">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                        <p className="mb-0">
                            {brand}
                        </p>
                        <p className="mb-0">
                            {category}
                        </p>
                    </div>
                    <h5 className="fw-bold">
                        {title}
                    </h5>
                    <h5>
                        ${price}
                    </h5>
                </div>

                <div className="card-details-footer d-flex justify-content-between align-items-center">
                    <Link to={`${id}`} className="btn btn-success fs-5">
                        See details
                    </Link>
                    <h5 className="mb-0">
                        <span className="me-1">⭐</span>
                        {rating}
                    </h5>
                </div>
            </div>
        </div>
    )
}

export default ProductsListCard