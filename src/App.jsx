import { RouterProvider, createBrowserRouter } from "react-router-dom"

// PAGES
import AppLayout from "./pages/AppLayout"
import Dashboard from "./pages/Dashboard"
import SelectedProduct from "./pages/SelectedProduct"
import SignUp from "./pages/SignUp"
import Login from "./pages/Login"
import CompareProducts from "./pages/CompareProducts"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import Profile from "./pages/Profile"
import About from "./pages/About"
import ContactUs from "./pages/ContactUs"
import ErrorPage from "./pages/ErrorPage"

// PRIVATE ROUTE
import PrivateRoute from "./private/PrivateRoute"

// LOADERS
import { loader as listOfProductsLoader } from "./pages/Dashboard"
import { loader as selectedProductLoader } from "./pages/SelectedProduct"
import { loader as userOrderHistoryLoader } from "./pages/Profile"


const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    // errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Dashboard />,
        loader: listOfProductsLoader
      },
      {
        path: ':id',
        element: <SelectedProduct />,
        loader: selectedProductLoader
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'sign-up',
        element: <SignUp />,
      },
      {
        path: 'compare',
        element: <CompareProducts />,
      },
      {
        path: 'compare/:id',
        element: <SelectedProduct />,
        loader: selectedProductLoader
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'checkout',
        element: <PrivateRoute><Checkout /></PrivateRoute>,
      },
      // {
      //   element: <PrivateRoute />,
      //   children: [
      //     {
      //       path: 'checkout',
      //       element: <Checkout />,
      //     }
      //   ]
      // },
      {
        path: 'profile',
        element: <Profile />,
        loader: userOrderHistoryLoader
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <ContactUs />
      }
    ]
  }
])

const App = () => {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App