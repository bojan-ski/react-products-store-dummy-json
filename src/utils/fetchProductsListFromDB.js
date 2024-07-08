import axios from "axios"

const fetchProductsListFromDB = async (skipNumber = 0) => {
    try {
        const response = await axios.get(`https://dummyjson.com/products?limit=12&skip=${skipNumber}`)
        const data = await response.data

        return data
    } catch (error) {
        console.log(error);
    }
}

export default fetchProductsListFromDB