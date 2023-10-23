const TextArea = (props) => {
    const {label, placeholder, type='text', name, options, register, className} = props;

    return (
        <fieldset className={`form-floating ${className}`}>
            <textarea 
            id={`${name}-input`} 
            className="form-control" 
            placeholder={placeholder}
            {...register(name, options)}/>
            <label htmlFor={`${name}-input`}>{label}</label>
        </fieldset>
    )
}

export default TextArea