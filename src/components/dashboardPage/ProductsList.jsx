// component
import ProductsListCard from "./ProductsListCard";

const ProductsList = ({ listOfProductsFromDB }) => {
    // console.log(listOfProductsFromDB);
    const { products, total } = listOfProductsFromDB

    return (
        <section>
            <h2 className="text-center mb-4">
                {total} products available
            </h2>

            <div className="row">
                {products.map(product => <ProductsListCard key={product.id} product={product} />)}
            </div>
        </section>
    )
}

export default ProductsList