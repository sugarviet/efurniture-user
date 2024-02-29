import ProductAddToCart from "@components/ProductAddToCart";
import ProductCarousel from "./components/ProductCarousel";
import ProductInfo from "./components/ProductInfo";
import { get_furniture_detail_api } from "../../api/furnitureApi";
import { withFetchData } from "../../hocs/withFetchData";
import formattedCurrency from "../../utils/formattedCurrency";
import { FurnitureDetailProvider } from "./ProductDetailContext";

function ProductDetail({ data }) {
  const { name, price } = data;
  return (
    <FurnitureDetailProvider furniture={data}>
      <article className="furniture-promotion mt-7">
        <div>SALE EKSTRAORDINÆR</div>
      </article>

      <section className="relative">
        <div className="z-50 absolute top-[1.25rem] left-[2.5rem]">
          <a className="text-[0.75rem] font-HelveticaBold flex flex-row gap-2 cursor-pointer">
            <img src="data:image/svg+xml;charset=utf-8;base64,PHN2ZyB3aWR0aD0nOCcgaGVpZ2h0PScxMycgdmlld0JveD0nMCAwIDggMTMnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgZmlsbD0nIzIyMic+IDxwYXRoIGQ9J003LjA5MyAxMS41NzlsLS43MDcuNzA3LTUuNzQtNS43NCA1LjktNS45LjcwNy43MDgtNS4xOTIgNS4xOTJ6Jy8+IDwvc3ZnPg==" />
            <span className="text-blackPrimary">DINING TABLES</span>
          </a>
        </div>
        <ProductCarousel />
        <section className="px-4 py-6  md:px-8 md:pt-16">
          <div className="flex flex-col lg:flex-row lg:justify-between">
            <div className="lg:pl-6 xl:pl-24 max-w-[50rem] lg:max-w-[25rem] 2xl:max-w-[10rem] min-w-[50%]">
              <article className="pb-12 text-left">
                <p className="text-[1rem] sm:text-[1.5rem] font-HelveticaBold leading-[1.2] tracking-[0.08em]">
                  {name}
                </p>
              </article>
              <ProductInfo />
            </div>
            <div className="lg:pr-6 xl:pr-24 max-w-[36.25rem] w-[100%] lg:w-[40%] 2xl:w-[100%] pt-8 sm:pt-0">
              <article className="text-left sm:text-right">
                <span className="line-through text-grey2 text-[11px] sm:text-sm">
                  {formattedCurrency(price)}
                </span>
                <span className="block text-base sm:text-[1.5rem] text-blackPrimary tracking-[0.0313rem] font-HelveticaBold">
                  {formattedCurrency(price)}
                  <div className="text-[11px] sm:text-[0.875rem] text-grey2 font-HelveticaRoman">
                    Rec. retail price
                  </div>
                </span>
              </article>
              <ProductAddToCart />
              <div className="mt-2 flex flex-col justify-center items-center gap-[0.5rem] text-grey3 flex-wrap text-[0.8125rem] leading-[1.77] tracking-[0.0384]">
                <span className="">
                  Expected delivery: 2-3 days in Ho Chi Minh city
                </span>
                <a className="underline">Delivery and returns</a>
              </div>
            </div>
          </div>
          <div className="furniture-divided-bottom w-full py-4 sm:py-8"></div>
        </section>
      </section>
    </FurnitureDetailProvider>
  );
}

export default withFetchData(ProductDetail, get_furniture_detail_api);
