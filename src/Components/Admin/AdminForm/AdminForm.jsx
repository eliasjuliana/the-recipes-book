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
    setValue("ingredients", blog.ingredients);
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
    console.log(data);

    if (isEditing) {
      putBlog({ ...data, id: blog.id });
    } else {
      postBlog(data);
    }
  };

  const handleCancelEdition = () => {
    reset();
    clearBlog();
  };

  const handleAddIngredient = () => {
    console.log("add ingredients");
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

  // const handleIngredientChange = (event, index) => {
  //   // let ingredientsData = [...ingredientsFields];
  //   // ingredientsData[index][event.target.ingredient] = event.target.value;
  //   // setIngredientsFields(ingredientsData)
  // };

  //_________________ RENDER__________________________________
  return (
    <div className="my-5 flex justify-center">
      {isEditing && (
        <div className="alert alert-info">
          Estas editando la receta &quot;{" "}
          <span className="fw-bold">{blog.title}</span>&quot;
        </div>
      )}
      <form
        className="mt-20 w-1/3 bg-neutral-200 rounded-md p-5 flex flex-col content-center"
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
              className="ms-2 btn btn-secondary mt-3"
              onClick={handleCancelEdition}
            >
              Cancelar edicion
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
                  minLength: 4,
                }}
                className="mb-2 w-2/3"
                name="ingredients"
                type="text"
                placeholder="Ingredient"
                error={!!errors["ingredient"]}
              />

              <Input
                register={register}
                options={{
                  required: true,
                  minLength: 4,
                }}
                className="mb-2 w-1/3"
                name="amount"
                type="text"
                placeholder="Amount"
                error={!!errors["amount"]}
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
