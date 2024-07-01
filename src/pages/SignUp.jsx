import FormInput from "../components/FormInput"

const SignUp = () => {
    const handleSignUpUserSubmit = e => {
        e.preventDefault()

        console.log(e.target.elements[0].value);
        console.log(e.target.elements[1].value);
        console.log(e.target.elements[2].value);

        // e.target.elements[0].value = ''
        // e.target.elements[1].value = ''
        // e.target.elements[2].value = ''
    }

    return (
        <div className='login-page'>
            <div className="container">
                <form onSubmit={handleSignUpUserSubmit}>
                    <h3 className="text-center mb-4">
                        Sign Up
                    </h3>

                    {/* login email */}
                    <FormInput label='Username' name="signUpUsername" type='text' />

                    {/* login email */}
                    <FormInput label='Email address' name="signUpEmail" type='email' />

                    {/* login password */}
                    <FormInput label='Password' name="signUpPassword" type='password' />

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