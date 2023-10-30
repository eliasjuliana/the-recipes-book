import { Link } from "react-router-dom"

const ErrorView = () => {
  return (
    <>
    <h3>Oh oh! No encontramos este sitio</h3>
    <Link to={-1} className="btn btn-dark">Volver</Link>
    </>
  )
}

export default ErrorView