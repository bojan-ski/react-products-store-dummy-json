import FormInput from "../FormInput"

const ShippingDetails = () => {
    return (
        <div>
            <h5 className="text-center">
                Shipping Details

            </h5>
            <h6 className="text-center">
                <span>THIS IS JUST FOR DEVELOPMENT</span>
                <br />
                <span>PLEASE DO NOT PROVIDED REAL ADDRESS DETAILS</span>
            </h6>

            <FormInput label='Street address' name='streetAddress' type='text' required={true} />
            <FormInput label='City' name='city' type='text' required={true} />
            <FormInput label='ZIP' name='zip' type='number' required={true} />
            <FormInput label='State' name='state' type='text' required={true} />
        </div>
    )
}

export default ShippingDetails