import Sliders from "@components/Slider";
import FurnitureCard from "../../../../components/FurnitureCard";

const bestsellers = [
  {
    url: "https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dwce7ff147/images/2070000/2072649.jpg?sw=1200",
    name: "Santiago dining table",
    color:
      "https://www.boconcept.com/on/demandware.static/-/Sites-master-catalog/default/dwb27f4b3c/coloricons/color-dots-board-75x26.png",
    material: "White, Grey, Ceramic",
    price: 105900000,
  },
  {
    url: "https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dw3610a825/images/2070000/2078844.jpg?sw=1200",
    name: "Salamanca 3 seater lounge sofa",
    color:
      "https://www.boconcept.com/on/demandware.static/-/Sites-master-catalog/default/dwfe5c3cb1/coloricons/color-dots-polster-75x26.png",
    material: "Brown, Fabric, Metal",
    price: 105900000,
  },
  {
    url: "https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dw16ac02fc/images/2070000/2073445.jpg?sw=1200",
    name: "Calgary storage with drawer",
    color:
      "https://www.boconcept.com/on/demandware.static/-/Sites-master-catalog/default/dwb27f4b3c/coloricons/color-dots-board-75x26.png",
    material: "Black, Wood",
    price: 105900000,
  },
  {
    url: "https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dw6ecd2118/images/2010000/2017723.jpg?sw=1200",
    name: "Berne 3 seater",
    color:
      "https://www.boconcept.com/on/demandware.static/-/Sites-master-catalog/default/dwfe5c3cb1/coloricons/color-dots-polster-75x26.png",
    material: "Light grey, Fabric, Metal",
    price: 105900000,
  },
  {
    url: "https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dw4f08e587/images/2010000/2019977.jpg?sw=1200",
    name: "Hamilton chair",
    color:
      "https://www.boconcept.com/on/demandware.static/-/Sites-master-catalog/default/dwb27f4b3c/coloricons/color-dots-board-75x26.png",
    material: "Black metal",
    price: 105900000,
  },
  {
    url: "https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dwf25624f6/images/2010000/2019519.jpg?sw=1200",
    name: "Hamilton chair",
    color:
      "https://www.boconcept.com/on/demandware.static/-/Sites-master-catalog/default/dwb27f4b3c/coloricons/color-dots-board-75x26.png",
    material: "White, Grey, Ceramic",
    price: 105900000,
  },
  {
    url: "https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dwe5f9ae74/images/2010000/2016066.jpg?sw=1200",
    name: "Hamilton chair",
    color:
      "https://www.boconcept.com/on/demandware.static/-/Sites-master-catalog/default/dwb27f4b3c/coloricons/color-dots-board-75x26.png",
    material: "White, Grey, Ceramic",
    price: 105900000,
  },
  {
    url: "https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dw5f7ec034/images/2000000/2000028.jpg?sw=1200",
    name: "Hamilton chair",
    color:
      "https://www.boconcept.com/on/demandware.static/-/Sites-master-catalog/default/dwb27f4b3c/coloricons/color-dots-board-75x26.png",
    material: "White, Grey, Ceramic",
    price: 105900000,
  },
  {
    url: "https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dwf6fe67af/images/1680000/1683339.jpg?sw=1200",
    name: "Hamilton chair",
    color:
      "https://www.boconcept.com/on/demandware.static/-/Sites-master-catalog/default/dwb27f4b3c/coloricons/color-dots-board-75x26.png",
    material: "White, Grey, Ceramic",
    price: 105900000,
  },
  {
    url: "https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dwa9f2b67a/images/640000/643130.jpg?sw=1200",
    name: "Hamilton chair",
    color:
      "https://www.boconcept.com/on/demandware.static/-/Sites-master-catalog/default/dwb27f4b3c/coloricons/color-dots-board-75x26.png",
    material: "White, Grey, Ceramic",
    price: 105900000,
  },
  {
    url: "https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dwe151cf35/images/1500000/1504516.jpg?sw=1200",
    name: "Hamilton chair",
    color:
      "https://www.boconcept.com/on/demandware.static/-/Sites-master-catalog/default/dwb27f4b3c/coloricons/color-dots-board-75x26.png",
    material: "White, Grey, Ceramic",
    price: 105900000,
  },
  {
    url: "https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dwbc0ac763/images/1550000/1558154.jpg?sw=1200",
    name: "Hamilton chair",
    color:
      "https://www.boconcept.com/on/demandware.static/-/Sites-master-catalog/default/dwb27f4b3c/coloricons/color-dots-board-75x26.png",
    material: "White, Grey, Ceramic",
    price: 105900000,
  },
  {
    url: "https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dwf1d9d3db/images/1530000/1531445.jpg?sw=1200",
    name: "Hamilton chair",
    color:
      "https://www.boconcept.com/on/demandware.static/-/Sites-master-catalog/default/dwb27f4b3c/coloricons/color-dots-board-75x26.png",
    material: "White, Grey, Ceramic",
    price: 105900000,
  },
];

const BestSellersSlider = () => {
  return (
    <div>
      <Sliders initialSlide={3} slideToScroll={4} slideToShow={4}>
        {bestsellers.map((item, index) => (
          <div
            className="w-[345.476px] h-full border border-border border-r-0 bg-white pb-[0.5rem]"
            key={index}
          >
            <FurnitureCard item={item} key={`${item.name} + ${index}`}>
              <FurnitureCard.Model className="w-[80%] top-6"/>
              <div className="px-[18px] flex flex-col justify-between gap-4">
                <FurnitureCard.Attribute />
                <FurnitureCard.Price />
              </div>
            </FurnitureCard>
          </div>
        ))}
      </Sliders>
    </div>
  );
};

export default BestSellersSlider;
