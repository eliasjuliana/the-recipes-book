import { useQuery } from "@tanstack/react-query";

import { getBlogsFn } from "../api/blogs";
import BlogItem from "../Components/Home/BlogItem.jsx";
import Hero from "../Components/Home/Hero.jsx";
import { useRef } from "react";

const HomeView = () => {
  const {
    data: blogs,
    isLoading,
    isError,
  } = useQuery({ queryKey: ["blogs"], queryFn: getBlogsFn });

  const recipesRef = useRef(null);

  if (isLoading) {
    return <h3 className="mt-3 text-center">Loading...</h3>;
  }

  if (isError) {
    return (
      <div className="mt-3 alert alert-danger">
        Ocurrio un error al cargar las recetas
      </div>
    );
  }

  if (blogs) {
    if (blogs.data.length === 0) {
      return (
        <div className="mt-3 alert alert-warning">
          Aun no hay recetas creadas
        </div>
      );
    }
    return (
      <>
        <section>
          <Hero recipesRef={recipesRef}/>
        </section>
        <section ref={recipesRef} className="px-4 py-2 grid grid-cols-5 gap-2 my-3">

          {blogs.data.map((blog) => (
            <BlogItem key={blog.id} blog={blog} />
          ))}
        </section>
      </>
    );
  }

  return <></>;
};

export default HomeView;
