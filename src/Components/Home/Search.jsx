const Search = () => {

    const handleSearch = () =>{

    }
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
        />
        <span className="absolute inset-y-0 right-0 flex items-center pr-3">
          <span onClick={handleSearch} className="material-symbols-outlined hover:text-red-500">search</span>
        </span>
      </div>
    </label>
  );
};

export default Search;
