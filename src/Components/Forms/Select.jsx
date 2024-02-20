const Select = (props) => {
  const {
    label,
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
      <select
        className="select select-bordered select-error w-full "
        id={`${name}-input`}
        {...register(name, options)}
      >
        <option disabled selected>
          Category
        </option>
        <option>Breakfast</option>
        <option>Lunch - Dinner</option>
        <option>Pastas</option>
        <option>Vegetarian</option>
        <option>Appetizers</option>
        <option>Desserts</option>
        <option>Smoothies - Juices</option>

      </select>
    </fieldset>
  );
};

export default Select;
