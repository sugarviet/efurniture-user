import { Form } from "antd";
import FormInput from "@components/FormInput";
import { usePost, usePostAuth } from "../../../../hooks/api-hooks";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import useAuth from "../../../../stores/useAuth";
import { get_auth_login } from "../../../../api/authApi";
import jwtDecode from "jwt-decode";
import { useGuestStore } from "../../../../stores/useGuestStore";
import { get_add_all_wishlist_api } from "../../../../api/wishlistApi";

function LoginForm() {
  const navigate = useNavigate();
  const { setTokens } = useAuth();

  const wishlist = useGuestStore((store) => store.wishlist);

  const { mutate: addToWishlist } = usePostAuth(get_add_all_wishlist_api());

  const { mutate } = usePost(
    get_auth_login(),
    undefined,
    (data) => {
      const { access_token, refresh_token } = data.data.metaData;
      const decode = jwtDecode(access_token);
      setTokens(access_token, refresh_token, decode.account_id);

      addToWishlist(wishlist.map((item) => item._id));
      navigate("/");
    },
    (error) => {
      message.error(error.response.data.error.message);
    }
  );
  const onFinish = (values) => {
    mutate(values);
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
