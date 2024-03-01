import Sliders from "@components/Slider";

const productImageDetail = [
]
  {
    img: "https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dwce7ff147/images/2070000/2072649.jpg?sw=2000",
  },
  {
    img: "https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dwc4372027/images/2070000/2072646.jpg?sw=2000",
  },
  {
    img: "https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dw9b987dee/images/2080000/2082878.jpg?sfrm=jpg",
  },
  {
    img: "https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dw29c950f7/images/2080000/2082536.jpg?sw=2000",
  },
  {
    img: "https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dwc854715e/images/2100000/2105829.jpg?sw=2000",
  },
];
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
