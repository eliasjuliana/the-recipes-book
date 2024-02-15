const Input = (props) => {
  const {
    label,
    placeholder,
    type = "text",
    name,
    options,
    register,
    className,
    error = false,
  } = props;

  return (
    <fieldset className={`${className}`}>
      <div className="label">
        <span className="label-text font-semibold text-xl">{label}</span>
      </div>
      <input
        type={type}
        id={`${name}-input`}
        className={`input input-bordered input-error w-full  ${
          error ? "is-invalid" : ""
        }`}
        placeholder={placeholder}
        {...register(name, options)}
      />
      {/* <label htmlFor={`${name}-input`}>{label}</label> */}
    </fieldset>
  );
};

export default Input;
