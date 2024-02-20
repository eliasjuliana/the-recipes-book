const BlogDetail = (props) => {
  const { blog } = props;
  console.log(blog);

  return (
    <section className="max-container mt-10">
      <article className="py-5">
        <h3 className="text-4xl font-semibold">{blog.title}</h3>
        <div className="mt-5 flex justify-between pb-2">
          <h4 className="text-2xl font-light">{blog.category}</h4>
          <div className="pr-56">
            <span className="material-symbols-outlined">bookmark</span>
            <span className="material-symbols-outlined">share</span>
          </div>
        </div>

        <hr></hr>
      </article>

      <div className="gap-[100px] grid grid-cols-4">
        <img
          src={blog["image-url"]}
          alt={blog.title}
          className="size-10/12 object-cover col-span-3 mt-5 pl-10"
        />
        <div className="pr-10">
          <h4 className="text-2xl font-light mb-3">Nutrition Facts</h4>
          <div className="overflow-x-auto">
            <table className="table w-56 bg-neutral-200">
              <tbody>
                <tr>
                  <th>Calories</th>
                  <td>450 kCal</td>
                </tr>
                <tr>
                  <th>Carbs</th>
                  <td>80g</td>
                </tr>
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

      <article className="ml-10">
        <h4 className="text-2xl font-light mb-3">Ingredients</h4>
        {blog.ingredients.map((ingredient, index) => (
          <p key={index}>
            <div className="form-control w-1/3">
              <label className="cursor-pointer label justify-start gap-3">
                
                <input
                  type="checkbox"
                  checked="checked"
                  className="checkbox checkbox-error"
                />
                <p className=" text-lg text-left">
                  {ingredient.amount}
                  <span>   </span>
                  {ingredient.ingredient}
                </p>
              </label>
            </div>
          </p>
        ))}
      </article>
      <hr/>

      <article className="py-5 ml-10">
      <h4 className="text-2xl font-light mb-3">Instructions</h4>
      <p className="text-xl mb-5">{blog.content}</p>
      </article>

    </section>
  );
};

export default BlogDetail;
