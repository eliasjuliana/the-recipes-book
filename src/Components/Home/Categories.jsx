import { categories } from "../../Constants";

const Categories = () => {
  return (
    <section className="my-5 mx-10">
    <h4 className="text-2xl font-semibold">Categories</h4>
      <div className="flex gap-8 p-10 justify-center">
        {categories.map((category) => {
          return (
            <div key={category.name}>
              <img
                className="size-32 object-cover rounded-full"
                src={category.image}
                alt={category.name}
              ></img>
              <p className="font-semibold text-center">{category.name}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Categories;
