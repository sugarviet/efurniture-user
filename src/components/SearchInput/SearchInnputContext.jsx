import { createContext, useState } from "react";
import PropTypes from "prop-types";

const SearchInputContext = createContext();

function SearchInputProvider(props) {
  const { children } = props;
  const [searchValue, setSearchValue] = useState("");

  const value = {
    searchValue,
    setSearchValue,
  };

  return (
    <SearchInputContext.Provider {...props} value={value}>
      {children}
    </SearchInputContext.Provider>
  );
}

SearchInputProvider.propTypes = {
  children: PropTypes.node,
};

export { SearchInputProvider, SearchInputContext };
