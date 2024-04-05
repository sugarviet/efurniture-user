import RadioModal from "@components/RadioModal";
import { useState } from "react";
import useSwitchTab from "../../hooks/useSwitchTab";
import { CHECKOUT_TABS } from "@constants/checkoutTabConstants";
import { useOrderStore } from "../../../../stores/useGuestOrderStore";
import formattedCurrency from "@utils/formattedCurrency";
import useUserCart from "@hooks/useUserCart";
import useGuestCart from "@hooks/useGuestCart";
import useAuth from "@stores/useAuth";
import useScroll from "@hooks/useScroll";

const PAYMENT_METHOD = {
  banking: "Online Payment",
  cod: "COD",
}

function Payment() {

  const { accessToken } = useAuth();

  const { getTotalPrice } = accessToken ? useUserCart() : useGuestCart();

  const { setSelectedPayment, selectedPayment } = useOrderStore();

  const { handleChangeTab } = useSwitchTab();

  const { handleScrollToTop } = useScroll();

  const handleChangeMethod = (payment) => {
    setSelectedPayment(payment)
  };

  const handleNextStep = () => {
    handleChangeTab(CHECKOUT_TABS.summary)
    handleScrollToTop()
  }

  return (
    <div>
      <article className='max-w-[43.75rem] pb-5 pt-6 lg:pt-0'>
        <h2 className='font-HelveticaBold text-[1rem] leading-[26.67px] tracking-[0.08em]'>payment method</h2>
      </article>

      <section className='font-HelveticaRoman'>
        <p className='text-[14px] lg:text-[14px] leading-[1.1875] tracking-[0.5px] pb-1'>Payment total: <strong>{formattedCurrency(getTotalPrice())}</strong></p>
        <div className="pb-16">
          <RadioModal
            name="payment"
            value="Online Payment"
            onChange={() => handleChangeMethod(PAYMENT_METHOD.banking)}
            checked={selectedPayment === PAYMENT_METHOD.banking}
          >
            <article className='text-[14px] lg:text-[1rem] leading-[1.1875] tracking-[0.08em] '>
              <h4 className='font-HelveticaBold uppercase'>online payment</h4>
              <img className="pt-2 w-16" src="https://vietqr.io/img/vietqr%20api%20-%20payment%20kit.png"></img>
            </article>
          </RadioModal>
        </div>

        <div className="pb-12">
          <RadioModal
            name="payment"
            value="COD"
            onChange={() => handleChangeMethod(PAYMENT_METHOD.cod)}
            checked={selectedPayment === PAYMENT_METHOD.cod}
          >
            <article className='text-[14px] lg:text-[1rem] leading-[1.1875] tracking-[0.08em]'>
              <h4 className='font-HelveticaBold uppercase'>cash on delivery</h4>
              <p className='text-[11px] lg:text-[0.875rem] leading-[1.4] tracking-[0.04em] mt-[0.5rem]'>
                You will pay for your order once it is delivered to your home. The amount to be paid will be stated in the invoice.<br/>
                <span className="font-HelveticaBold">Please be aware: If your order exceeds ₫1,000,000, you will be required to pay a 10% deposit upfront for the order.</span>
              </p>

            </article>
          </RadioModal>
        </div>

      </section>

      <section className='pt-28 max-w-[43.75rem] font-HelveticaRoman'>
        <button
          type="submit"
          onClick={() => handleNextStep()}
          className="furniture-button-black-hover w-full px-[55px] py-[14px] text-[0.6875rem] tracking-[0.125rem]"
        >
          continue to summary
        </button>
      </section>

    </div>
  )
}

export default Payment