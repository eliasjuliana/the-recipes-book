import { useForm } from "react-hook-form";
import Input from "../Inputs/Input";
import { Link, useNavigate } from "react-router-dom";
import { useSession } from "../../stores/useSession";
import { useMutation } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { toast } from "sonner";
import { postLoginFn } from "../../api/auth";

const LoginForm = () => {
  //ZUSTAND______________________________________________
  const { login } = useSession();

  //RRD
  const navigate = useNavigate();

  //RHF___________________________________________________
  const {
    register,
    formState: { errors },
    handleSubmit: onSubmitRHF,
  } = useForm();

  //TQUERY________________________________________________
  const { mutate: postLogin } = useMutation({
    mutationFn: postLoginFn,
    onSuccess: (data) => {
      //mensajes de exito
      Swal.close();
      toast.success("Bienvenido");

      //loguear al usuario
      login(data);

      //navegar a home pero logueados
      navigate("/");
    },
    onError: (err) => {
      Swal.close();
      toast.error(err.message);
    },
  });
  //HANDLERS________________________________________________
  const handleSubmit = (data) => {
    Swal.showLoading();
    postLogin(data);
  };

  //RENDER________________________________________________
  return (
    <form
      onSubmit={onSubmitRHF(handleSubmit)}
      className="px-4 py-2 flex flex-col"
    >
      <Input
        register={register}
        options={{
          required: true,
          minLength: 4,
          maxLength: 30,
        }}
        className=""
        // label='Nombre de usuario'
        name="username"
        placeholder="Username"
        error={!!errors?.username}
      />

      <Input
        register={register}
        options={{
          required: true,
          minLength: 4,
          maxLength: 30,
        }}
        className="mt-2 mb-2"
        // label='Contraseña'
        type="password"
        name="password"
        placeholder="Password"
        error={!!errors?.username}
      />

      <button className="btn btn-error w-24">Log In</button>
      <p className="mt-4 mb-0">
        Are you new? <Link to={"/register"}>Sign up here!</Link>
      </p>
    </form>
  );
};

export default LoginForm;
