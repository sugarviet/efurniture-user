import CheckboxModal from "@components/CheckboxModal";
import { useState } from "react";
import useSwitchTab from "../../hooks/useSwitchTab";
import { CHECKOUT_TABS } from "@constants/checkoutTabConstants";

const PAYMENT_METHOD = {
  banking: "banking",
  cod: "cod",
}

function Payment() {

  const { handleChangeTab } = useSwitchTab();

  const [selectedDelivery, setSelectedDelivery] = useState(PAYMENT_METHOD.banking);

  const handleChangeMethod = (delivery) => {
    setSelectedDelivery(delivery);
  };

  return (
    <div>
      <article className='max-w-[43.75rem] pb-5 pt-6 lg:pt-0'>
        <h2 className='font-HelveticaBold text-[1rem] leading-[26.67px] tracking-[0.08em]'>payment method</h2>
      </article>

      <section className='font-HelveticaRoman'>
        <p className='text-[14px] lg:text-[14px] leading-[1.1875] tracking-[0.5px] pb-1'>Payment total: <strong>₫ 489.000.000</strong></p>
        <div className="pb-16">
          <CheckboxModal
            name="payment"
            value="banking"
            onChange={() => handleChangeMethod(PAYMENT_METHOD.banking)}
            checked={selectedDelivery === PAYMENT_METHOD.banking}
          >
            <article className='text-[14px] lg:text-[1rem] leading-[1.1875] tracking-[0.08em] '>
              <h4 className='font-HelveticaBold uppercase'>credit card</h4>
              <img className="pt-2" src="https://www.boconcept.com/on/demandware.static/-/Sites/default/dw33bdd143/images/checkout/payment_uk_ie.png"></img>
            </article>
          </CheckboxModal>
        </div>

        <div>
          <CheckboxModal
            name="payment"
            value="cod"
            onChange={() => handleChangeMethod(PAYMENT_METHOD.cod)}
            checked={selectedDelivery === PAYMENT_METHOD.cod}
          >
            <article className='text-[14px] lg:text-[1rem] leading-[1.1875] tracking-[0.08em]'>
              <h4 className='font-HelveticaBold uppercase'>cash on delivery</h4>
              <p className='text-[11px] lg:text-[0.875rem] leading-[1.4] tracking-[0.04em] mt-[0.5rem]'>
                You will pay for your order once it is delivered to your home. The amount to be paid will be stated in the invoice.              </p>
            </article>
          </CheckboxModal>
        </div>

      </section>

      <section className='pt-28 max-w-[43.75rem] font-HelveticaRoman'>

        <button
          type="submit"
          onClick={()=>handleChangeTab(CHECKOUT_TABS.summary)}
          className="furniture-button-black-hover w-full px-[55px] py-[14px] text-[0.6875rem] tracking-[0.125rem]"
        >
          continue to summary
        </button>
      </section>

    </div>
  )
}

export default Payment