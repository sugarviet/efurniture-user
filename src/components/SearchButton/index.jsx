import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

function SearchButton({ className }) {
  return (
    <button className={className} type="submit">
      <MagnifyingGlassIcon className="h-4 w-4" aria-hidden="true" />
    </button>
  );
}

export default SearchButton;
