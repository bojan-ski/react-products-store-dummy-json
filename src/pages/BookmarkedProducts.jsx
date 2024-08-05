import { useLoaderData, Link } from "react-router-dom"
// components
import BackButtons from "../components/BackButtons";
import PageHeader from "../components/PageHeader";


const BookmarkedProducts = () => {
  const { bookmarkedProducts } = useLoaderData()
  console.log(bookmarkedProducts);

  return (
    <div className="bookmarked-products-page">
      <div className="container">
        <BackButtons backPath='/profile' />

        <PageHeader page="Bookmarked Products" />

        <section>
          {bookmarkedProducts && bookmarkedProducts.length > 0 ? (
            <div className="row">
              {bookmarkedProducts.map(bookmarkedProduct => {
                const { id, brand, category, price, rating, thumbnail, title } = bookmarkedProduct.productData

                return (
                  <div key={id} className="col-12 col-md-6 col-lg-4 mb-4">
                    <div className="card-details rounded rounded-4 p-3">

                      {/* <div className="card-details-btn-container mb-3 pb-2 border-bottom d-flex align-items-center justify-content-between">
                        {isProductInCompareList ? (
                          <button className="btn btn-danger" onClick={() => handleRemoveProductFromCompareProductsList(id)}>
                            Remove
                          </button>
                        ) : (
                          <button className="btn btn-warning" onClick={handleAddProductToCompareProductsList}>
                            Compare
                          </button>
                        )}

                        {isBookmarked ? (
                          <button className="btn btn-info" onClick={() => handleRemoveBookmarkProduct(id)}>
                            remove
                          </button>
                        ) : (
                          <button className="btn btn-primary" onClick={handleSaveBookmarkProduct}>
                            save
                          </button>
                        )}
                      </div> */}

                      <div className="card-details-header text-center mb-2">
                        <img src={thumbnail} alt={title} className="img-fluid" />
                      </div>

                      <div className="card-details-body mb-3 border-bottom">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <p className="mb-0">
                            {category}
                          </p>
                          {brand && (
                            <p className="mb-0">
                              {brand}
                            </p>
                          )}
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
              })}
            </div>
          ) : (
            <h1 className="text-center fw-bold">
              You have no Bookmarked Products
            </h1>
          )}
        </section>
      </div>
    </div>
  )
}

export default BookmarkedProducts