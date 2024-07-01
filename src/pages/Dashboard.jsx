import { useLoaderData } from "react-router-dom"
// utils func
import fetchProductsListFromDB from "../utils/fetchProductsListFromDB"
// components
import PageHeader from "../components/PageHeader"
import ProductsList from "../components/dashboardPage/ProductsList"
import NoProductsAvailable from "../components/dashboardPage/NoProductsAvailable"

// LOADER
export const loader = async () => {
  const listOfProductsFromDB = await fetchProductsListFromDB()

  return listOfProductsFromDB
}

const Dashboard = () => {
  const listOfProductsFromDB = useLoaderData()

  return (
    <div className="dashboard-page">
      <div className="container">
        <PageHeader page='Dashboard' />

        {listOfProductsFromDB && listOfProductsFromDB.products.length > 0 ? (
          <ProductsList listOfProductsFromDB={listOfProductsFromDB} />
        ) : (
          <NoProductsAvailable />
        )}
      </div>
    </div>
  )
}

export default Dashboard