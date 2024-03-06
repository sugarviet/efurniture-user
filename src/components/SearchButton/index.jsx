import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { SearchInputContext } from "../SearchInput/SearchInnputContext";
import { useNavigate, useSearchParams } from "react-router-dom";

function SearchButton({ className }) {
  const { searchValue } = useContext(SearchInputContext);
  const [params, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search`);
    setSearchParams({ q: searchValue });
  };

  return (
    <button onClick={handleSubmit} className={className} type="submit">
      <MagnifyingGlassIcon className="h-4 w-4" aria-hidden="true" />
    </button>
  );
}

export default SearchButton;
