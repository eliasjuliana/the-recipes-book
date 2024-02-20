import { useQuery } from "@tanstack/react-query";

import { getBlogsFn } from "../api/blogs";

import Hero from "../Components/Home/Hero.jsx";

import Search from "../Components/Home/Search.jsx";
import Categories from "../Components/Home/Categories.jsx";

import BlogsGallery from "../Components/Home/BlogsGallery.jsx";

const HomeView = () => {
  const {
    data: blogs,
    isLoading,
    isError,
  } = useQuery({ queryKey: ["blogs"], queryFn: getBlogsFn });

  if (isLoading) {
    return <h3 className="mt-10 text-center">Loading...</h3>;
  }

  if (isError) {
    return <div className="mt-10 ">Ocurrio un error al cargar las recetas</div>;
  }

  if (blogs) {
    if (blogs.data.length === 0) {
      return <div className="mt-10 ">Aun no hay recetas creadas</div>;
    }
    return (
      <>
        <section>
          <Hero />
        </section>

        <Categories />

        <div className="w-1/3 mx-5">
          <Search blogs={blogs} />
        </div>
        <BlogsGallery blogs={blogs} />
      </>
    );
  }

  return <></>;
};

export default HomeView;
