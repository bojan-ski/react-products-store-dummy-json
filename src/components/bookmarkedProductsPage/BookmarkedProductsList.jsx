import { useLoaderData } from "react-router-dom"
// components
import GridViewListCard from "../GridViewListCard"


const BookmarkedProductsList = () => {
    const { bookmarkedProducts } = useLoaderData()

    return (
        <section>
            {bookmarkedProducts && bookmarkedProducts.length > 0 ? (
                <div className="row">
                    {bookmarkedProducts.map(bookmarkedProduct => <GridViewListCard key={bookmarkedProduct.productData.id} product={bookmarkedProduct.productData} />
                    )}
                </div>
            ) : (
                <h1 className="text-center fw-bold">
                    You have no Bookmarked Products
                </h1>
            )}
        </section>
    )
}

export default BookmarkedProductsList