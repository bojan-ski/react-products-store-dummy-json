import { useState } from "react";
import { useLoaderData } from "react-router-dom";
// component
import ProductsListCard from "./ProductsListCard";
import Pagination from "../Pagination";
import SearchAndFilter from "./SearchAndFilter";


const ProductsList = () => {
    const { listOfProductsFromDB } = useLoaderData()
    const { products, total } = listOfProductsFromDB

    const [availableProducts, setAvailableProducts] = useState(total)
    const [updatedURL, setUpdatedURL] = useState('')
    const [productsList, setProductsList] = useState(products)

    return (
        <>
            <SearchAndFilter setAvailableProducts={setAvailableProducts} setUpdatedURL={setUpdatedURL} setProductsList={setProductsList} />

            <section className="products-list mb-3">
                <h2 className="text-center mb-4">
                    {total} products available
                </h2>

                <div className="row">
                    {productsList.map(product => <ProductsListCard key={product.id} product={product} />)}
                </div>
            </section>

            {availableProducts > 12 && <Pagination availableProducts={availableProducts} updatedURL={updatedURL} setProductsList={setProductsList} />}
        </>
    )
}

export default ProductsList