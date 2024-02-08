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
      <textarea
        id={`${name}-input`}
        className="textarea textarea-bordered w-full"
        placeholder={placeholder}
        {...register(name, options)}
      />
      <label htmlFor={`${name}-input`}>{label}</label>

      
    </fieldset>
  );
};

export default TextArea;
