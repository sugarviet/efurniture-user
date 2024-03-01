import FurnitureCard from "../FurnitureCard";
import PropTypes from "prop-types";
import useCart from "../../hooks/useCart";
import formattedCurrency from "../../utils/formattedCurrency";

function CheckoutProduct({ activeTab }) {
  const discount = 0;

  const { cart, getTotalPrice } = useCart();

  return (
    <section className="px-5 pb-6 lg:pl-[112px] lg:pr-[128px] lg:pb-0">
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
            {cart.length} items
          </p>
        </section>
      )}
      <div className="pt-[2rem]">
        <ul className="list-none">
          {cart.map((item, index) => {
            const { name, quantity } = item;
            return (
              <section key={index} className="text-[0.875rem] ">
                <FurnitureCard item={item} key={`${name} + ${index}`}>
                  <FurnitureCard.Model />
                  <section className="flex justify-between">
                    <a href="#">
                      <h2 className="text-[1.5rem] leading-[1.2] font-HelveticaBold tracking-[0.08em]">
                        {name}
                      </h2>
                    </a>
                    <p className="text-blackPrimary">Quantity: {quantity}</p>
                  </section>
                  <div className="flex flex-col justify-between gap-4 ">
                    <FurnitureCard.Detail />
                  </div>
                </FurnitureCard>
              </section>
            );
          })}
        </ul>
      </div>
      <ul className="pt-8 list-none">
        <li className="flex flex-row justify-between items-center flex-wrap pt-[0.25rem] pb-[0.25rem] text-sm tracking-[0.5px] leading-[23.3px]">
          <span className="">Subtotal </span>
          <span>{formattedCurrency(getTotalPrice())}</span>
        </li>
        <li className="flex flex-row justify-between items-center flex-wrap pt-[0.25rem] pb-[0.25rem] text-sm tracking-[0.5px] leading-[23.3px]">
          <span className="">Discount </span>
          <span>{formattedCurrency(discount)}</span>
        </li>
        <li className="flex flex-row justify-between items-center pt-8 text-[1rem] tracking-[0.08em] font-HelveticaBold">
          <span className="">QUOTATION TOTAL </span>
          <span>{formattedCurrency(getTotalPrice() - discount)}</span>
        </li>
      </ul>
    </section>
  );
}

CheckoutProduct.propTypes = {
  activeTab: PropTypes.string,
};
export default CheckoutProduct;
