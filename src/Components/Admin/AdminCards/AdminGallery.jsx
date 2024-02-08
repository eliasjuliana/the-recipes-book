import AdminCard from "./AdminCard";


const AdminGallery = (props) => {

    const {blogs} = props;

    return (

        <section className="mb-5 grid grid-cols-4 gap-2">
                {blogs.length === 0? <p>No hay recetas guardadas</p> : null}
                {blogs.data.map((blog)=>{
                    return <AdminCard key={blog.id} blog = {blog}/>
                })}
        </section>

    )
}

export default AdminGallery