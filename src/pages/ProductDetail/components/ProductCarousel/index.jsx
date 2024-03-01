import Sliders from "@components/Slider";

function ProductCarousel({ thumbs }) {
  return (
    <section className="w-full bg-white cursor-zoom-in">
      <Sliders initialSlide={1} slideToScroll={1} slideToShow={1}>
        {thumbs.map((thumb, index) => (
          <div
            className="flex items-center justify-center h-full w-full bg-white"
            key={index}
          >
            <img className="w-[50%] mx-auto my-auto" src={thumb} />
          </div>
        ))}
      </Sliders>
    </section>
  );
}

export default ProductCarousel;
