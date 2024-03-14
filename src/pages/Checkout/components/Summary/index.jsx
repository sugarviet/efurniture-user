import { useState } from "react";
import CheckoutEdit from "@components/CheckoutEdit";
import { CHECKOUT_TABS } from "@constants/checkoutTabConstants";
import { usePost, usePostAuth } from "@hooks/api-hooks";
import { message } from "antd";
import { checkout_with_guest, checkout_with_user } from "@api/checkoutApi";
import { useOrderStore } from "@stores/useGuestOrderStore";
import AppModal from "@components/ui/AppModal";
import CouponListModal from "../CouponListModal";
import useAuth from "@stores/useAuth";
import useUserCart from "@hooks/useUserCart";
import useGuestCart from "@hooks/useGuestCart";
import formattedCurrency from "@utils/formattedCurrency";
import useNavigation from "../../../../hooks/useNavigation";
import { Form } from "antd";
import FormInput from "@components/FormInput";
import FormCheckbox from "@components/FormCheckbox";

function Summary() {

  const { accessToken } = useAuth();

  const { go_to_payment, go_to_order_confirmation } = useNavigation();

  const { cart, getTotalPrice } = accessToken ? useUserCart() : useGuestCart();

  const {
    selectedDelivery,
    selectedPayment,
    orderShipping,
    note,
  } = useOrderStore();

  const [dataAfterVoucher, setDataAfterVoucher] = useState();

  const [isCouponOpen, setIsCouponOpen] = useState(false);

  const orderProducts = cart.map((cart) => ({
    product_id: cart._id,
    quantity: cart.quantity_in_cart,
    price: cart.sale_price > 0 ? cart.sale_price : cart.regular_price,
    name: cart.name,
    thumb: cart.thumbs[0]
  }))

  const handlePaymentMethod = (metaData) => {
    if (metaData.payment_method === "COD") {
      go_to_order_confirmation(metaData);
    } else {
      go_to_payment(metaData);
    }
  };

  const { mutate: checkoutForGuest } = usePost(
    checkout_with_guest(),
    undefined,
    (data) => {
      go_to_payment(data.data.metaData);
    },
    (error) => {
      message.error(error.response.data.error.message);
    }
  );
  const { mutate: checkoutForUser } = usePostAuth(
    checkout_with_user(),
    undefined,
    (data) => {
      handlePaymentMethod(data.data.metaData)
    },
    (error) => {
      message.error(error.response.data.error.message);
    }
  );

  const onFinish = (values) => {
    accessToken ?
      checkoutForUser(
        {
          order_products: orderProducts,
          payment_method: selectedPayment,
          order_shipping: orderShipping,
          order_checkout: {
            final_total: dataAfterVoucher ? dataAfterVoucher.order_total_after_voucher : getTotalPrice(),
            voucher: dataAfterVoucher ? dataAfterVoucher.voucher : null,
            total: getTotalPrice(),
          },
          note: note,
        }
      ) :
      checkoutForGuest(
        {
          order_products: orderProducts,
          payment_method: selectedPayment,
          order_shipping: orderShipping,
          order_checkout: {
            final_total: getTotalPrice(),
            total: getTotalPrice(),
          },
          note: note,
        }
      )
    console.log(values)
  };

  const handleOpenCoupon = () => {
    setIsCouponOpen(!isCouponOpen);
  }

  return (
    <section className='w-full lg:max-w-[43.75rem] text-[0.875rem] leading-[1.5] pb-[45px] tracking-[0.5px] pt-6 lg:pt-0'>
      <Form
        className="max-w-[43.75rem]"
        name="summary"
        labelCol={{
          span: 24,
        }}
        onFinish={onFinish}
      >
        <section className='pb-10'>
          <CheckoutEdit title="BILLING ADDRESS" activeTab={CHECKOUT_TABS.billing} />
          <p className='text-[13px] leading-[23.3px] tracking-[0.5px]'>{orderShipping.first_name + " " + orderShipping.last_name}</p>
          <p className='text-[14px] leading-[23.3px] tracking-[0.5px]'>{orderShipping.address}</p>
          <p className='text-[14px] leading-[23.3px] tracking-[0.5px]'>{orderShipping.ward}, {orderShipping.district}</p>
          <p className='text-[14px] leading-[23.3px] tracking-[0.5px]'>{orderShipping.phone}</p>
          <p className='text-[14px] leading-[23.3px] tracking-[0.5px]'>{orderShipping.email}</p>
        </section>

        <section className="pb-6">
          <CheckoutEdit title="DELIVERY METHOD" activeTab={CHECKOUT_TABS.delivery} />
          <p className='text-[13px] leading-[23.3px] tracking-[0.5px]'>{selectedDelivery}</p>
        </section>

        <section className="pb-20">
          <CheckoutEdit title="PAYMENT METHOD" activeTab={CHECKOUT_TABS.payment} />
          <p className='text-[13px] leading-[23.3px] tracking-[0.5px] font-HelveticaBold'>{selectedPayment}</p>
          <p className='text-[13px] leading-[23.3px] tracking-[0.5px] '>Pay 50% of the order total when placing the final order and the rest of the amount (50%) upon delivery. (you will receive an email when it is time to make the rest payment.
            Terms & Conditions and applicable sales tax will be attached when you receive your order from the store. The request for a quotation does not constitute any legally binding contract between you and the applicable store.</p>
        </section>

        <section className="border-b border-blackPrimary pb-[30px]">
          <p className="text-[18px] leading-[34.2px] tracking-[0.5px] font-HelveticaBold">Your comment:</p>
          <p className='text-[13px] leading-[23.3px] tracking-[0.5px]'>{note}</p>
        </section>

        {accessToken &&
          <>
            <div className="flex flex-row justify-between items-center mt-3">
              <div onClick={handleOpenCoupon} className="text-sm font-medium flex flex-row justify-between cursor-pointer hover:no-underline underline hover:text-secondary">
                Apply coupon code
              </div>
              {dataAfterVoucher &&
                <p className="text-[13px] font-HelveticaBold">{dataAfterVoucher.voucher.code}</p>
              }
            </div>
            <AppModal isOpen={isCouponOpen} onClose={handleOpenCoupon} className="max-w-[700px]">
              <CouponListModal setIsModalCreateOpen={handleOpenCoupon} setDataAfterVoucher={setDataAfterVoucher} />
            </AppModal>
          </>
        }

        <ul className="pt-8 list-none">
          <li className="flex flex-row justify-between items-center flex-wrap pt-[0.25rem] pb-[0.25rem] text-sm tracking-[0.5px] leading-[23.3px]">
            <span className="">Subtotal </span>
            <span>{formattedCurrency(getTotalPrice())}</span>
          </li>
          <li className="flex flex-row justify-between items-center flex-wrap pt-[0.25rem] pb-[0.25rem] text-sm tracking-[0.5px] leading-[23.3px]">
            <span className="">Discount </span>
            <span>
              {dataAfterVoucher ?
                formattedCurrency(dataAfterVoucher.voucher.value / 100 * getTotalPrice())
                :
                "0,00đ"
              }
            </span>
          </li>
          <li className="flex flex-row justify-between items-center flex-wrap pt-[0.25rem] pb-[0.25rem] text-sm tracking-[0.5px] leading-[23.3px]">
            <span className="">QUOTATION TOTAL </span>
            <span>
              {dataAfterVoucher ?
                formattedCurrency(dataAfterVoucher.order_total_after_voucher)
                :
                formattedCurrency(getTotalPrice())
              }
            </span>
          </li>
          <li className="flex flex-row justify-between items-center mt-[-0.3125rem] pb-[0.25rem] text-[0.75rem] leading-[2] tracking-[0.05em] text-grey2">
            <span className="">VAT part of total </span>
            <span>0,00 ₫</span>
          </li>
        </ul>

        <ul className="pt-8 list-none">
          <li className="flex flex-row justify-between items-center font-HelveticaBold uppercase text-[16px] leading-[1.67] tracking-[0.08em]">
            <span className="flex flex-col items-baseline gap-[1.25rem]">
              total payment now
              <span className="font-HelveticaRoman text-grey2 text-[0.75rem] leading-[2] tracking-[0.05em]">
                THIS IS EVERYTHING YOU NEED TO PAY RIGHT NOW
              </span>
            </span>
            <span className="">
              {dataAfterVoucher ?
                formattedCurrency(dataAfterVoucher.order_total_after_voucher)
                :
                formattedCurrency(getTotalPrice())
              }
            </span>
          </li>
        </ul>

        <section className="pt-12">
          <div className="flex flex-row items-center gap-3 pb-4">
            <FormCheckbox name="terms" type="checkbox" valuePropName={true}>
              <span> I agree to the <a href="#" className="underline">terms and conditions</a> of the shop</span>
            </FormCheckbox>

          </div>
          <div className="text-[13px] leading-[24.7px] tracking-[0.5px] pb-4">
            <p className="pt-4">
              At eFurniture we do not have all our products in stock, as most of our furniture is made just for you and your home.
            </p>
            <p className="pt-4">
              Our normal delivery time is
            </p>
            <ul className="pt-4">
              <li>3 - 4 weeks for board furniture</li>
              <li>6 - 7 weeks for upholstery furniture</li>
            </ul>
          </div>
        </section>

        <button
          className="furniture-button-black-hover w-full px-[55px] py-[14px] text-[0.6875rem] tracking-[0.125rem] mt-6"
        >
          purchase now
        </button>
      </Form>
    </section>
  )
}

export default Summary