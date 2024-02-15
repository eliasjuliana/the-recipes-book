import { useRef, useState } from "react";
import Input from "../../Forms/Input";

const IngredientsForm = (props) => {
  const {
    placeholder,
    type = "text",
    name,
    options,
    register,
    className,
  } = props;

  const ingredientRef = useRef();

  //________________STATES_______________
  const [ingredients, setIngredients] = useState([]);

  // const handleAddIngredient = () => {
  //   const ingredient = ingredientRef.current.value;
  //   setIngredients([...ingredients, ingredient]);
  //   console.log(ingredients);
  // };

  const handleAddIngredient = () => {
    const ingredient = ingredientRef.current.value;
    setIngredients([...ingredients, ingredient]);
    ingredientRef.current.value = '';
    console.log(ingredients) // Limpiar el input después de agregar un ingrediente
  };

  return (
    <div className="flex flex-col">
      <h3 className="font-semibold text-xl">Ingredients</h3>

      <div>
      <Input
        register={register}
        options={{
          required: true,
          minLength: 4,
        }}
        className="my-2"
        name="ingredient"
        type="text"
        placeholder="Ingredient"
        label="Ingredient"
        error={!!errors["ingredient"]}
      />
            <input
        type={type}
        id={`${name}-input`}
        placeholder={placeholder}
        ref={ingredientRef}
        className={`input input-error ${className}`}
      />
      </div>

      {/* Botón para agregar más ingredientes */}
      <button className="btn btn-ghost" onClick={handleAddIngredient}>
        <span className="material-symbols-outlined">add</span> Add more
        ingredients
      </button>
    </div>
  );
};

export default IngredientsForm;

// import { useRef, useState } from "react";

// const IngredientsForm = (props) => {
//   const {
//     placeholder,
//     type = "text",
//     name,
//     options,
//     register,
//     className,
//   } = props;

//   const ingredientRef = useRef();

  



//   //________________STATES_______________
//   const [ingredients, setIngredients] = useState([]);

//   // const handleAddIngredient = () => {
//   //   const ingredient = ingredientRef.current.value;
//   //   setIngredients([...ingredients, ingredient]);
//   //   console.log(ingredients);
//   // };

//   const handleAddIngredient = () => {
//     const ingredient = ingredientRef.current.value;
//     setIngredients([...ingredients, ingredient]);
//     ingredientRef.current.value = '';
//     console.log(ingredients) // Limpiar el input después de agregar un ingrediente
//   };

//   return (
//     <div className="flex flex-col">
//       <h3 className="font-semibold text-xl">Ingredients</h3>

//       {/* {ingredients.length === 0 ? (
//         <input
//           type={type}
//           id={`${name}-input`}
//           placeholder={placeholder}
//           ref={ingredientRef}
//           {...register(name, options)}
//           className={`input input-error ${className}`}
//         />
//       ) : (
//         ingredients.map((ingredient, index) => (
//           <input
//             key={index}
//             type={type}
//             id={`${name}-input`}
//             placeholder={placeholder}
//             {...register(name, options)}
//             className={`input input-error ${className}`}
//             value={ingredient}
//             // Aquí deberías tener una forma de editar el valor del ingrediente
//             // por ejemplo: onChange={(e) => handleIngredientChange(index, e.target.value)}
//           />
//         ))
//       )} */}

// {ingredients.map((ingredient, index) => (
//         <input
//           key={index}
//           type={type}
//           id={`${name}-input-${index}`}
//           placeholder={placeholder}
//           {...register(`${name}[${index}]`, options)}
//           className={`input input-error ${className}`}
//           value={ingredient}
//           // Aquí deberías tener una forma de editar el valor del ingrediente
//           // por ejemplo: onChange={(e) => handleIngredientChange(index, e.target.value)}
//         />
//       ))}

//       {/* Input para agregar un nuevo ingrediente */}
//       <input
//         type={type}
//         id={`${name}-input`}
//         placeholder={placeholder}
//         ref={ingredientRef}
//         className={`input input-error ${className}`}
//       />


//       {/* Botón para agregar más ingredientes */}
//       <button className="btn btn-ghost" onClick={handleAddIngredient}>
//         <span className="material-symbols-outlined">add</span> Add more
//         ingredients
//       </button>
//     </div>
//   );
// };

// export default IngredientsForm;
