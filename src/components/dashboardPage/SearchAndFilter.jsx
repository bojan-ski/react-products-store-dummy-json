import { useLoaderData } from "react-router-dom"


const SearchAndFilter = () => {
    const { categories } = useLoaderData()
    // console.log(categories);

    return (
        <section className="search-filter-option mb-3">
            <form>
                <select className="form-select" id="">
                    {categories.map(category => {
                        // console.log(category);
                        return <option key={category.slug} value={category.slug} >
                            {category.name}
                        </option>
                    })}
                </select>
            </form>


        </section>
    )
}

export default SearchAndFilter