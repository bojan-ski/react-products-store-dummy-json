import { useState } from "react"
import { useLoaderData } from "react-router-dom"
// utils func
import fetchProductsCategories from "../../utils/fetchSelectedCategoryProducts"


const SearchAndFilter = ({setProductsList}) => {
    const { categories } = useLoaderData()
    // console.log(categories);

    const [disabledOption, setDisabledOption] = useState(false)
    const [selectedCategoryURL, setSelectedCategoryURL] = useState('')
    const [selectedCategoryProducts, setSelectedCategoryProducts] = useState({})

    const getData = async (url) => {
        const filteredProducts = await fetchProductsCategories(url)
        //    console.log(filteredProducts); 
        setSelectedCategoryProducts(filteredProducts)

        // OVOVOVOVVOOVOV
        // setProductsList(filteredProducts.products)
    }

    const handleSubmit = e => {
        e.preventDefault()
        // console.log(e.target.elements);
        // console.log(e.target.elements[0].value);
        getData(e.target.elements[0].value)
        setSelectedCategoryURL(e.target.elements[0].value)
    }

    const handleReset = () => {
        setDisabledOption(false)
        setSelectedCategoryURL('')
    }

    // console.log(selectedCategoryURL);
    console.log(selectedCategoryProducts);

    return (
        <section className="search-filter-option mb-3">
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <select className="form-select" id="">
                        {categories.map(category => {
                            // console.log(category);
                            return <option key={category.slug} value={category.url}>
                                {category.name}
                            </option>
                        })}
                    </select>

                    {!disabledOption ? (
                        <button type="submit" className="fw-bold btn btn-danger">
                            Apply
                        </button>
                    ) : (
                        <button type="button" className="fw-bold btn btn-warning" onClick={handleReset}>
                            Reset
                        </button>
                    )}
                </div>
            </form>


        </section>
    )
}

export default SearchAndFilter