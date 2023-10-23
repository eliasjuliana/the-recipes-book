import { useEffect, useState } from "react"
import AdminForm from "../Components/Admin/AdminForm/AdminForm"
import AdminTable from "../Components/Admin/AdminTable/AdminTable"


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
    <AdminTable setBlogs={setBlogs} blogs={blogs}/>
    </>
  )
}

export default AdminView