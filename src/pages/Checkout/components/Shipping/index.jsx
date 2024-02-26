import { Form } from "antd";
import CheckboxModal from "@components/CheckboxModal";
import { useState } from "react";
import useSwitchTab from "../../hooks/useSwitchTab";
import { CHECKOUT_TABS } from "@constants/checkoutTabConstants";

const DELIVERY_METHOD = {
  contact: "contact",
  warehouse: "warehouse",
}

function Shipping() {

  const { handleChangeTab } = useSwitchTab();

  const onFinish = (values) => {
    console.log("Success:", values);
    handleChangeTab(CHECKOUT_TABS.payment)
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const [selectedDelivery, setSelectedDelivery] = useState(DELIVERY_METHOD.warehouse);

  const handleChangeMethod = (delivery) => {
    setSelectedDelivery(delivery);
  };

  return (
    <Form
      name="shipping"
      labelCol={{
        span: 24,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <article className='max-w-[43.75rem] font-HelveticaRoman text-[0.875rem] leading-[1.5] pb-[40px] tracking-[0.5px] pt-6 lg:pt-0'>
        <h2 className='font-HelveticaBold text-[1.5rem] leading-[1.20833] tracking-[0.08em] pb-2'>POINT OF SERVICE</h2>
        <p className='pb-[25px]'>This is the store where we will ship the furniture from and the place you need to reach out to with any questions.</p>
      </article>
      <section className='py-10 font-HelveticaRoman'>
        <h3 className='text-[14px] lg:text-[1rem] leading-[1.1875] tracking-[0.08em] font-HelveticaBold pb-2'>DELIVERY METHOD </h3>
        <div className="pb-20">
          <CheckboxModal
            name="delivery"
            value="warehouse"
            onChange={() => handleChangeMethod(DELIVERY_METHOD.warehouse)}
            checked={selectedDelivery === DELIVERY_METHOD.warehouse}
          >
            <article className='text-[14px] lg:text-[1rem] leading-[1.1875] tracking-[0.08em] '>
              <div className="flex flex-row justify-between">
                <h4 className='font-HelveticaBold uppercase'>PICK UP AT WAREHOUSE</h4>
                <p className='text-[0.75rem] font-HelveticaBold'>Free</p>
              </div>
              <p className='pb-4 text-[11px] lg:text-[0.875rem] leading-[1.4] tracking-[0.04em] mt-[0.5rem]'>
                Come to us to collect your order Read more
              </p>
            </article>
          </CheckboxModal>
        </div>

        <div>
          <CheckboxModal
            name="delivery"
            value="contact"
            onChange={() => handleChangeMethod(DELIVERY_METHOD.contact)}
            checked={selectedDelivery === DELIVERY_METHOD.contact}
          >
            <article className='text-[14px] lg:text-[1rem] leading-[1.1875] tracking-[0.08em]'>
              <h4 className='font-HelveticaBold uppercase'>STORE CONTACT</h4>
              <p className='text-[11px] lg:text-[0.875rem] leading-[1.4] tracking-[0.04em] mt-[0.5rem]'>
                Your product selection will be send to the BoConcept store nearest your geographical location. You will receive a quotation, including applicable discounts, sales tax and shipping cost
              </p>
            </article>
          </CheckboxModal>
        </div>

      </section>

      <section className='pt-28 max-w-[43.75rem] font-HelveticaRoman'>
        <h3 className='text-[14px] lg:text-[1rem] leading-[1.1875] tracking-[0.08em] font-HelveticaBold pb-5'>YOUR COMMENT:</h3>
        <article className='pb-[25px]'>
          <p className='text-[0.875rem] leading-[23.3px] tracking-[0.5px]'>Message to the store</p>
          <Form.Item name="messageToStore">
            <textarea className='focus:shadow-email appearance-none outline-none border-[#191915] border-[0.5px] h-[7rem] p-[1rem] text-[0.875rem] w-full'>
            </textarea>
          </Form.Item>
        </article>
        <button
          type="submit"
          className="furniture-button-black-hover w-full px-[55px] py-[14px] text-[0.6875rem] tracking-[0.125rem]"
        >
          continue to payment method
        </button>
      </section>

    </Form>
  )
}

export default Shipping