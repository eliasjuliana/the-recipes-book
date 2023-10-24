import AdminCard from "./AdminCard";


const AdminGallery = (props) => {

    const {blogs} = props;

    return (
        <div className="container mt-5">
        <section className="row">
                {blogs.length === 0? <p>No hay recetas guardadas</p> : null}
                {blogs.map((blog)=>{
                    return <AdminCard key={blog.id} blog = {blog}/>
                })}
        </section>
        </div>

    )
}

export default AdminGallery