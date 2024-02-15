import AdminForm from "../Components/Admin/AdminForm/AdminForm";
import AdminGallery from "../Components/Admin/AdminCards/AdminGallery";
import { useQuery } from "@tanstack/react-query";
import { getBlogsFn } from "../api/blogs";

const AdminView = () => {
  const {
    data: blogs,
    isError,
    isLoading,
  } = useQuery({ queryKey: ["blogs"], queryFn: getBlogsFn });

  if (isError) {
    return (
      <section>
        <hr />
        <AdminForm />
        <div className="alert alert-danger mt-3">
          Ocurrio un error cargando los blogs
        </div>
      </section>
    );
  }

  return (
    <section className="max-container m-5">
      <AdminForm />
      {isError && (
        <div className="alert alert-danger">
          Ocurrio un error cargando los blogs
        </div>
      )}
      {isLoading ? <h3>Cargando...</h3> : <AdminGallery blogs={blogs} />}
    </section>
  );
};

export default AdminView;
