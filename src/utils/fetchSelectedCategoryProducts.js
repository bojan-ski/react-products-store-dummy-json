import axios from "axios"

const fetchSelectedCategoryProducts = async (url) => {
    console.log(url);
    try {
        const response = await axios.get(`${url}`)
        const data = await response.data

        return data
    } catch (error) {
        console.log(error);
    }
}

export default fetchSelectedCategoryProducts