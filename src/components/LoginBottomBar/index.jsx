import BottomBar from "@components/BottomBar";
import { useToggleLoginBottomBar } from "@hooks/useToggleBottomBar";
import { Form } from "antd";
import FormInput from "@components/FormInput";
import useAuthentication from "../../hooks/useAuthentication";
import withNonAuthentication from "../../hocs/withNonAuthentication";

function LoginBottomBar() {
  const { login } = useAuthentication();
  const { closeLoginBottomBar, isOpen } = useToggleLoginBottomBar();

  const onFinish = (values) => {
    login(values);
  };
 
  return (
    <BottomBar className="lg:max-h-[85vh] h-full" isOpen={isOpen}>
      <main className="h-full overflow-y-scroll no-scrollbar">
        <button
          onClick={() => closeLoginBottomBar()}
          className="absolute w-3 top-[1.75rem] right-[1.75rem]"
        >
          <img className="w-3" src="./images/close.svg" />
        </button>
        <Form
          name="login"
          labelCol={{
            span: 24,
          }}
          requiredMark="optional"
          onFinish={onFinish}
          autoComplete="off"
        >
          <section className="max-w-[43.75rem] mx-auto">
            <div className="mx-[1.5625rem] mt-[60px]">
              <h3 className="text-[1.5625rem] leading-[1.4] tracking-[0.18em] font-HelveticaBold mb-[1.5625rem]">
                RETURNING CUSTOMERS
              </h3>

              <FormInput
                label="Email"
                name="username"
                className="furniture-input w-full h-[3rem]"
                type="email"
              />
              <FormInput
                label="Password"
                name="password"
                className="furniture-input w-full h-[3rem]"
                type="password"
              />

              <div className="flex flex-row gap-3 pb-6">
                <input
                  className="furniture-checkbox border-[0.125rem] border-[#5a7468] checked:bg-[#5a7468]"
                  type="checkbox"
                />
                <p>Remember Me</p>
              </div>
              <a href="#" className="float-left text-[0.75em] underline">
                Forgot password?
              </a>
            </div>
          </section>
          <section className="absolute bottom-0 w-full pt-[0.625rem] pb-[1.25rem] shadow-bottomBar text-center">
            <div className="pt-[0.625rem] px-auto">
              <button
                type="submit"
                className="furniture-button-black-hover min-w-[15.3125rem] px-[55px] py-[14px] text-[0.6875rem] tracking-[0.125rem]"
              >
                Login
              </button>
            </div>
          </section>
        </Form>
      </main>
    </BottomBar>
  );
}
export default withNonAuthentication(LoginBottomBar);
