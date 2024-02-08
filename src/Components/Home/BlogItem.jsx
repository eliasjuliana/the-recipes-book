import { Link } from "react-router-dom";


const BlogItem = (props) => {
  const { blog } = props;

  return (
    <article className="card bg-base-100 shadow-xl">
      <figure className="max-h-[150px] object-cover">
        <img src={blog["image-url"]} alt={blog.title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-center">{blog.title}</h2>
        <div className="card-actions justify-start">
          <button className="btn btn-error btn-sm text-white">
            <Link to={`/detail/${blog.id}`}>View recipe</Link>
          </button>
        </div>
      </div>
    </article>
  );
};

export default BlogItem;
