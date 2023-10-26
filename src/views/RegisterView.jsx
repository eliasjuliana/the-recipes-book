import RegisterForm from "../Components/Register/RegisterForm"

const RegisterView = () => {
  return (
    <>
    <h1>Registro</h1>
      <hr/>
      <div className="alert alert-info">La contraseña debera tener una mayuscula, una minuscula, un numero, un caracter especial y al menos 8 caracteres</div>
      <section className="bg-light rounded p-4 d-flex  w-75 justify-content-center">
            <RegisterForm/>
      </section>
    </>
  )
}

export default RegisterView