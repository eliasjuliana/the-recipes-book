const AdminCard = (props) => {

  const {blog} = props;

  return (
    <article className="col-3">
      <div className="card" style={{ width: "18rem" }}>
        <img src={blog['image-url']} className="card-img-top" alt={blog.title}/>
        <div className="card-body">
          <h5 className="card-title mb-3">{blog.title}</h5>
          {/* <p className="card-text">{blog.content}</p> */}
          <div className="d-flex justify-content-end gap-2">
            <button className="btn btn-primary">Editar</button>
            <button className="btn btn-danger">Eliminar</button>
          </div>
        </div>
      </div>
    </article>
  )
}

export default AdminCard