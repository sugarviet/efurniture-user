import { Form } from "antd";
import FormInput from "@components/FormInput";
import BillingAddress from "../BillingAddress";
import { useToggleLoginBottomBar } from '@hooks/UseToggleBottomBar';
import { useState, useEffect } from 'react';
import useSwitchTab from "../../hooks/useSwitchTab";
import { CHECKOUT_TABS } from "@constants/checkoutTabConstants";
import { useOrderStore } from "../../../../stores/useGuestOrderStore";

function Billing() {

  const { toggleLoginBottomBar } = useToggleLoginBottomBar();

  const { handleChangeTab } = useSwitchTab();

  const { setOrderShipping, orderShipping } = useOrderStore();

  const [isInputEmail, setIsInputEmail] = useState(false);

  const onFinish = (values) => {
    setOrderShipping(values);
    handleChangeTab(CHECKOUT_TABS.delivery)
  };

  const handleEmailChange = (e) => {
    if (e.target.value) {
      setIsInputEmail(true);
    }
  };

  useEffect(() => {
    if (orderShipping.email) {
      setIsInputEmail(true);
    }
  }, [orderShipping]);

  return (
    <section>
      <div className='max-w-[43.75rem] text-[0.875rem] leading-[1.5] pb-[45px] tracking-[0.5px] pt-6 lg:pt-0'>
        <h2 className='font-HelveticaBold text-[1.5rem] leading-[1.20833] tracking-[0.08em] pb-6'>checkout as guest</h2>
        <p className='pb-[25px]'>You can check out without creating an account. You'll have a chance to create an account later.</p>
        <section className="w-full max-w-[43.75rem]">
          <Form
            name="billing"
            labelCol={{
              span: 24,
            }}
            onFinish={onFinish}
            autoComplete="off"
            initialValues={{ province: "Thành Phố Hồ Chí Minh", ...orderShipping }}
          >
            <FormInput
              label="Email"
              name="email"
              className="furniture-input w-full h-[3rem]"
              type="newLetterEmail"
              onChange={handleEmailChange}
            />

            <div className={`ease-slow-to-fast duration-1000 overflow-hidden max-h-0 ${isInputEmail ? "max-h-[1500px]" : ""}`}>
              <section className="pb-4">
                <div className="flex flex-row gap-3 pb-4">
                  <input className="furniture-checkbox border-[0.125rem] border-[#5a7468] checked:bg-[#5a7468]"
                    type="checkbox"
                  />
                  <p>Sign me up for the Efurniture newsletter.</p>
                </div>
                <section className="mb-6">
                  <p>
                    When you sign up for Efurniture newsletters, you agree to receive news and information regarding events via email
                    from Efurniture A/S and your preferred/closest Efurniture store.
                  </p>
                  <br />
                  <p>
                    You can at any time revoke this consent.
                  </p>
                  <br />
                  <p>
                    Read more in our <a href='#' className='underline'>Privacy Policy</a> in which we describe how we treat personal information, legislation and more.
                  </p>
                </section>
              </section>

              <BillingAddress />
            </div>

            <button
              type="submit"
              className={`furniture-button-black-hover w-full px-[55px] py-[14px] text-[0.6875rem] tracking-[0.125rem] ${!isInputEmail ? 'mt-0' : 'mt-6'} `}
            >
              CONTINUE TO DELIVERY
            </button>
          </Form>
        </section>
      </div>
      <div className="furniture-divided-top pt-10 pb-6">
        <h2 className='font-HelveticaBold text-[1.5rem] leading-[1.20833] tracking-[0.08em] pb-6'>OR, SIGN IN WITH ACCOUNT</h2>
        <p className='pb-[25px]'>If you already have a Efurniture account, you can login to it now, and use your stored details.</p>

        <button onClick={() => toggleLoginBottomBar()} className="furniture-button-white-hover flex flex-row gap-4 items-center justify-center w-full sm:w-[75%] lg:w-full sm:px-[55px] py-[14px] text-[0.6875rem] tracking-[0.125rem]">
          <img className="w-[15px]" src="./images/user.svg" />
          log in to existing account
        </button>
      </div>
    </section>
  )
}

export default Billing