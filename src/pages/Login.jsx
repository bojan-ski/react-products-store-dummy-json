import FormInput from "../components/FormInput"


const Login = () => {
    const handleLoginUserSubmit = e => {
        e.preventDefault()

        console.log(e.target.elements[0].value);
        console.log(e.target.elements[1].value);

        // e.target.elements[0].value = ''
        // e.target.elements[1].value = ''
    }

    return (
        <div className='login-page'>
            <div className="container">
                <form onSubmit={handleLoginUserSubmit}>
                    <h3 className="text-center mb-4">
                        Login
                    </h3>

                    {/* login email */}
                    <FormInput label='Email address' name="loginEmail" type='email' />

                    {/* login password */}
                    <FormInput label='Password' name="loginPassword" type='password' />

                    {/* login submit btn */}
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>

        </div>
    )
}

export default Login