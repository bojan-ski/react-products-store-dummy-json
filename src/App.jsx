import { RouterProvider, createBrowserRouter } from "react-router-dom"

// PAGES
import AppLayout from "./pages/AppLayout"
import Dashboard from "./pages/Dashboard"
import SignUp from "./pages/SignUp"
import Login from "./pages/Login"
import About from "./pages/About"
import ContactUs from "./pages/ContactUs"
import ErrorPage from "./pages/ErrorPage"


const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Dashboard />,
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