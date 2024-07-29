import { useContext, createContext, useState } from "react";

const AppContext = createContext()

export const AppProvider = ({ children }) => {
    // search and filter options
    const [availableProducts, setAvailableProducts] = useState(0)
    const [updatedURL, setUpdatedURL] = useState('')
    const [productsList, setProductsList] = useState([])

    // pagination
    const [currentPageNumber, setCurrentPageNumber] = useState(1)

    // compare products
    const [compareProductsList, setCompareProductsList] = useState([])

    // cart
    const [cartItems, setCartItems] = useState({
        cartItemsList: [],
        totalQuantity: 0,
        shipping: 50,
        orderCost: 0
    })

    const clearCart = () => {
        if (window.confirm('Are you sure you want to clear the Cart?')) {
            setCartItems({
                cartItemsList: [],
                totalQuantity: 0,
                shipping: 50,
                orderCost: 0
            });

            alert('Product removed form cart')
        }
    }

    return <AppContext.Provider value={{
        availableProducts, // ProductsList, Pagination
        setAvailableProducts, // ProductsList, SearchFeature, FilterFeature
        updatedURL, // Pagination
        setUpdatedURL, // FilterFeature
        productsList, // ProductsList, 
        setProductsList, // ProductsList, SearchFeature, FilterFeature, Pagination
        currentPageNumber, // Pagination
        setCurrentPageNumber, // Pagination, SearchFeature, FilterFeature, SearchAndFilter
        compareProductsList, // ProductsListCard, CompareProducts
        setCompareProductsList, // ProductsListCard
        cartItems, // Cart, CartItem, CartCostDetails, Checkout
        setCartItems, // ProductDataBox, setCartItems, 
        clearCart, // CartCostDetails, CheckoutForm
    }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => useContext(AppContext)