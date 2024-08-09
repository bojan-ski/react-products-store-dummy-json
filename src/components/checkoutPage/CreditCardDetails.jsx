// components
import FormInput from "../FormInput"
import CheckoutSubheader from "./CheckoutSubheader"

const CreditCardDetails = ({ cardDetails, setCardDetails }) => {
    const onInputDataCardDetails = (e) => {
        setCardDetails(prevState => ({
            ...prevState,
            [e.target.id]: e.target.value
        }))
    }

    const { nameOnCard, cardNumber, secureCode, cardExpires } = cardDetails

    return (
        <div>
            {/* Page subheader - components */}
            <CheckoutSubheader textOne='Card Details' textTwo='CREDIT CARD' />

            {/* Form input - components */}
            <FormInput label='Name on card' name='nameOnCard' type='text' placeholder='Bruce Wayne' value={nameOnCard} required={true} onMutate={onInputDataCardDetails} />
            <FormInput label='Card number' name='cardNumber' type='number' placeholder='1111-1111-1111-1111' value={cardNumber} required={true} onMutate={onInputDataCardDetails} />
            <FormInput label='Secure code' name='secureCode' type='number' placeholder='123' value={secureCode} required={true} onMutate={onInputDataCardDetails} />
            <FormInput label='Card expires' name='cardExpires' type='number' placeholder='01-25' value={cardExpires} required={true} onMutate={onInputDataCardDetails} />
        </div>
    )
}

export default CreditCardDetails