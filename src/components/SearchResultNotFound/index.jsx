function SearchResultNotFound({ searchValue }) {
  return (
    <div className="flex flex-col p-12">
      <span className="uppercase text-xs font-md my-4 text-[#73726e] tracking-widest">
        search result: {searchValue}
      </span>
      <span className="uppercase w-4/5 leading-10 text-4xl tracking-widest my-2 font-HelveticaBold">
        WE'RE SORRY, NO PRODUCTS WERE FOUND FOR YOUR SEARCH
      </span>
    </div>
  );
}

export default SearchResultNotFound;
