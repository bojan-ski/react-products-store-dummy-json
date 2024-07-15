import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
// component
import ProductsListCard from "./ProductsListCard";
import Pagination from "../Pagination";
import SearchAndFilter from "./SearchAndFilter";
import { useGlobalContext } from "../../context";


const ProductsList = () => {
    const { listOfProductsFromDB } = useLoaderData()
    const { products, total } = listOfProductsFromDB

    const { availableProducts, setAvailableProducts, productsList, setProductsList } = useGlobalContext()

    useEffect(() => {
        setAvailableProducts(total)
        setProductsList(products)
    }, [])

    return (
        <>
            <SearchAndFilter />

            <section className="products-list mb-3">
                <h2 className="text-center mb-4">
                    {availableProducts} products available
                </h2>

                <div className="row">
                    {!productsList || productsList.length == 0 ? (
                        <h1>No products available</h1>
                    ) : (
                        productsList?.map(product => <ProductsListCard key={product.id} product={product} />)
                    )}
                </div>
            </section>

            {availableProducts > 12 && <Pagination />}
        </>
    )
}

export default ProductsList