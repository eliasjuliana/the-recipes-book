import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { deleteBlogFn } from "../../../api/blogs";
import { toast } from "sonner";

const AdminCard = (props) => {

  const {blog} = props;

  // __________________TQUERY____________________________________

  const queryClient = useQueryClient();


  const {mutate: deleteBlog} = useMutation({
    mutationFn: deleteBlogFn,
    onSuccess: ()=>{
      Swal.close();
      toast.success('Receta eliminada');

      queryClient.invalidateQueries('blogs');
    },
    onError: ()=>{
      Swal.close();
      toast.error('Ocurrio un error eliminando la receta')
    }
  })

  // ________________HANDLER____________________________
  const handleDelete = ()=>{
    Swal.fire({
        title: 'Estas seguro?',
        text: `Estas por eliminar la receta ${blog.title}`,
        showCancelButton: true,
        confirmButtonText: 'Si, eliminar',
        cancelButtonText: 'No'
    }).then((response)=>{
      if(response.isConfirmed){
        Swal.showLoading();
        //mutacion de eliminacion
        deleteBlog(blog.id)
      }
    })
}

  // __________________RENDER____________________________________
  return (
    <article className="col-3">
      <div className="card" style={{ width: "18rem" }}>
        <img src={blog['image-url']} className="card-img-top" alt={blog.title}/>
        <div className="card-body">
          <h5 className="card-title mb-3">{blog.title}</h5>
          {/* <p className="card-text">{blog.content}</p> */}
          <div className="d-flex justify-content-end gap-2">
            <button className="btn btn-primary">Editar</button>
            <button className="btn btn-danger" onClick={handleDelete}>Eliminar</button>
          </div>
        </div>
      </div>
    </article>
  )
}

export default AdminCard