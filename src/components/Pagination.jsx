// utils func
import fetchProductsListFromDB from "../utils/fetchProductsListFromDB"

let productsListSkipNumber = 0
let currentPageNumber = 1

const Pagination = ({ total, setProductsList }) => {
    const updatedProductsList = async (productsListSkipNumber) => {
        const { products } = await fetchProductsListFromDB(productsListSkipNumber)
        // console.log(products);
        setProductsList(products)
        return products
    }

    const paginationOption = (term) => {
        if (term === 'plus') {
            productsListSkipNumber += 12
            currentPageNumber += 1
        }

        if (term === 'minus') {
            productsListSkipNumber -= 12
            currentPageNumber -= 1
        }

        // console.log(productsListSkipNumber);
        // console.log(currentPageNumber);

        if (productsListSkipNumber <= 0) {
            productsListSkipNumber = 0
            currentPageNumber = 1
            // call func
            updatedProductsList(productsListSkipNumber)
        } else if (productsListSkipNumber > total) {
            productsListSkipNumber = 0
            currentPageNumber = 1
            // call func
            updatedProductsList(productsListSkipNumber)
        } else {
            updatedProductsList(productsListSkipNumber)
        }
    }

    return (
        // <div className="pagination mb-4 d-flex align-items-center justify-content-between">
        <div className="pagination mb-4 d-flex justify-content-center">
            <div className="number-of-pages">
                <button className="btn-info btn px-3 me-2" onClick={() => {
                    productsListSkipNumber = 0
                    currentPageNumber = 1
                    updatedProductsList(productsListSkipNumber)
                }}>
                    1
                </button>
                <button className="btn-primary btn px-3 me-2" onClick={() => paginationOption('minus')}>
                    Prev
                </button>
                <button className="btn border px-3 ">
                    {currentPageNumber}
                </button>
                <button className="btn-primary btn px-3 ms-2" onClick={() => paginationOption('plus')}>
                    Next
                </button>
                <button className="btn-info btn px-3 ms-2" onClick={() => {
                    productsListSkipNumber = Math.floor(total / 12) * 12
                    currentPageNumber = Math.ceil(total / 12)
                    updatedProductsList(productsListSkipNumber)
                }}>
                    {Math.ceil(total / 12)}
                </button>
            </div>

            {/* <div className="number-of-pages">
                <p className="mb-0 fw-bold text-muted">
                    Page number:
                    <span className="mx-1 text-dark">
                        {currentPageNumber}
                    </span>
                    /
                    <span className="ms-1 text-dark">
                        {Math.ceil(total / 12)}
                    </span>
                </p>
            </div>

            <div className="pagination-btn-container text-end">
                <button className="btn-primary btn px-3 me-3 btn-prev" onClick={() => paginationOption('minus')}>
                    Prev
                </button>
                <button className="btn-primary btn px-3 btn-next" onClick={() => paginationOption('plus')}>
                    Next
                </button>
            </div> */}
        </div>
    )
}

export default Pagination