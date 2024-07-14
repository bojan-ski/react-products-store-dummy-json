import axios from "axios"

const fetchDataFromDB = async (updatedURL, path) => {
    const url = 'https://dummyjson.com/products'
    // console.log(updatedURL);
    // console.log(path);

    try {
        let response

        if(updatedURL == ''){
            response = await axios.get(`${url}${path}`)
            // console.log(`${url}${path}`);
        }else{
            response = await axios.get(`${url}${updatedURL}${path}`)
            // console.log(`${url}${updatedURL}${path}`);
        }

        const data = await response.data

        return data        
    } catch (error) {
        console.log(error);
    }
}

export default fetchDataFromDB