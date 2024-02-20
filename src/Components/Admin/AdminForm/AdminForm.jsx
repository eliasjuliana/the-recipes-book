import { useForm } from "react-hook-form";
import { useBlog } from "../../../stores/useBlog";
import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postBlogsFn, putBlogsFn } from "../../../api/blogs";

import Input from "../../Forms/Input";
import TextArea from "../../Forms/TextArea";
import Select from "../../Forms/Select";

import Swal from "sweetalert2";
import { useState } from "react";

const AdminForm = () => {
  //____________________STATES________________________________
  const [ingredientsFields, setIngredientsFields] = useState([
    {
      ingredient: "",
      amount: "",
    },
  ]);
  // _____________________RHF__________________________________
  const {
    register,
    handleSubmit: onSubmitRHF,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  // __________________ZUSTAND____________________________________
  const { blog, clearBlog } = useBlog();

  const isEditing = !!blog;

  //en caso que este editando un blog
  if (isEditing) {
    setValue("title", blog.title);
    setValue("image-url", blog["image-url"]);
    setValue("content", blog.content);
    setValue("category", blog.category);
    setValue("ingredient", blog.ingredients.ingredient);
    setValue("amount", blog.ingredients.amount);
  }

  // __________________TQUERY____________________________________

  const queryClient = useQueryClient();

  //mutacion para CREATE(POST)
  const { mutate: postBlog } = useMutation({
    mutationFn: postBlogsFn,
    //mensaje de exito
    onSuccess: () => {
      Swal.close();
      toast.success("Receta guardada correctamente");

      //resetear el form
      reset();

      //recargar galeria con cards
      queryClient.invalidateQueries("blogs");
    },

    onError: (e) => {
      Swal.close();
      toast.error(e.message);
    },
  });

  //mutacion para UPDATE(PUT)
  const { mutate: putBlog } = useMutation({
    mutationFn: putBlogsFn,
    //mensaje de exito
    onSuccess: () => {
      Swal.close();
      toast.success("Receta guardada correctamente");

      //resetear el form
      reset();

      //limpiar estado global
      clearBlog();

      //recargar galeria con cards
      queryClient.invalidateQueries("blogs");
    },

    onError: (e) => {
      Swal.close();
      toast.error(e.message);
    },
  });

  // __________________HANDLERS____________________________________

  const handleSubmit = (data) => {
    Swal.showLoading();

    // Crear un nuevo array de objetos combinando los arrays ingredients y amount
    const newIngredients = data.ingredients.map((ingredient, index) => ({
      ingredient,
      amount: data.amount[index],
    }));

    // Crear un nuevo objeto de datos con el array combinado
    const newData = {
      ...data,
      ingredients: newIngredients,
    };

    // Eliminar el campo amount del objeto newData
    delete newData.amount;

    if (isEditing) {
      putBlog({ ...newData, id: blog.id });
    } else {
      postBlog(newData);
    }
  };

  const handleCancelEdition = () => {
    reset();
    clearBlog();
  };

  const handleAddIngredient = () => {
    let fields = {
      ingredient: "",
      amount: "",
    };
    setIngredientsFields([...ingredientsFields, fields]);
  };

  const handleDeleteField = (index) => {
    const newFields = [...ingredientsFields];
    newFields.splice(index, 1);
    setIngredientsFields(newFields);
  };

  //_________________ RENDER__________________________________
  return (
    <div className="my-5 pt-16 flex flex-col items-center">
      {isEditing && (
        <div role="alert" className="alert alert-error w-1/3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>You are editing the recipe &quot;{" "}
        <span className="font-semibold">{blog.title}</span>&quot;</span>
        </div>
      )}
      <form
        className="mt-20 w-1/3 bg-neutral-200 rounded-md p-5 flex flex-col "
        onSubmit={onSubmitRHF(handleSubmit)}
      >
        <div className="flex justify-between">
          <h2 className="text-xl font-semibold">Create new recipe</h2>

          <button type="submit" className="btn btn-error text-white">
            Save
          </button>

          {isEditing && (
            <button
              type="button"
              className="btn btn-neutral"
              onClick={handleCancelEdition}
            >
              Cancel edition
            </button>
          )}
        </div>

        {/* __________TITLE___________ */}
        <Input
          register={register}
          options={{
            required: true,
            minLength: 4,
            maxLength: 30,
          }}
          className="my-2"
          name="title"
          placeholder="Title"
          label="Recipe title"
          error={!!errors.title}
        />
        {/* __________IMAGE___________ */}
        <Input
          register={register}
          options={{
            required: true,
            minLength: 4,
            pattern: /\.(jpeg|jpg|gif|png|bmp|svg|webp|tiff)$/i,
          }}
          className="my-2"
          name="image-url"
          type="url"
          placeholder="Image"
          label="Image"
          error={!!errors["image-url"]}
        />
        {/* __________CATEGORY___________ */}
        <Select
          register={register}
          options={{
            required: true,
          }}
          className="my-2"
          name="category"
          type="select"
          //   placeholder="url de imagen"
          error={!!errors["category"]}
          label="Choose a category"
        />
        {/* __________DESCRIPTION___________ */}
        <TextArea
          register={register}
          options={{
            required: true,
            minLength: 4,
            maxLength: 3000,
          }}
          className="my-2"
          name="content"
          placeholder="Description"
          error={!!errors.content}
          label="Description"
        />

        {/* ingredients */}

        <div className="flex justify-between w-3/4 label-text font-semibold text-xl text-center">
          <p>Ingredient</p>
          <p>Amount</p>
        </div>
        {ingredientsFields.map((ingredientField, index) => {
          return (
            <div className="flex gap-1" key={index}>
              <Input
                register={register}
                options={{
                  required: true,
                  minLength: 1,
                }}
                className="mb-2 w-2/3"
                name={`ingredients[${index}]`}
                type="text"
                placeholder="Ingredient"
                error={!!errors[`ingredients[${index}]`]}
              />

              <Input
                register={register}
                options={{
                  required: true,
                  minLength: 1,
                }}
                className="mb-2 w-1/3"
                name={`amount[${index}]`}
                type="text"
                placeholder="Amount"
                error={!!errors[`amount[${index}]`]}
              />
              <span
                className="material-symbols-outlined mt-8"
                onClick={() => handleDeleteField(index)}
              >
                delete
              </span>
            </div>
          );
        })}

        {/* Botón para agregar más ingredientes */}
        <button className="btn btn-ghost" onClick={handleAddIngredient}>
          <span className="material-symbols-outlined">add</span> Add more
          ingredients
        </button>
      </form>
    </div>
  );
};

export default AdminForm;
