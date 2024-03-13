import { Form } from "antd";
import FormInput from "@components/FormInput";
import { usePost, usePostAuth } from "../../../../hooks/api-hooks";
import { message } from "antd";
import useAuth from "../../../../stores/useAuth";
import { get_auth_login } from "../../../../api/authApi";
import { get_add_all_wishlist_api } from "../../../../api/wishlistApi";
import { useGuestStore } from "../../../../stores/useGuestStore";
import jwtDecode from "jwt-decode";
import useAuthentication from "../../../../hooks/useAuthentication";

function LoginForm() {
  const {login} = useAuthentication()
  const onFinish = (values) => {
    login(values);
  };

  return (
    <>
      <Form
        className="max-w-[43.75rem]"
        name="register"
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
