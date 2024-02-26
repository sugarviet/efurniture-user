import { useState } from "react";
import { classNames } from "../../utils/classNames";
import SearchButton from "../SearchButton";
import PropTypes from 'prop-types';

function SearchInput({children, placeholder, className, handleSearch }) {
  const [searchValue, setSearchValue] = useState("");

  console.log(handleSearch);
  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };



  return (
    <div className="flex w-full items-center justify-between relative">
      <input
        className={classNames("w-full bg-transparent outline-none ", className)}
        placeholder={placeholder}
        value={searchValue}
        onChange={handleInputChange}
      />
      {children}
      <SearchInput.SubmitButton>Search</SearchInput.SubmitButton>
    </div>
  );
}

SearchInput.propTypes = {
  placeholder: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  onSearch: PropTypes.func,
};


SearchInput.SubmitButton = SearchButton;

export default SearchInput;
