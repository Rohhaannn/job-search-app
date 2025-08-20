import { LuSearch } from "react-icons/lu"
import { IoFilterSharp } from "react-icons/io5";

const SearchBar = () => {
  return (
    <div>
      <div className="flex justify-around gap-4 items-center bg-transparent border border-white rounded-full px-4 py-2">
        <LuSearch/>
        <input
          type="text"
          placeholder="Search Job"
          className="bg-transparent text-white outline-none w-full"
        />
        <IoFilterSharp/>
      </div>
    </div>
  )
}

export default SearchBar
