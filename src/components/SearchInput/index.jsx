import { classNames } from "../../utils/classNames";
import SearchButton from "../SearchButton";

function SearchInput({ placeholder, className, children }) {
  return (
    <div className="flex w-full items-center justify-between relative">
      <input
        className={classNames("w-full bg-transparent outline-none ", className)}
        placeholder={placeholder}
      />
      {children}
    </div>
  );
}

SearchInput.SubmitButton = SearchButton;

export default SearchInput;
