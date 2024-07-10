import { useState } from "react";
// component
import ProductsListCard from "./ProductsListCard";
import Pagination from "../Pagination";
import SearchAndFilter from "./SearchAndFilter";

const ProductsList = ({ listOfProductsFromDB }) => {
    // console.log(listOfProductsFromDB);
    const { products, total } = listOfProductsFromDB
    const [productsList, setProductsList] = useState(products)

    return (
        <>
            <SearchAndFilter/>

            <section className="products-list mb-3">
                <h2 className="text-center mb-4">
                    {total} products available
                </h2>

                <div className="row">
                    {productsList.map(product => <ProductsListCard key={product.id} product={product} />)}
                </div>
            </section>       

            <Pagination total={total} setProductsList={setProductsList}/>
        </>
    )
}

export default ProductsList