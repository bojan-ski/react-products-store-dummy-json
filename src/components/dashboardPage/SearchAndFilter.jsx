import { useState } from "react"
import { useLoaderData } from "react-router-dom"
// utils func
import fetchDataFromDB from "../../utils/fetchDataFromDB"


const SearchAndFilter = ({ setAvailableProducts, setUpdatedURL, setProductsList }) => {
    const { listOfProductsFromDB, categories } = useLoaderData()

    const [disabledOption, setDisabledOption] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('') 

    const handleSearchProduct = async e => {
        e.preventDefault()

        if(!searchTerm) return alert('please enter search term')

        setDisabledOption(true)

        const searchResults = await fetchDataFromDB(`/search`, `?q=${searchTerm}`)

        setAvailableProducts(searchResults.total)
        setProductsList(searchResults.products)
    }


    const handleApplySelectedFilterOption = async (e) => {
        e.preventDefault()

        const selectedCategory = e.target.elements[0].value

        setDisabledOption(true)
        setUpdatedURL(`/category/${selectedCategory}`)
        setSelectedCategory(selectedCategory)

        const filteredProducts = await fetchDataFromDB(`/category/${selectedCategory}`, '?limit=12&skip=0')

        setAvailableProducts(filteredProducts.total)
        setProductsList(filteredProducts.products)
    }

    const handleResetFilterOption = () => {
        setDisabledOption(false)
        setSelectedCategory('beauty')
        setSearchTerm('')
        setAvailableProducts(listOfProductsFromDB.total)
        setProductsList(listOfProductsFromDB.products)
    }

    return (
        <section className="search-filter-option mb-5">
            <div className="row">

                {/* row item 1 */}
                <div className="search-option col-12 col-md-6 mb-3">
                    <form onSubmit={handleSearchProduct} className="text-center">
                        <input type="text" className="form-control mb-3" value={searchTerm} placeholder="Enter search term" onChange={e => setSearchTerm(e.target.value)} disabled={disabledOption}/>

                        {!disabledOption && (
                            <button type="submit" className="fw-bold btn btn-success w-100">
                                Search
                            </button>
                        )}
                    </form>
                    {disabledOption && (
                        <button type="button" className="fw-bold btn btn-warning w-100" onClick={handleResetFilterOption}>
                            Reset
                        </button>
                    )}
                </div>

                {/* row item 2 */}
                <div className="filter-option col-12 col-md-6 mb-3">
                    <form onSubmit={handleApplySelectedFilterOption}>
                        <select className="form-select mb-3" disabled={disabledOption}>
                            {categories.map(category => {
                                // console.log(category);
                                return <option key={category} value={category} className="capitalize">
                                    {category}
                                </option>
                            })}
                        </select>

                        {!disabledOption && (
                            <button type="submit" className="fw-bold btn btn-success w-100">
                                Apply
                            </button>
                        )}
                    </form>
                    {disabledOption && (
                        <button type="button" className="fw-bold btn btn-warning w-100" onClick={handleResetFilterOption}>
                            Reset
                        </button>
                    )}
                </div>
            </div>
        </section>
    )
}

export default SearchAndFilter