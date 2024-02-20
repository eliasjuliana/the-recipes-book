import { useRef } from "react";
import { useSearch } from "../../stores/useSearch";

const Search = (props) => {
  const { blogs } = props;
  // console.log(blogs)

  const searchRef = useRef();



  const { setFilteredBlogs, setIsSearching } = useSearch();


  const handleSearch = (e) => {
    e.preventDefault();


    const search = searchRef.current.value;
    setIsSearching(true);

    const filteredBlogs = blogs.data.filter(blog => blog.title.toLowerCase().includes(search.toLowerCase()));
    setFilteredBlogs(filteredBlogs)
  };



  return (
    <label className="form-control w-full max-w-xs">
      <div className="label">
        <span className="label-text">What are you looking for?</span>
      </div>
      <div className="relative">
        <input
          type="text"
          //   placeholder="Search"
          className="input input-bordered input-error w-full max-w-xs pr-10"
          onChange={handleSearch}
          // value={searchTerm}
          ref={searchRef}
        />
        <span className="absolute inset-y-0 right-0 flex items-center pr-3">
          <span
            onClick={handleSearch}
            className="material-symbols-outlined hover:text-red-500"
          >
            search
          </span>
        </span>
      </div>
    </label>
  );
};

export default Search;
