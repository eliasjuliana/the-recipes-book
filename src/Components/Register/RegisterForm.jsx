import { useForm } from "react-hook-form";
import Input from "../Inputs/Input";
import { useMutation } from "@tanstack/react-query";
import { postUserFn } from "../../api/users";
import Swal from "sweetalert2";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useSession } from "../../stores/useSession";

const RegisterForm = () => {
  //ZUSTAND______________________________________________
  const { login } = useSession();

  //RRD
  const navigate = useNavigate();

  //RHF____________________________________________________
  const {
    register,
    formState: { errors },
    handleSubmit: onSubmitRHF,
  } = useForm();

  //TQUERY________________________________________________
  const { mutate: postUser } = useMutation({
    mutationFn: postUserFn,
    onSuccess: (data) => {
      //mensajes de exito
      Swal.close();
      toast.success("Bienvenido");

      //loguear al usuario
      login({ ...data, password: undefined });

      //navegar a home pero logueados
      navigate("/");
    },
    onError: () => {
      Swal.close();
      toast.error("Ocurrio un error al registrar el usuario");
    },
  });

  //HANDLERS
  const handleSubmit = (data) => {
    Swal.showLoading();
    postUser({ ...data, isAdmin: false });
  };
  //RENDER________________________________________________
  return (
    <div className="flex flex-col justify-between">
      <h3 className="text-xl text-center pt-10">Register now</h3>
      <form onSubmit={onSubmitRHF(handleSubmit)}>
        <Input
          register={register}
          options={{
            required: true,
            minLength: 4,
            maxLength: 30,
          }}
          className=""
          label="Firstname"
          name="firstname"
          // placeholder='Ingrese su nombre'
          error={!!errors?.firstname}
        />

        <Input
          register={register}
          options={{
            required: true,
            minLength: 4,
            maxLength: 30,
          }}
          className="mt-2 mb-2"
          label="Lastname"
          type="lastname"
          name="lastname"
          // placeholder='Ingrese su apellido'
          error={!!errors?.lastname}
        />

        <Input
          register={register}
          options={{
            required: true,
            minLength: 4,
            maxLength: 30,
          }}
          className=""
          label="Username"
          name="username"
          // placeholder='Ingrese su nombre de usuario'
          error={!!errors?.username}
        />

        <Input
          register={register}
          options={{
            required: true,
            minLength: 4,
            maxLength: 30,
            pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/,
          }}
          className="mt-2 mb-2"
          label="Password"
          type="password"
          name="password"
          // placeholder='Ingrese su contraseña'
          error={!!errors?.password}
        />

        <button className="btn btn-error">Sign up</button>
      </form>
    </div>
  );
};

export default RegisterForm;
