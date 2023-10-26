import LoginForm from "../Components/Login/LoginForm"

const LoginView = () => {
  return (
    <>
      <h1>Bienvenido</h1>
      <hr/>

      <section className="bg-light rounded p-4 d-flex  w-75 justify-content-center">
        <article className="row">
        <div className="col-12 col-md-6">
          <LoginForm />
        </div>
        <div className="col-12 col-md-6">
          <img src="https://www.helpguide.org/wp-content/uploads/2023/02/Cooking-at-Home-1200x800.jpeg" alt="cocina y utensilios" className="w-100 img-fluid rounded"/>
        </div>
        </article>
      </section>
    </>
  )
}

export default LoginView