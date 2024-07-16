// components
import FormInput from "../components/FormInput"
import loginUser from "../utils/loginUser";

const Login = () => {
    const handleLoginUserSubmit = e => {
        e.preventDefault()

        const enteredEmail = e.target.elements[0].value.trim()
        const enteredPassword = e.target.elements[1].value

        loginUser(enteredEmail, enteredPassword)

        e.target.elements[0].value = ''
        e.target.elements[1].value = ''
    }

    return (
        <div className='login-page'>
            <div className="container">
                <form onSubmit={handleLoginUserSubmit}>
                    <h3 className="text-center mb-4">
                        Login
                    </h3>

                    {/* login email */}
                    <FormInput label='Email address' name="loginEmail" type='email' required={true}/>

                    {/* login password */}
                    <FormInput label='Password' name="loginPassword" type='password' required={true}/>

                    {/* login submit btn */}
                    <button type="submit" className="btn btn-primary">
                        Login
                    </button>
                </form>
            </div>

        </div>
    )
}

export default Login