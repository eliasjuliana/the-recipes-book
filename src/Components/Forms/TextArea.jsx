const TextArea = (props) => {
  const {
    label,
    placeholder,
    type = "text",
    name,
    options,
    register,
    className,
  } = props;

  return (
    <fieldset className={` ${className}`}>
            <div className="label">
        <span className="label-text font-semibold text-xl">{label}</span>
      </div>
      <textarea
        type={type} 
        id={`${name}-input`}
        className="textarea textarea-bordered textarea-error w-full"
        placeholder={placeholder}
        {...register(name, options)}
      />
      {/* <label htmlFor={`${name}-input`}>{label}</label> */}

      
    </fieldset>
  );
};

export default TextArea;
