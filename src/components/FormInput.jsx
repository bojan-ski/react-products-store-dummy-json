const FormInput = ({ label, name, type }) => {
    return (
        <div className="mb-3">
            <label htmlFor={name} className="form-label">
                {label}
            </label>
            <input type={type} className="form-control" id={name} />
        </div>
    )
}

export default FormInput