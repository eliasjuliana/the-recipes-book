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
        <h1 className="text-2xl m-4">Administration panel</h1>
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
      <h1 className="text-2xl font-bold py-5 text-center">Administration panel</h1>
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
