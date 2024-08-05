import { useLoaderData } from "react-router-dom"
// api func 
import fetchUserOrderHistoryFromFirebase from '../api/fetchUserOrderHistoryFromFirebase'
// components
import BackButtons from "../components/BackButtons"
import PageHeader from "../components/PageHeader"
import OrderHistoryList from "../components/orderHistoryPage/OrderHistoryList"


// LOADER
export const loader = async () => {
    const userOrderHistory = await fetchUserOrderHistoryFromFirebase()
    // console.log(userOrderHistory);
    return userOrderHistory
}

const OrderHistory = () => {
    const userOrderHistory = useLoaderData()
    // console.log(userOrderHistory);

    return (
        <div className="order-history-page">
            <div className="container">

                <BackButtons backPath='/profile'/>

                <PageHeader page="Order History" />

                <section>
                    {userOrderHistory && userOrderHistory.length > 0 ? (
                        <OrderHistoryList userOrderHistory={userOrderHistory}/>
                    ) : (
                        <h1 className="text-center fw-bold">
                            You have no orders submitted
                        </h1>
                    )}
                </section>
            </div>
        </div>
    )
}

export default OrderHistory