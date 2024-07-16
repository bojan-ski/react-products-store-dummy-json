// components
import FormInput from "../components/FormInput"
//utils func
import createAccount from "../utils/createAccount"

const SignUp = () => {
    const handleSignUpUserSubmit = e => {
        e.preventDefault()

        const enteredUsername = e.target.elements[0].value.trim()
        const enteredEmail = e.target.elements[1].value.trim()
        const enteredPassword = e.target.elements[2].value

        createAccount(enteredUsername, enteredEmail, enteredPassword)

        e.target.elements[0].value = ''
        e.target.elements[1].value = ''
        e.target.elements[2].value = ''
    }

    return (
        <div className='sing-up-page'>
            <div className="container">
                <form onSubmit={handleSignUpUserSubmit}>
                    <h3 className="text-center mb-4">
                        Sign Up
                    </h3>

                    {/* login email */}
                    <FormInput label='Username' name="signUpUsername" type='text' required={true} />

                    {/* login email */}
                    <FormInput label='Email address' name="signUpEmail" type='email' required={true} />

                    {/* login password */}
                    <FormInput label='Password' name="signUpPassword" type='password' required={true} />

                    {/* login submit btn */}
                    <button type="submit" className="btn btn-primary">
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    )
}

export default SignUp