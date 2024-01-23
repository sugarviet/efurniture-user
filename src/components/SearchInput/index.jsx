import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

function SearchInput() {
  return (
    <div className="flex w-full items-center justify-between relative">
      <input
        className="w-full bg-transparent border-b-[1px] border-black outline-none py-1 pr-6"
        placeholder="Search"
      />
      <button className="absolute right-0" type="submit">
        <MagnifyingGlassIcon className="h-4 w-4" aria-hidden="true" />
      </button>
    </div>
  );
}

export default SearchInput;
