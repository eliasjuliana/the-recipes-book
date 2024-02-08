const BlogDetail = (props) => {
  const { blog } = props;

  return (
    <section className="max-container mt-10">
      <h3 className="text-4xl font-bold">{blog.title}</h3>
      <div className="gap-[100px] grid grid-cols-4">
        <img
          src={blog["image-url"]}
          alt={blog.title}
          className="size-10/12 object-cover col-span-3 mt-5"
        />
        <div>
          <h4>Ingredients</h4>
          <div className="overflow-x-auto">
            <table className="table w-56 bg-neutral-200">
              {/* head */}
              {/* <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead> */}
              <tbody>
                {/* row 1 */}
                <tr>
                  <th>Calories</th>
                  <td>450 kCal</td>
                </tr>
                {/* row 2 */}
                <tr>
                  <th>Carbs</th>
                  <td>80g</td>
                </tr>
                {/* row 3 */}
                <tr>
                  <th>Fat</th>
                  <td>150g</td>
                </tr>
                <tr>
                  <th>Protein</th>
                  <td>150g</td>
                </tr>
                <tr>
                  <th>Fiber</th>
                  <td>150g</td>
                </tr>
                <tr>
                  <th>Sodium</th>
                  <td>15 mg</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <p className="text-xl mb-5">{blog.content}</p>
    </section>
  );
};

export default BlogDetail;
