import { useContext, createContext, useState } from "react";

const AppContext = createContext()

export const AppProvider = ({ children }) => {

    //search and filter options
    const [availableProducts, setAvailableProducts] = useState(0)
    const [updatedURL, setUpdatedURL] = useState('')
    const [productsList, setProductsList] = useState([])

    //pagination
    const [currentPageNumber, setCurrentPageNumber] = useState(1)

    return <AppContext.Provider value={{
        availableProducts, // ProductsList, Pagination
        setAvailableProducts, // ProductsList, SearchFeature, FilterFeature
        updatedURL, // Pagination
        setUpdatedURL, // FilterFeature
        productsList, // ProductsList, 
        setProductsList, // ProductsList, SearchFeature, FilterFeature, Pagination
        currentPageNumber, // Pagination
        setCurrentPageNumber // Pagination, SearchFeature, FilterFeature, SearchAndFilter
    }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => useContext(AppContext)