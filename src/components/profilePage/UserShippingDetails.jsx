import { useLoaderData } from "react-router-dom"
// context
import { useGlobalContext } from "../../context"
// api func
import saveUserShippingDetailsToFirebase from "../../api/saveUserShippingDetailsToFirebase"
// components
import FormInput from "../FormInput"

const UserShippingDetails = () => {
  const userShippingDetails = useLoaderData()
  console.log(userShippingDetails);  
  const { userProfileDetails } = useGlobalContext()

  const handleSetUserShippingDetails = async e => {
    e.preventDefault()

    console.log(e.target.elements);

    const formData = {
      streetAddress: e.target[0].value.trim(),
      city: e.target[1].value.trim(),
      zip: e.target[2].value.trim(),
      state: e.target[3].value.trim()
    }

    // console.log(formData);  

    await saveUserShippingDetailsToFirebase(userProfileDetails.userID, formData)
  }

  const handleClearForm = e => {
    e.preventDefault()


  }

  return (
    <section className="my-5">
      <h2 className="text-center mb-4">
        UserShippingDetails
      </h2>

      <h6 className="text-center mb-4">
        <span>THIS IS JUST FOR DEVELOPMENT</span>
        <br />
        <span>PLEASE DO NOT PROVIDED REAL ADDRESS DETAILS</span>
      </h6>

      <form onSubmit={handleSetUserShippingDetails}>
        <FormInput label='Street address' name='streetAddress' type='text' required={true} />
        <FormInput label='City' name='city' type='text' required={true} />
        <FormInput label='ZIP' name='zip' type='number' required={true} />
        <FormInput label='State' name='state' type='text' required={true} />

        <div className="user-shipping-details-btn-container d-flex justify-content-between">
          <button type="submit" className="btn btn-success">
            Save Details
          </button>

          <button className='btn btn-warning px-3 py-2' onClick={handleClearForm}>
            Clear Form
          </button>
        </div>
      </form>
    </section>
  )
}

export default UserShippingDetails