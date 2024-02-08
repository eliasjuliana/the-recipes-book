const Input = (props) => {

    const {label, placeholder, type='text', name, options, register, className, error=false} = props;

    return (
        <fieldset className={`${className}`}>
            <input 
            type={type} 
            id={`${name}-input`} 
            className={`input input-bordered w-full  ${error? 'is-invalid' : ''}`} 
            placeholder={placeholder}
            {...register(name, options)}/>
            <label htmlFor={`${name}-input`}>{label}</label>
        </fieldset>
    )
}

export default Input