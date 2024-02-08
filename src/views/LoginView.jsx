import LoginForm from "../Components/Login/LoginForm"

const LoginView = () => {
  return (
    <div className="max-container">
      <h1 className="text-2xl ">Welcome</h1>

      <section className="flex justify-center mt-6">
        <article className="flex gap-4">
        <div className="col-12 col-md-6">
          <LoginForm />
        </div>
        <div className="w-96">
          <img src="https://www.helpguide.org/wp-content/uploads/2023/02/Cooking-at-Home-1200x800.jpeg" alt="cocina y utensilios" className="w-100 img-fluid rounded"/>
        </div>
        </article>
      </section>
    </div>
  )
}

export default LoginView