import { useContext, createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// firebase/firestore funcs
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth"
// toastify
import { toast } from "react-toastify";


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

    // user details
    const auth = getAuth()
    const navigate = useNavigate()

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
    const logOutUser = async () => {
        if (window.confirm('Are you sure you want to log out')) {
            try {
                await signOut(auth)

                setUserProfileDetails({
                    userID: '',
                    userName: ''
                })

                // success message
                toast.success('you have successfully logged out');

                // after the user has logged out, the user is redirected to the Dashboard page
                navigate('/')
            } catch (error) {
                //error message
                toast.error('There was an error, please try again')
                console.log(error);
            }
        }
    }

    // cart features
    const initCartState = {
        cartItemsList: [],
        totalQuantity: 0,
        shipping: 10,
        orderCost: 0,
        gradTotal: 0
    }

    const [cartItems, setCartItems] = useState(initCartState)

    const clearCart = () => setCartItems(initCartState);

    const handleClearCart = () => {
        if (window.confirm('Are you sure you want to clear the Cart?')) {
            clearCart();

            toast.success('Cart has been emptied.')
        }
    }

    return <AppContext.Provider value={{
        availableProducts, // ProductsList, Pagination
        setAvailableProducts, // ProductsList, SearchFeature, FilterFeature
        updatedURL, // Pagination
        setUpdatedURL, // FilterFeature
        productsList, // ProductsList, 
        setProductsList, // ProductsList, SearchFeature, FilterFeature, Pagination
        currentPageNumber, // Pagination, CustomPagination
        setCurrentPageNumber, // Pagination, CustomPagination, SearchFeature, FilterFeature, SearchAndFilter, ProductsList
        compareProductsList, // ProductsListCard, CompareProducts
        setCompareProductsList, // ProductsListCard
        userProfileDetails, // Profile, Onboarding, PrivateRoute, ProductsListCard, CartCostDetails, CheckoutForm, SelectedOrder
        logOutUser, // Profile, Onboarding
        navigate, // ForgotPassword
        cartItems, // ProductDataBox, Cart, CartItem, CartCostDetails, Checkout
        setCartItems, // ProductDataBox, setCartItems, 
        clearCart, // CheckoutForm
        handleClearCart, // CheckoutForm, CartCostDetails
    }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => useContext(AppContext)