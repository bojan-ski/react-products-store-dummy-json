import { useContext, createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// firebase/firestore funcs
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth"


const AppContext = createContext()

export const AppProvider = ({ children }) => {
    // search and filter options
    const [availableProducts, setAvailableProducts] = useState(0)
    const [updatedURL, setUpdatedURL] = useState('')
    const [productsList, setProductsList] = useState([])

    // pagination
    const [currentPageNumber, setCurrentPageNumber] = useState(1)

    // custom pagination

    // KAD UBACIS PAGINACIJU U ORDER HISTORY PROVERI DA LI TREBA:
    // const [currentPageNumberCustom, setCurrentPageNumberCustom] = useState(1)
    
    const [displayedDataFromDB, setDisplayedDataFromDB] = useState({
        totalDataList: null,
        displayedDataList: null
    })

    // compare products
    const [compareProductsList, setCompareProductsList] = useState([])

    // user details
    const auth = getAuth()

    const [userProfileDetails, setUserProfileDetails] = useState({
        userID: '',
        userName: ''
    })

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                auth.currentUser ? (
                    setUserProfileDetails({
                        userID: user.uid,
                        userName: user.displayName
                    })
                ) : (
                    setUserProfileDetails({
                        userID: '',
                        userName: ''
                    })
                )
            }
        })
    }, [])

    // log out user
    const navigate = useNavigate()

    const logOutUser = async () => {
        if (window.confirm('Are you sure you want to log out')) {
            try {
                await signOut(auth)

                setUserProfileDetails({
                    userID: '',
                    userName: ''
                })

                // success message
                console.log('you have successfully logged out');

                // after the user has logged out, the user is redirected to the Dashboard page
                navigate('/')
            } catch (error) {
                //error message
                console.log(error);
            }
        }
    }

    // cart features
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
        setCurrentPageNumber, // Pagination, SearchFeature, FilterFeature, SearchAndFilter, ProductsList
        displayedDataFromDB, //BookmarkedProductsList
        setDisplayedDataFromDB, // BookmarkedProductsList
        compareProductsList, // ProductsListCard, CompareProducts
        setCompareProductsList, // ProductsListCard
        userProfileDetails, // Profile, Onboarding, PrivateRoute, ProductsListCard, CartCostDetails, CheckoutForm, SelectedOrder
        logOutUser, // Profile, Onboarding
        cartItems, // Cart, CartItem, CartCostDetails, Checkout
        setCartItems, // ProductDataBox, setCartItems, 
        clearCart, // CartCostDetails, CheckoutForm
    }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => useContext(AppContext)