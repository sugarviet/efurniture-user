import FurnitureCard from "../FurnitureCard";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { useOrderStore } from "../../stores/useGuestOrderStore";
import useCart from "../../hooks/useCart";

function CheckoutProduct({ activeTab }) {
  const { setOrderProducts, setTotal } = useOrderStore();

  const { cart } = useCart();

  //   const order_products = cartData?.map((item) => ({
  //     product_id: item.id,
  //     quantity: item.quantity,
  //     price: item.price,
  //     location: item.location,
  //   }));

  //   useEffect(() => {
  //     const totalPrice = cartData.reduce((total, item) => total + item.price, 0);
  //     setOrderProducts(order_products);
  //     setTotal(totalPrice);
  //   }, []);

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
                  <FurnitureCard.Model className="w-full top-8 sm:top-20 md:top-32" />
                  <section className="flex flex-rol justify-between pt-[8%] sm:pt-[20%] md:pt-[28%]">
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
          <span>₫ 64.770.000,00</span>
        </li>
        <li className="flex flex-row justify-between items-center flex-wrap pt-[0.25rem] pb-[0.25rem] text-sm tracking-[0.5px] leading-[23.3px]">
          <span className="">Store Contact </span>
          <span>₫ 0,00</span>
        </li>
        <li className="flex flex-row justify-between items-center pt-8 text-[1rem] tracking-[0.08em] font-HelveticaBold">
          <span className="">QUOTATION TOTAL </span>
          <span>₫ 64.770.000,00</span>
        </li>
        <li className="flex flex-row justify-between items-center mt-[-0.3125rem] pb-[0.25rem] text-[0.75rem] leading-[2] tracking-[0.05em] text-grey1">
          <span className="">VAT part of total </span>
          <span>₫ 5.888.182,00</span>
        </li>
      </ul>
    </section>
  );
}

CheckoutProduct.propTypes = {
  activeTab: PropTypes.string,
};
export default CheckoutProduct;
