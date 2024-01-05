import SectionIntro from "../../components/SectionIntro";

const SECTION_INTRO_OPTION = {
  img_url:
    "https://p3.aprimocdn.net/boconcept/1167e952-9f27-4bd6-bb63-ae75008651a3/AW22%20099_WEB-ImageCollageLarge-T-950x470.jpg",
  title: "sofas",
  description:
    "Shop designer sofas, crafted with quality materials and designed to enhance any living space to experience luxury and comfort. Pick your style to customise.",
};

const Products = () => {
  return (
    <>
      <SectionIntro {...SECTION_INTRO_OPTION} />
      <section className="w-full font-semibold h-12 flex items-center justify-center bg-red-600 text-white uppercase">
        sale extraordinary
      </section>
    </>
  );
};

export default Products;
