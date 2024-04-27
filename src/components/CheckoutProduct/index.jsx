import FurnitureCard from "../FurnitureCard";
import PropTypes from "prop-types";
import formattedCurrency from "../../utils/formattedCurrency";
import ProductVariation from "../../pages/ProductDetail/components/ProductVariation";
function CheckoutProduct({ activeTab, purchaseItems = [], totalPrice }) {
  const discount = 0;

  return (
    <section className="px-5 pb-6 lg:px-[60px] lg:pb-0 xl:px-[80px] xl:pb-0 2xl:px-[128px]">
      {activeTab === "summary" && (
        <section>
          <h2 className="text-[1.5rem] leading-[1.2] font-HelveticaBold tracking-[0.08em] pb-2">
            YOUR SUMMARY
          </h2>
          <p className="text-[14px] leading-[23.3px] tracking-[0.5px] pb-2">
            Here is your overview - great choice! Check to make sure everything
            is in order before proceeding to payment.
          </p>
          <p className="text-[14px] leading-[23.3px] tracking-[0.5px]">
            {purchaseItems.length} items
          </p>
        </section>
      )}
      <div className="pt-[2rem]">
        <ul className="list-none">
          {purchaseItems.map((item, index) => {
            const { name, quantity_in_cart, select_variation, variation } =
              item;
            return (
              <section key={index} className="text-[0.875rem] pb-16">
                <FurnitureCard item={item} key={`${name} + ${index}`}>
                  <FurnitureCard.Model className="" />
                  <section className="flex justify-between mt-10">
                    <a href="#">
                      <h2 className="text-[1.5rem] leading-[1.2] font-HelveticaBold tracking-[0.08em]">
                        {name}
                      </h2>
                    </a>
                    <p className="text-blackPrimary">
                      Quantity: {quantity_in_cart}
                    </p>
                  </section>
                  <div className="flex flex-col justify-between gap-4 ">
                    <FurnitureCard.Detail />
                    <section className="mb-4">
                      {select_variation.map((item, i) => {
                        const { variation_id, property_id } = item;
                        const currentVariation = variation.find(
                          (i) => i._id === variation_id
                        );
                        currentVariation.properties =
                          currentVariation.properties.filter(
                            (item) => item._id === property_id
                          );
                        return (
                          <ProductVariation
                            key={i}
                            currentVariation={currentVariation}
                            variation={currentVariation}
                          />
                        );
                      })}
                    </section>
                  </div>
                </FurnitureCard>
              </section>
            );
          })}
        </ul>
      </div>
      {activeTab !== "summary" && (
        <ul className="pt-8 list-none">
          <li className="flex flex-row justify-between items-center flex-wrap pt-[0.25rem] pb-[0.25rem] text-sm tracking-[0.5px] leading-[23.3px]">
            <span className="">Subtotal </span>
            <span>{formattedCurrency(totalPrice)}</span>
          </li>
          <li className="flex flex-row justify-between items-center flex-wrap pt-[0.25rem] pb-[0.25rem] text-sm tracking-[0.5px] leading-[23.3px]">
            <span className="">Discount </span>
            <span>{formattedCurrency(discount)}</span>
          </li>
          <li className="flex flex-row justify-between items-center pt-8 text-[1rem] tracking-[0.08em] font-HelveticaBold">
            <span className="">QUOTATION TOTAL </span>
            <span>{formattedCurrency(totalPrice - discount)}</span>
          </li>
        </ul>
      )}
    </section>
  );
}

CheckoutProduct.propTypes = {
  activeTab: PropTypes.string,
  cartData: PropTypes.object,
};
export default CheckoutProduct;
