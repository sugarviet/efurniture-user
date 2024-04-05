import useScroll from "@hooks/useScroll";
import formattedCurrency from "@utils/formattedCurrency";
import formattedDate from "@utils/formattedDate";
import PropTypes from "prop-types";
import useNavigation from "../../../../hooks/useNavigation";
import OrderActionButton from "../../../../components/OrderActionButton";
import ProductOrderBriefInfo from "../ProductOrderBriefInfo";
import OrderPaidMessage from "../../../../components/OrderPaidMessage";

function OrderHistoryCard({ data }) {
  const { handleScrollToTop } = useScroll();

  const { go_to_order_detail } = useNavigation();

  return (
    <section className="my-4">
      <div className="bg-[#F7F7F6] px-8 py-4 border-b-grey5 border-[1px]">
        <section
          className="flex flex-row justify-between g
                ap-20"
        >
          <div className="flex flex-row  gap-10 2xl:gap-16">
            <article className="flex flex-col">
              <p className="text-[14px] text-grey1 leading-[1.4] tracking-[0.04em]">
                Ordered
              </p>
              <p className="text-[14px] font-medium leading-[1.4] tracking-[0.04em]">
                {formattedDate(data.createdAt)}
              </p>
            </article>
            <article className="flex flex-col">
              <p className="text-[14px] text-grey1 leading-[1.4] tracking-[0.04em]">
                Total
              </p>
              <p className="text-[14px] font-medium leading-[1.4] tracking-[0.04em]">
                {formattedCurrency(data.order_checkout.final_total)}
              </p>
            </article>
            <article className="flex flex-col">
              <p className="text-[14px] text-grey1 leading-[1.4] tracking-[0.04em]">
                Payment method
              </p>
              <p className="text-[14px] font-medium leading-[1.4] tracking-[0.04em]">
                {data.payment_method}
              </p>
            </article>
          </div>
          <div className="pl-4">
            <div className="flex flex-col">
              <p className="text-[14px] font-medium leading-[1.4] tracking-[0.04em]">
                Order # {data.order_code}
              </p>
              <div className="flex flex-row items-center">
                <p
                  className="font-medium text-[14px] text-grey1 leading-[1.4] tracking-[0.04em] cursor-pointer underline pr-2"
                  onClick={() => {
                    go_to_order_detail(data._id), handleScrollToTop();
                  }}
                >
                  View order details
                </p>
                <p className="border-r-[1px] border-grey3 h-4 mt-1"></p>
                <p className="font-HelveticaBold text-[16px] text-green-700 leading-[1.4] tracking-[0.04em] pl-2">
                  {data.current_order_tracking.name}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="border-x-[1px] px-8 py-4 border-b-[1px] border-x-grey5 border-b-grey5">
        {data.order_products.map((product, index) => (
          <ProductOrderBriefInfo key={index} product={product} />
        ))}
        <div className="flex flex-row justify-between items-center gap-4 mt-8">
          <div>
            <OrderPaidMessage order={data}/>
          </div>
          <div className="">
            <OrderActionButton
              data={data}
              type={data.current_order_tracking.name}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
OrderHistoryCard.propTypes = {
  data: PropTypes.object,
};

export default OrderHistoryCard;
