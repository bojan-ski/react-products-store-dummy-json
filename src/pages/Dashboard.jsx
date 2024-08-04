import { useLoaderData } from "react-router-dom"
// utils func
import fetchDataFromDB from "../utils/fetchDataFromDB"
// api func
import fetchBookmarkedProductsToFirebase from "../api/fetchBookmarkedProductsToFirebase"
// components
import PageHeader from "../components/PageHeader"
import ProductsList from "../components/dashboardPage/ProductsList"
import NoProductsAvailable from "../components/dashboardPage/NoProductsAvailable"

// LOADER
export const loader = async () => {
  // dummyjson func
  const listOfProductsFromDB = await fetchDataFromDB('', '?limit=12&skip=0')
  const categories = await fetchDataFromDB('', '/category-list')

  // firebase func
  const bookmarkedProducts = await fetchBookmarkedProductsToFirebase()

  return { listOfProductsFromDB, categories, bookmarkedProducts }
}

const Dashboard = () => {
  const { listOfProductsFromDB } = useLoaderData()

  return (
    <div className="dashboard-page">
      <div className="container">
        <PageHeader page='Dashboard' />

        {listOfProductsFromDB && listOfProductsFromDB.products.length > 0 ? (
          <ProductsList />
        ) : (
          <NoProductsAvailable />
        )}
      </div>
    </div>
  )
}

export default Dashboard