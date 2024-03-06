import { useSearchParams } from "react-router-dom";
import { get_search_furniture_api } from "../../api/furnitureApi";
import FurnitureCatalog from "../../components/FurnitureCatalog";
import { withFetchData } from "../../hocs/withFetchData";
import SearchResultNotFound from "../../components/SearchResultNotFound";

const Search = ({ data }) => {
  const [params] = useSearchParams();
  const searchValue = params.get("q");

  if (!data.data.length)
    return <SearchResultNotFound searchValue={searchValue} />;

  return (
    <main>
      <section className="w-full text-xs tracking-widest font-semibold h-28 flex items-center justify-center uppercase my-4">
        <p className="text-5xl font-bold">SEARCH RESULTS FOR: {searchValue}</p>
      </section>
      <FurnitureCatalog data={data} />
    </main>
  );
};

export default withFetchData(Search, get_search_furniture_api);
