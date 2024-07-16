import { RouterProvider, createBrowserRouter } from "react-router-dom"

// PAGES
import AppLayout from "./pages/AppLayout"
import Dashboard from "./pages/Dashboard"
import SelectedProduct from "./pages/SelectedProduct"
import SignUp from "./pages/SignUp"
import Login from "./pages/Login"
import Profile from "./pages/Profile"
import About from "./pages/About"
import ContactUs from "./pages/ContactUs"
import ErrorPage from "./pages/ErrorPage"

// LOADERS
import { loader as listOfProductsLoader } from "./pages/Dashboard"
import { loader as selectedProductLoader } from "./pages/SelectedProduct"


const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <ErrorPage />,
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
        path: 'about',
        element: <About />,
      },
      {
        path: 'profile',
        element: <Profile />,
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