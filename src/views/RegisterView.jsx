import RegisterForm from "../Components/Register/RegisterForm";
import {register} from '../assets/index'

const RegisterView = () => {
  return (
    <section className="max-container">
      <h1 className="py-6 text-center text-2xl">Want to join us?</h1>
      {/* <div className="alert alert-info">La contraseña debera tener una mayuscula, una minuscula, un numero, un caracter especial y al menos 8 caracteres</div> */}
      <article className="flex gap-5 justify-center">
      <div className="w-96">
          <img
            src={register}
            alt="cocina y utensilios"
            className="h-full"
          />
        </div>
        <RegisterForm />
      </article>
    </section>
  );
};

export default RegisterView;
