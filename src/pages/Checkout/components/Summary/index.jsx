import CheckoutEdit from "@components/CheckoutEdit";
import FormCheckbox from "@components/FormCheckbox";
import AppModal from "@components/ui/AppModal";
import { CHECKOUT_TABS } from "@constants/checkoutTabConstants";
import useAuth from "@stores/useAuth";
import formattedCurrency from "@utils/formattedCurrency";
import { Form } from "antd";
import useCheckoutSummary from "../../../../hooks/useCheckoutSummary";
import useNavigation from "../../../../hooks/useNavigation";
import useVoucher from "../../../../hooks/useVoucher";
import CouponListModal from "../CouponListModal";

function Summary({ purchaseItems, totalPrice }) {
  const { accessToken } = useAuth();

  const { go_to_login } = useNavigation();

  const {
    selectedDelivery,
    selectedPayment,
    orderShipping,
    note,
    checkoutForGuest,
    checkoutForUser,
  } = useCheckoutSummary();

  const {
    dataAfterVoucher,
    setDataAfterVoucher,
    handleOpenCoupon,
    isCouponOpen,
    isCouponForUser,
  } = useVoucher();

  const orderProducts = purchaseItems.map((cart) => ({
    code: cart.code,
    product_id: cart._id,
    price: cart.sale_price,
    quantity: cart.quantity_in_cart,
    variation: cart.select_variation.map((item) => {
      const { property_id, variation_id, sub_price } = item;
      const body = {
        property_id: property_id,
        variation_id: variation_id,
        sub_price: sub_price,
      };
      return body;
    }),
  }));

  const onFinish = () => {
    accessToken
      ? checkoutForUser({
          order_products: orderProducts,
          payment_method: selectedPayment,
          order_shipping: orderShipping,
          order_checkout: {
            final_total: dataAfterVoucher
              ? dataAfterVoucher.order_total_after_voucher
              : totalPrice,
            voucher: dataAfterVoucher ? dataAfterVoucher.voucher : null,
            total: totalPrice,
          },
          note: note,
        })
      : checkoutForGuest({
          order_products: orderProducts,
          payment_method: selectedPayment,
          order_shipping: orderShipping,
          order_checkout: {
            final_total: totalPrice,
            total: totalPrice,
          },
          note: note,
        });
  };

  const quotationTotal = dataAfterVoucher
    ? dataAfterVoucher.order_total_after_voucher
    : totalPrice;

  const formattedQuotationTotal =
    quotationTotal >= 0
      ? formattedCurrency(quotationTotal)
      : formattedCurrency(0);

  const discount = dataAfterVoucher
    ? formattedCurrency((dataAfterVoucher.voucher.value / 100) * totalPrice)
    : "0,00đ";

  const isDeposit = selectedPayment === "COD" && quotationTotal >= 1000000;

  return (
    <section className="w-full lg:max-w-[43.75rem] text-[0.875rem] leading-[1.5] pb-[45px] tracking-[0.5px] pt-6 lg:pt-0">
      <Form
        className="max-w-[43.75rem]"
        name="summary"
        requiredMark="optional"
        labelCol={{
          span: 24,
        }}
        onFinish={onFinish}
      >
        <section className="pb-10">
          <CheckoutEdit
            title="BILLING ADDRESS"
            activeTab={CHECKOUT_TABS.billing}
          />
          <p className="text-[13px] leading-[23.3px] tracking-[0.5px]">
            {orderShipping.first_name + " " + orderShipping.last_name}
          </p>
          <p className="text-[14px] leading-[23.3px] tracking-[0.5px]">
            {orderShipping.address}
          </p>
          <p className="text-[14px] leading-[23.3px] tracking-[0.5px]">
            {orderShipping.ward}, {orderShipping.district}
          </p>
          <p className="text-[14px] leading-[23.3px] tracking-[0.5px]">
            {orderShipping.phone}
          </p>
          <p className="text-[14px] leading-[23.3px] tracking-[0.5px]">
            {orderShipping.email}
          </p>
        </section>

        <section className="pb-6">
          <CheckoutEdit
            title="DELIVERY METHOD"
            activeTab={CHECKOUT_TABS.delivery}
          />
          <p className="text-[13px] leading-[23.3px] tracking-[0.5px]">
            {selectedDelivery}
          </p>
        </section>

        <section className="pb-20">
          <CheckoutEdit
            title="PAYMENT METHOD"
            activeTab={CHECKOUT_TABS.payment}
          />
          <p className="text-[13px] leading-[23.3px] tracking-[0.5px] font-HelveticaBold">
            {selectedPayment}
          </p>
          <p className="text-[13px] leading-[23.3px] tracking-[0.5px] ">
            Pay 50% of the order total when placing the final order and the rest
            of the amount (50%) upon delivery. (you will receive an email when
            it is time to make the rest payment. Terms & Conditions and
            applicable sales tax will be attached when you receive your order
            from the store. The request for a quotation does not constitute any
            legally binding contract between you and the applicable store.
          </p>
        </section>

        <section className="border-b border-blackPrimary pb-[30px]">
          <p className="text-[18px] leading-[34.2px] tracking-[0.5px] font-HelveticaBold">
            Your comment:
          </p>
          <p className="text-[13px] leading-[23.3px] tracking-[0.5px]">
            {note}
          </p>
        </section>

        <>
          <div className="flex flex-row justify-between items-center mt-3">
            <div
              onClick={handleOpenCoupon}
              className="text-sm font-medium flex flex-row justify-between cursor-pointer hover:no-underline underline hover:text-secondary"
            >
              Apply coupon code
            </div>
            {dataAfterVoucher && (
              <p className="text-[13px] font-HelveticaBold">
                {dataAfterVoucher.voucher.code}
              </p>
            )}
          </div>
          {accessToken ? (
            <AppModal
              isOpen={isCouponOpen}
              onClose={handleOpenCoupon}
              className="w-[450px] lg:w-[650px]"
            >
              {isCouponOpen && (
                <CouponListModal
                  setIsModalCreateOpen={handleOpenCoupon}
                  setDataAfterVoucher={setDataAfterVoucher}
                />
              )}
            </AppModal>
          ) : (
            <AppModal
              isOpen={isCouponForUser}
              onClose={handleOpenCoupon}
              className="max-w-[700px] h-[200px]"
            >
              <div className="flex flex-col gap-6">
                <p className="text-xl font-bold">
                  Coupon codes can only be used by efurniture members. Login
                  now?
                </p>
                <div className="flex gap-2 ml-auto">
                  <button
                    className="furniture-button-black-hover px-6 py-2.5"
                    onClick={go_to_login}
                  >
                    Login
                  </button>
                  <button
                    className="furniture-button-white-hover px-6 py-2.5"
                    onClick={handleOpenCoupon}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </AppModal>
          )}
        </>

        <ul className="pt-8 list-none">
          <li className="flex flex-row justify-between items-center flex-wrap pt-[0.25rem] pb-[0.25rem] text-sm tracking-[0.5px] leading-[23.3px]">
            <span className="">Subtotal </span>
            <span>{formattedCurrency(totalPrice)}</span>
          </li>
          <li className="flex flex-row justify-between items-center flex-wrap pt-[0.25rem] pb-[0.25rem] text-sm tracking-[0.5px] leading-[23.3px]">
            <span className="">Discount </span>
            <span>{discount}</span>
          </li>
          <li className="flex flex-row justify-between items-center flex-wrap pt-[0.25rem] pb-[0.25rem] text-sm tracking-[0.5px] leading-[23.3px]">
            <span className="">QUOTATION TOTAL </span>
            <span>{formattedQuotationTotal}</span>
          </li>
        </ul>

        <ul className="pt-8 list-none">
          <li className="flex flex-row justify-between items-center font-HelveticaBold uppercase text-[16px] leading-[1.67] tracking-[0.08em]">
            <span className="flex flex-col items-baseline gap-[1.25rem]">
              total payment now
            </span>
            <span className="">{formattedQuotationTotal}</span>
          </li>
          {isDeposit && (
            <li className="flex flex-row justify-between items-center flex-wrap pt-[0.25rem] pb-[0.25rem] text-sm tracking-[0.5px] leading-[23.3px]">
              <span>Deposit amount needs to be paid </span>
              <span>{formattedCurrency(quotationTotal * 0.1)}</span>
            </li>
          )}
        </ul>

        <section className="pt-12">
          <div className="flex flex-row items-center gap-3 pb-4">
            <FormCheckbox name="terms" type="checkbox" valuePropName={true}>
              <span>
                {" "}
                I agree to the{" "}
                <a href="#" className="underline">
                  terms and conditions
                </a>{" "}
                of the shop
              </span>
            </FormCheckbox>
          </div>
          <div className="text-[13px] leading-[24.7px] tracking-[0.5px] pb-4">
            <p className="pt-4">
              At eFurniture we do not have all our products in stock, as most of
              our furniture is made just for you and your home.
            </p>
            <p className="pt-4">Our normal delivery time is</p>
            <ul className="pt-4">
              <li>3 - 4 weeks for board furniture</li>
              <li>6 - 7 weeks for upholstery furniture</li>
            </ul>
          </div>
        </section>

        <button className="furniture-button-black-hover w-full px-[55px] py-[14px] text-[0.6875rem] tracking-[0.125rem] mt-6">
          purchase now
        </button>
      </Form>
    </section>
  );
}

export default Summary;
