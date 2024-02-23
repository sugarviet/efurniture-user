import { useParams } from "react-router-dom";
import FurnitureCatalog from "../../components/FurnitureCatalog";
import HeroSection from "../../components/HeroSection";
import LoadingSpinner from "../../components/LoadingSpinner";
import QueryFurnitureMap from "../../shared/API/Furniture";
import { useFetch } from "../../hooks/api-hooks";

const SECTION_INTRO_OPTION = {
  img_url:
    "https://p3.aprimocdn.net/boconcept/1167e952-9f27-4bd6-bb63-ae75008651a3/AW22%20099_WEB-ImageCollageLarge-T-950x470.jpg",
  title: "sofas",
  description:
    "Shop designer sofas, crafted with quality materials and designed to enhance any living space to experience luxury and comfort. Pick your style to customise.",
};

const Products = () => {
  const { type, subtype } = useParams();

  const { get_api } = QueryFurnitureMap.get("furniture_by_type");

  const { data, isLoading } = useFetch(get_api(type, subtype));

  if (isLoading) return <LoadingSpinner />;

  return (
    <>
      <HeroSection {...SECTION_INTRO_OPTION} />
      <section className="w-full text-xs tracking-widest font-semibold h-10 flex items-center justify-center bg-sky-950 text-white uppercase my-4">
        sale extraordinary
      </section>
      <FurnitureCatalog catalog={data} />
    </>
  );
};

export default Products;
