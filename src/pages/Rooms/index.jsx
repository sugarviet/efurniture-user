import RoomCard from "@components/RoomCard";
import HorizontalList from "@components/HorizontalList";
import AppRow from "@components/AppRow";
import FilterSectionWrapper from "@components/FilterSectionWrapper";
import HeroSection from "@components/HeroSection";
import { PRODUCT_TYPE } from "@constants/filterConstants";
import FurnitureCatalog from "../../components/FurnitureCatalog";
import { get_furniture_by_room_api } from "@api/furnitureApi";
import { withFetchData } from "@hocs/withFetchData";

const FurnitureCatalogWithFetchData = withFetchData(FurnitureCatalog, get_furniture_by_room_api);

const SECTION_INTRO_OPTION = {
  img_url:
    "https://p3.aprimocdn.net/boconcept/1167e952-9f27-4bd6-bb63-ae75008651a3/AW22%20099_WEB-ImageCollageLarge-T-950x470.jpg",
  title: "living rooms",
  description:
    "Shop designer sofas, crafted with quality materials and designed to enhance any living space to experience luxury and comfort. Pick your style to customise.",
};

const Rooms = () => {
  return (
    <main>
      <HeroSection {...SECTION_INTRO_OPTION} />
      <section className="w-full text-xs font-semibold h-10 flex items-center justify-center bg-sky-950 text-white uppercase my-4">
        sale extraordinary
      </section>
      <FurnitureCatalogWithFetchData />
    </main>
  );
};

export default Rooms;
