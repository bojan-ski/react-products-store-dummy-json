import { redirect, useLoaderData } from "react-router-dom";
// firebase api func
import fetchSelectedOrderDetailsFromFirebase from "../api/fetchSelectedOrderDetailsFromFirebase";
// context
import { useGlobalContext } from "../context";
// components
import BackButtons from "../components/BackButtons";
import PageHeader from "../components/PageHeader";
import OrderedProducts from "../components/selectedOrderPage/OrderedProducts";
import OrderTotal from "../components/selectedOrderPage/OrderTotal";
import OrderCardDetails from "../components/selectedOrderPage/OrderCardDetails";
import OrderShippingDetails from "../components/selectedOrderPage/OrderShippingDetails";


// LOADER
export const loader = async ({ params }) => {
    const selectedOrderDetails = await fetchSelectedOrderDetailsFromFirebase(params.id)
  
    return selectedOrderDetails
}

const SelectedOrder = () => {
    const selectedOrderDetails = useLoaderData()
    const { userProfileDetails } = useGlobalContext()
 
    if (selectedOrderDetails.userID !== userProfileDetails.userID) {
        redirect('/')
    }

    const { cardDetails, orderDetails, shippingDetails } = selectedOrderDetails  

    return (
        <div className="container">

            <BackButtons backPath='/profile/order-history' />

            <PageHeader page="Selected Order" />

            <section className="selected-order-details">
                <div className="row">

                    {/* row item 1 */}
                    <div className="col-12 col-md-8 mb-3">
                        <OrderedProducts orderDetails={orderDetails}/>                        
                    </div>

                    {/* row item 2 */}
                    <div className="col-12 col-md-4 mb-3">
                        <OrderTotal selectedOrderDetails={selectedOrderDetails} orderDetails={orderDetails}/>
                    </div>

                    {/* row item 3 */}
                    <div className="col-12 col-md-6 mb-3">
                        <OrderCardDetails cardDetails={cardDetails}/>
                    </div>

                    {/* row item 4 */}
                    <div className="col-12 col-md-6 mb-3">
                        <OrderShippingDetails shippingDetails={shippingDetails}/>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SelectedOrder