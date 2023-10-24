import { useEffect, useState } from "react"
import AdminForm from "../Components/Admin/AdminForm/AdminForm"
import AdminGallery from "../Components/Admin/AdminCards/AdminGallery";


const blogsLS = JSON.parse(localStorage.getItem('blogs')) || [];

const AdminView = () => {

  const [blogs, setBlogs] = useState(blogsLS);
  useEffect(()=>{
    localStorage.setItem('blogs', JSON.stringify(blogs))
  }, [blogs]);

  return (
    <>
    <h1 className="text-dark">Panel de administracion</h1>
    <hr/>
    <AdminForm setBlogs={setBlogs}/>
    <AdminGallery setBlogs={setBlogs} blogs={blogs}/>
    </>
  )
}

export default AdminView