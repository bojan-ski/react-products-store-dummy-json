import axios from "axios"

const fetchProductsListFromDB = async () => {
    try {
        const response = await axios.get('https://dummyjson.com/products?limit=12&skip=0')
        const data = await response.data

        return data        
    } catch (error) {
        console.log(error);
    }
}

export default fetchProductsListFromDB