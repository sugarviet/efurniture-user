import { useContext, useState } from "react";
import { classNames } from "../../utils/classNames";
import SearchButton from "../SearchButton";
import PropTypes from "prop-types";
import { SearchInputContext, SearchInputProvider } from "./SearchInnputContext";

const Input = ({ placeholder, className, onChange = () => {} }) => {
  const { searchValue, setSearchValue } = useContext(SearchInputContext);

  const handleOnChange = (value) => {
    setSearchValue(value);
    onChange(value);
  };

  return (
    <input
      className={classNames("w-full bg-transparent outline-none ", className)}
      placeholder={placeholder}
      value={searchValue}
      onChange={(e) => handleOnChange(e.target.value)}
    />
  );
};

function SearchInput({ children, placeholder, className, onChange }) {
  return (
    <SearchInputProvider>
      <form className="flex w-full items-center justify-between relative">
        <Input
          onChange={onChange}
          placeholder={placeholder}
          className={className}
        />
        {children}
      </form>
    </SearchInputProvider>
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
