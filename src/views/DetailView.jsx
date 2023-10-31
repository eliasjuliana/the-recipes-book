import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom"
import { getBlogByIdFn } from "../api/blogs";
import BlogDetail from "../Components/Detail/BlogDetail";

const DetailView = () => {

  const {id} = useParams();

  const {data: blog, isLoading, isError} = useQuery({queryKey: ['blog-by-id'], queryFn: ()=>getBlogByIdFn(id)})


  if(isLoading){
    return(
      <>
      <h1>Cargando...</h1>
      <hr/>
      </>
    )
  }

  if(isError){
    return(
      <>
      <h1>Error</h1>
      <hr/>
      <div className="alert alert-danger">Ocurrio un error cargando esta receta</div>
      </>
    )
  }

  if(blog){
    return (
      <>
        <div className="d-flex justify-content-between">
        <h1>{blog.title}</h1>
        <Link to='/' className="btn btn-dark">Volver a home</Link>
        </div>
        
         <hr/>
         <BlogDetail blog = {blog}/>
      </>
    )
  }

  //si no se encuentra la receta en la base de datos
  if(blog === null){
    return (
      <>
    <h1>Error</h1>
    <hr/>
    <div className="alert alert-danger">No se encontro esta  receta</div>
    </>
    )
  }

  return <></> 
}

export default DetailView