import { useParams } from "react-router-dom";
import {
  get_furniture_subtype_detail_api,
  get_furniture_type_detail_api,
} from "../../api/furnitureTypeApi";
import FurnitureCatalog from "../../components/FurnitureCatalog";
import HeroSection from "../../components/HeroSection";
import { get_furniture_by_type_api } from "@api/furnitureApi";
import { withFetchData } from "@hocs/withFetchData";
import { useFetch } from "../../hooks/api-hooks";

const FurnitureCatalogWithFetchData = withFetchData(
  FurnitureCatalog,
  get_furniture_by_type_api
);

const SECTION_INTRO_OPTION = {
  description:
    "Shop furniture from the comfort of your couch! E-commerce furniture stores offer a wide selection of styles and pieces, allowing you to browse, compare, and purchase furniture online with convenient delivery options. Enjoy a hassle-free furniture shopping experience delivered straight to your door.",
};

const Products = ({ data }) => {
  const params = useParams();

  const { data: typeInfo, isLoading } = useFetch(
    get_furniture_type_detail_api(params)
  );

  if (isLoading) return;

  const { type, description, thumb } = data || {
    type: typeInfo.name,
    ...typeInfo,
    ...SECTION_INTRO_OPTION,
  };
  return (
    <>
      <HeroSection description={description} title={type} img_url={thumb} />
      <section className="w-full text-xs tracking-widest font-semibold h-10 flex items-center justify-center bg-sky-950 text-white uppercase my-4">
        sale extraordinary
      </section>
      <FurnitureCatalogWithFetchData />
    </>
  );
};

export default withFetchData(Products, get_furniture_subtype_detail_api);
