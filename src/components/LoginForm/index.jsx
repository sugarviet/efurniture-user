import { Form } from "antd";
import FormInput from "@components/FormInput";
import { useToggleLoginBottomBar } from "@hooks/useToggleBottomBar";
import useAuthentication from "../../hooks/useAuthentication";

function LoginForm() {

  const { login } = useAuthentication()

  const { closeLoginBottomBar} = useToggleLoginBottomBar();
  const onFinish = (values) => {
    login(values);
    closeLoginBottomBar()
  };

  return (
    <>
      <Form
        className="max-w-[43.75rem]"
        name="register"
        requiredMark="optional"
        labelCol={{
          span: 24,
        }}
        onFinish={onFinish}
      >
        <FormInput
          label="Email"
          name="username"
          type="email"
          className="furniture-input w-full h-[3rem]"
        />
        <FormInput
          label="Password"
          name="password"
          className="furniture-input w-full h-[3rem]"
          type="password"
          inputType="password"
        />
        <section className="py-[2.5rem] mb-4">
          <button className="furniture-button-black-hover px-[55px] py-[14px] text-[0.6875rem] tracking-[0.125rem]">
            Login
          </button>
        </section>
      </Form>
    </>
  );
}

export default LoginForm;
