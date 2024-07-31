import FormInput from "../FormInput"

const CreditCardDetails = () => {
    return (
        <div>
            <h5 className="text-center">
                Card Details

            </h5>
            <h6 className="text-center">
                <span>THIS IS JUST FOR DEVELOPMENT</span>
                <br />
                <span>PLEASE DO NOT PROVIDED REAL CREDIT CARD DETAILS</span>
            </h6>

            <FormInput label='Name on card' name='nameOnCard' type='text' required={true} />
            <FormInput label='Card number' name='cardNumber' type='number' required={true} />
            <FormInput label='Secure code' name='secureCode' type='number' required={true} />
            <FormInput label='Card expires' name='cardExpires' type='number' required={true} />
        </div>
    )
}

export default CreditCardDetails