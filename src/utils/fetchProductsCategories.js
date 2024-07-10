import axios from "axios"

const fetchProductsCategories = async () => {
    try {
        const response = await axios.get(`https://dummyjson.com/products/categories`)
        const data = await response.data

        return data
    } catch (error) {
        console.log(error);
    }
}

export default fetchProductsCategories