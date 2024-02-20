import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { deleteBlogFn } from "../../../api/blogs";
import { toast } from "sonner";
import { useBlog } from "../../../stores/useBlog";


const AdminCard = (props) => {
  const { blog } = props;

  // __________________ZUSTAND____________________________________
  const { setBlogToEdit } = useBlog();

  // __________________TQUERY____________________________________

  const queryClient = useQueryClient();

  const { mutate: deleteBlog } = useMutation({
    mutationFn: deleteBlogFn,
    onSuccess: () => {
      Swal.close();
      toast.success("Receta eliminada");

      queryClient.invalidateQueries("blogs");
    },
    onError: (e) => {
      Swal.close();
      toast.error(e.message);
    },
  });

  // ________________HANDLER____________________________

  const handleEdit = () => {
    setBlogToEdit(blog);
  };

  const handleDelete = () => {
    Swal.fire({
      title: "Estas seguro?",
      text: `Estas por eliminar la receta ${blog.title}`,
      showCancelButton: true,
      confirmButtonText: "Si, eliminar",
      cancelButtonText: "No",
    }).then((response) => {
      if (response.isConfirmed) {
        Swal.showLoading();
        //mutacion de eliminacion
        deleteBlog(blog.id);
      }
    });
  };

  // __________________RENDER____________________________________
  return (
    <article className="card bg-base-100 shadow-xl">
      <figure className="max-h-48">
        <img src={blog["image-url"]} alt={blog.title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{blog.title}</h2>
        <div className="card-actions justify-end">
          <button className="btn btn-error" onClick={handleEdit}>
            Edit
          </button>
          <button className="btn btn-danger" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </article>
  );
};

export default AdminCard;
