import { useState } from "react"
import { useLoaderData } from "react-router-dom"
// utils func
import fetchDataFromDB from "../../utils/fetchDataFromDB"


const SearchAndFilter = ({ setAvailableProducts, setUpdatedURL, setProductsList }) => {
    const { categories } = useLoaderData()
    // console.log(categories);

    const [disabledOption, setDisabledOption] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState('')

    const getData = async (category) => {
        setUpdatedURL(`/category/${category}`)

        const filteredProducts = await fetchDataFromDB(`/category/${category}`, '?limit=12&skip=0')
        console.log(filteredProducts);
        // setSelectedCategoryProducts(filteredProducts)

        setAvailableProducts(filteredProducts.total)
        setProductsList(filteredProducts.products)
    }

    const handleSubmit = e => {
        e.preventDefault()
        // console.log(e.target.elements);
        // console.log(e.target.elements[0].value);
        getData(e.target.elements[0].value)
        setSelectedCategory(e.target.elements[0].value)
    }

    const handleReset = () => {
        setDisabledOption(false)
        setSelectedCategory('')
    }

    return (
        <section className="search-filter-option mb-3">
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <select className="form-select" id="">
                        {categories.map(category => {
                            // console.log(category);
                            return <option key={category} value={category} className="capitalize">
                                {category}
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