export const SearcEle = ({ loading, handleSubmit, setSearchQuery }) => {
  return (
    <>
      {!loading ? (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row w-full justify-center items-end"
        >
          <div className="relative text-center sm:mr-4 w-full md:w-full lg:w-full xl:w-2/3">
            <input
              type="text"
              required
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Enter URL for lookup"
              className="drop-shadow-lg w-full bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            type="submit"
            className="gradbtndesign flex justify-center mx-auto sm:mx-0 mt-4 sm:mt-0 drop-shadow-lg text-white border-0 py-2 px-6 focus:outline-none rounded text-lg w-44 sm:w-auto"
            style={{ fontSize: "16px", fontWeight: "400" }}
          >
            Search
          </button>
        </form>
      ) : (
        "Please Wait my proxy server of ful.io is too slow....."
      )}
    </>
  );
};
