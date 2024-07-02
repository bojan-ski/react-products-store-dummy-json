import axios from "axios"

const fetchSelectedProductDetailsFromDB = async (id) => {
    try {
        const response = await axios.get(`https://dummyjson.com/products/${id}`)
        const data = await response.data

        return data        
    } catch (error) {
        console.log(error);
    }
}

export default fetchSelectedProductDetailsFromDB