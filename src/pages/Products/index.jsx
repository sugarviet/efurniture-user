import { get_furniture_subtype_detail_api } from "../../api/furnitureTypeApi";
import FurnitureCatalog from "../../components/FurnitureCatalog";
import HeroSection from "../../components/HeroSection";
import { get_furniture_by_type_api } from "@api/furnitureApi";
import { withFetchData } from "@hocs/withFetchData";

const FurnitureCatalogWithFetchData = withFetchData(
  FurnitureCatalog,
  get_furniture_by_type_api
);

const SECTION_INTRO_OPTION = {
  img_url:
    "https://p3.aprimocdn.net/boconcept/1167e952-9f27-4bd6-bb63-ae75008651a3/AW22%20099_WEB-ImageCollageLarge-T-950x470.jpg",
  title: "product",
  description:
    "Shop designer sofas, crafted with quality materials and designed to enhance any living space to experience luxury and comfort. Pick your style to customise.",
};

const Products = ({ data }) => {
  const { type, description, thumb } = data || {};
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
