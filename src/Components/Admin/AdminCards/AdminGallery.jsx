import AdminCard from "./AdminCard";

const AdminGallery = (props) => {

    const {blogs, setBlogs} = props;

    return (
        <section className="container row mt-5">
                {blogs.length === 0? <p>No hay recetas guardadas</p> : null}
                {blogs.map((blog)=>{
                    return <AdminCard key={blog.id} blog = {blog}/>
                })}
        </section>

    )
}

export default AdminGallery