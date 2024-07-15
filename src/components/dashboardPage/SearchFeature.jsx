// context
import { useGlobalContext } from "../../context"
// utils func
import fetchDataFromDB from "../../utils/fetchDataFromDB"

const SearchFeature = ({ searchTerm, setSearchTerm, disabledOption, setDisabledOption, handleResetFilterOption }) => {
    const { setAvailableProducts, setProductsList, setCurrentPageNumber } = useGlobalContext()

    const handleSearchProduct = async e => {
        e.preventDefault()

        if (!searchTerm) return alert('please enter search term')

        setDisabledOption(true)

        const searchResults = await fetchDataFromDB(`/search`, `?q=${searchTerm}`)

        setAvailableProducts(searchResults.total)
        setProductsList(searchResults.products)
        setCurrentPageNumber(``)
    }

    return (
        <>
            <form onSubmit={handleSearchProduct} className="text-center">
                <input type="text" className="form-control mb-3" value={searchTerm} placeholder="Enter search term" onChange={e => setSearchTerm(e.target.value)} disabled={disabledOption} />

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
        </>
    )
}

export default SearchFeature