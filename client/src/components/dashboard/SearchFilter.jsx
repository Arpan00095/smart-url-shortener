import { FaSearch } from "react-icons/fa";

const SearchFilter = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-5 mt-8">

      <div className="flex flex-col lg:flex-row gap-4">

        <div className="relative flex-1">

          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

          <input
            type="text"
            placeholder="Search your links..."
            className="w-full border rounded-xl pl-12 pr-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />

        </div>

        <select className="border rounded-xl px-5 py-3 outline-none">
          <option>Newest</option>
          <option>Oldest</option>
          <option>Most Clicks</option>
        </select>

      </div>

    </div>
  );
};

export default SearchFilter;