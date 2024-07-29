const FormInput = ({ label, name, type,  required }) => {
    return (
        <div className="mb-3">
            <label htmlFor={name} className="form-label">
                {label}
            </label>
            <input type={type} className="form-control" id={name} required={required}/>
        </div>
    )
}

export default FormInput