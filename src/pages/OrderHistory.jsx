import { Link, useLoaderData } from "react-router-dom"
// api func 
import fetchUserOrderHistoryFromFirebase from '../api/fetchUserOrderHistoryFromDB'
// components
import PageHeader from "../components/PageHeader"
import BackButtons from "../components/BackButtons"


// LOADER
export const loader = async () => {
    const userOrderHistory = await fetchUserOrderHistoryFromFirebase()
    console.log(userOrderHistory);
    return userOrderHistory
}

const OrderHistory = () => {
    const userOrderHistory = useLoaderData()
    console.log(userOrderHistory);


    return (
        <div className="order-history-page">
            <div className="container">

                <BackButtons backPath='profile'/>

                <PageHeader page="Order History" />

                <section>

                </section>
            </div>
        </div>
    )
}

export default OrderHistory