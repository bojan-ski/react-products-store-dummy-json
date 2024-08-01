import { Link, useLoaderData } from "react-router-dom"
// api func 
import fetchUserOrderHistoryFromFirebase from '../api/fetchUserOrderHistoryFromDB'
// components
import PageHeader from "../components/PageHeader"


// LOADER
export const loader = async () => {
    const userOrderHistory = await fetchUserOrderHistoryFromFirebase()
    console.log(userOrderHistory);
    return userOrderHistory
}

import React from 'react'

const OrderHistory = () => {
    // const userOrderHistory = useLoaderData()
    // console.log(userOrderHistory);


    return (
        <div className="order-history-page">
            <div className="container">

                <PageHeader page="Order History" />

                <section>

                </section>
            </div>
        </div>
    )
}

export default OrderHistory