import { useLoaderData } from "react-router-dom"
// context
import { useGlobalContext } from "../../context"
// api func
import fetchDataFromDummyJSON from "../../api/fetchDataFromDummyJSON"

const FilterFeature = ({ disabledOption, setDisabledOption, setSelectedCategory, handleResetFilterOption }) => {
    const { categories } = useLoaderData()
    const { setAvailableProducts, setUpdatedURL, setProductsList, setCurrentPageNumber} = useGlobalContext()

    const handleApplySelectedFilterOption = async (e) => {
        e.preventDefault()

        const selectedCategory = e.target.elements[0].value

        setDisabledOption(true)
        setUpdatedURL(`/category/${selectedCategory}`)
        setSelectedCategory(selectedCategory)

        const filteredProducts = await fetchDataFromDummyJSON(`/category/${selectedCategory}`, '?limit=12&skip=0')

        setAvailableProducts(filteredProducts.total)
        setProductsList(filteredProducts.products)
        setCurrentPageNumber(1)
    }

    return (
        <>
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
        </>
    )
}

export default FilterFeature