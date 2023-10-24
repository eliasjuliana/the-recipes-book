import AdminForm from "../Components/Admin/AdminForm/AdminForm"
import AdminGallery from "../Components/Admin/AdminCards/AdminGallery";
import { useQuery } from "@tanstack/react-query";
import { getBlogsFn } from "../api/blogs";


const AdminView = () => {

  const {data: blogs, isError, isLoading} = useQuery({queryKey: ['blogs'], queryFn: getBlogsFn});

  if(isError){
    return (
      <>
      <h1 className="text-dark">Panel de administracion</h1>
      <hr/>
      <AdminForm/>
      <div className="alert alert-danger mt-3">Ocurrio un error cargando los blogs</div>
      </>
    )
  }

  return (
    <>
    <h1 className="text-dark">Panel de administracion</h1>
    <hr/>
    <AdminForm/>
    {isError && (<div className="alert alert-danger">Ocurrio un error cargando los blogs</div>)}
    {isLoading? <h3>Cargando...</h3> : <AdminGallery blogs={blogs}/>}
    </>
  )
}

export default AdminView