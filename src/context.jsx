import { useContext, createContext, useState } from "react";

const AppContext = createContext()

export const AppProvider = ({ children }) => {
    const [availableProducts, setAvailableProducts] = useState(0)
    const [updatedURL, setUpdatedURL] = useState('')
    const [productsList, setProductsList] = useState([])

    return <AppContext.Provider value={{
        availableProducts, // ProductsList
        setAvailableProducts, // ProductsList, SearchFeature
        updatedURL, // ProductsList
        setUpdatedURL, // SearchAndFilter
        productsList, // ProductsList, 
        setProductsList // ProductsList, SearchFeature
    }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => useContext(AppContext)