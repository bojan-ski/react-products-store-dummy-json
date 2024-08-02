// firebase api func
import { useLoaderData } from "react-router-dom";
import fetchSelectedOrderDetailsFromFirebase from "../api/fetchSelectedOrderDetailsFromFirebase";


// LOADER
export const loader = async ({ params }) => {
    const selectedOrderDetails = await fetchSelectedOrderDetailsFromFirebase(params.id)
    // console.log(selectedOrderDetails);    
    return selectedOrderDetails
}

const SelectedOrder = () => {
    const selectedOrderDetails = useLoaderData()
    console.log(selectedOrderDetails);

    return (
        <div>SelectedOrder</div>
    )
}

export default SelectedOrder