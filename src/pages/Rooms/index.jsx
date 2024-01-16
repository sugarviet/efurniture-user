import RoomCard from "@components/RoomCard";
import HorizontalList from "@components/HorizontalList";
import AppRow from "@components/AppRow";
import FilterSectionWrapper from "@components/FilterSectionWrapper";
import HeroSection from "@components/HeroSection";
import { PRODUCT_TYPE } from "@constants/filterConstants";

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
      <AppRow
        gutter={4}
        spans={[
          { xs: 0, sm: 0, md: 5, lg: 6, xl: 6 },
          { xs: 24, sm: 24, md: 19, lg: 18, xl: 18 },
        ]}
      >
        <div className="h-full hidden md:block w-44 overflow-hidden xl:w-full px-3">
          {PRODUCT_TYPE.attributes.map((attribute, index) => (
            <FilterSectionWrapper
              key={`${attribute.name} + ${index}`}
              name={attribute.name}
              options={attribute.value}
            />
          ))}
        </div>

        <HorizontalList
          gutters={10}
          data={[1, 2, 3, 4, 5, 6, 7]}
          dataItem={RoomCard}
          xxl={3}
          xl={2}
          lg={2}
          md={2}
          sm={1}
          xs={1}
        />
      </AppRow>
    </main>
  );
};

export default Rooms;
