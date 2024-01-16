import Sliders from "@components/Slider";

const bestsellers = [
  {
    url: 'https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dwce7ff147/images/2070000/2072649.jpg?sw=1200',
    name: "Santiago dining table",
    color: 'https://www.boconcept.com/on/demandware.static/-/Sites-master-catalog/default/dwb27f4b3c/coloricons/color-dots-board-75x26.png',
    material: 'White, Grey, Ceramic',
    price: 105900000,
  },
  {
    url: 'https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dw3610a825/images/2070000/2078844.jpg?sw=1200',
    name: "Salamanca 3 seater lounge sofa",
    color: 'https://www.boconcept.com/on/demandware.static/-/Sites-master-catalog/default/dwfe5c3cb1/coloricons/color-dots-polster-75x26.png',
    material: 'Brown, Fabric, Metal',
    price: 105900000,
  },
  {
    url: 'https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dw16ac02fc/images/2070000/2073445.jpg?sw=1200',
    name: "Calgary storage with drawer",
    color: 'https://www.boconcept.com/on/demandware.static/-/Sites-master-catalog/default/dwb27f4b3c/coloricons/color-dots-board-75x26.png',
    material: 'Black, Wood',
    price: 105900000,
  },
  {
    url: 'https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dw6ecd2118/images/2010000/2017723.jpg?sw=1200',
    name: "Berne 3 seater",
    color: 'https://www.boconcept.com/on/demandware.static/-/Sites-master-catalog/default/dwfe5c3cb1/coloricons/color-dots-polster-75x26.png',
    material: 'Light grey, Fabric, Metal',
    price: 105900000,
  },
  {
    url: 'https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dw4f08e587/images/2010000/2019977.jpg?sw=1200',
    name: "Hamilton chair",
    color: 'https://www.boconcept.com/on/demandware.static/-/Sites-master-catalog/default/dwb27f4b3c/coloricons/color-dots-board-75x26.png',
    material: 'Black metal',
    price: 105900000,
  },
  {
    url: 'https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dwf25624f6/images/2010000/2019519.jpg?sw=1200',
    name: "Hamilton chair",
    color: 'https://www.boconcept.com/on/demandware.static/-/Sites-master-catalog/default/dwb27f4b3c/coloricons/color-dots-board-75x26.png',
    material: 'White, Grey, Ceramic',
    price: 105900000,
  },
  {
    url: 'https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dwe5f9ae74/images/2010000/2016066.jpg?sw=1200',
    name: "Hamilton chair",
    color: 'https://www.boconcept.com/on/demandware.static/-/Sites-master-catalog/default/dwb27f4b3c/coloricons/color-dots-board-75x26.png',
    material: 'White, Grey, Ceramic',
    price: 105900000,
  },
  {
    url: 'https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dw5f7ec034/images/2000000/2000028.jpg?sw=1200',
    name: "Hamilton chair",
    color: 'https://www.boconcept.com/on/demandware.static/-/Sites-master-catalog/default/dwb27f4b3c/coloricons/color-dots-board-75x26.png',
    material: 'White, Grey, Ceramic',
    price: 105900000,
  },
  {
    url: 'https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dwf6fe67af/images/1680000/1683339.jpg?sw=1200',
    name: "Hamilton chair",
    color: 'https://www.boconcept.com/on/demandware.static/-/Sites-master-catalog/default/dwb27f4b3c/coloricons/color-dots-board-75x26.png',
    material: 'White, Grey, Ceramic',
    price: 105900000,
  },
  {
    url: 'https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dwa9f2b67a/images/640000/643130.jpg?sw=1200',
    name: "Hamilton chair",
    color: 'https://www.boconcept.com/on/demandware.static/-/Sites-master-catalog/default/dwb27f4b3c/coloricons/color-dots-board-75x26.png',
    material: 'White, Grey, Ceramic',
    price: 105900000,
  },
  {
    url: 'https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dwe151cf35/images/1500000/1504516.jpg?sw=1200',
    name: "Hamilton chair",
    color: 'https://www.boconcept.com/on/demandware.static/-/Sites-master-catalog/default/dwb27f4b3c/coloricons/color-dots-board-75x26.png',
    material: 'White, Grey, Ceramic',
    price: 105900000,
  },
  {
    url: 'https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dwbc0ac763/images/1550000/1558154.jpg?sw=1200',
    name: "Hamilton chair",
    color: 'https://www.boconcept.com/on/demandware.static/-/Sites-master-catalog/default/dwb27f4b3c/coloricons/color-dots-board-75x26.png',
    material: 'White, Grey, Ceramic',
    price: 105900000,
  },
  {
    url: 'https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dwf1d9d3db/images/1530000/1531445.jpg?sw=1200',
    name: "Hamilton chair",
    color: 'https://www.boconcept.com/on/demandware.static/-/Sites-master-catalog/default/dwb27f4b3c/coloricons/color-dots-board-75x26.png',
    material: 'White, Grey, Ceramic',
    price: 105900000,
  },
];


const BestSellersSlider = () => {

  return (
    <div>
      <Sliders initialSlide={3} slideToSscroll={4} slideToShow={4}>
        {bestsellers.map((product, index) => (
          <main className="w-[345.476px] h-full border border-border border-r-0 bg-white pb-[0.5rem]" key={index}>
            <figure className="block mb-[0.9375rem] pb-[60%] pt-[13%] h-0">
              <img className='relative left-[10%] w-[80%] object-cover ' src={product.url} />
            </figure>
            <section className="px-[18px] h-full flex flex-col justify-between gap-4">
              <div>
                <figure className="pointer-events-none">
                  <img className="h-[1.625rem]" src={product.color} />
                </figure>
                <nav className="text-xs tracking-[0.9px] text-black mt-[0.75rem]">
                  <a href="#">{product.name}</a>
                </nav>
                <div className="text-[0.6875rem] text-grey2 tracking-[0.5px]">{product.material}</div>
              </div>
              <section className="flex items-end gap-[0.8em] py-4">
                <div className="flex justify-between gap-[0.5rem] w-full text-blackPrimary text-left">
                  <article className="flex flex-wrap">
                    <div className="order-1 w-full flex-shrink-0 text-grey2 text-[0.6875rem] mb-[0.1875rem] tracking-[0.4px]">Rec. retail price</div>
                    <span className="order-2 mr-[0.625rem] text-xs tracking-[0.9px] text-black">{product.price.toLocaleString('vi', { style: 'currency', currency: 'VND' })}</span>
                  </article>
                  <p className="text-[0.6875rem] tracking-[0.4px] text-grey2 text-right">
                    Prices from <br />
                    <span>{product.price.toLocaleString('vi', { style: 'currency', currency: 'VND' })}</span>
                  </p>
                </div>
              </section>
            </section>
          </main>
        ))}
      </Sliders>
    </div>
  )
}

export default BestSellersSlider