import { Form } from "antd";
import FormInput from "@components/FormInput";
import FormCheckbox from "@components/FormCheckbox";
import { usePost } from "../../../../hooks/api-hooks";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import { get_auth_register } from "../../../../api/authApi";

function RegisterForm() {
  const navigate = useNavigate();

  const { mutate } = usePost(
    get_auth_register(),
    undefined,
    () => {
      navigate('/login')
    },
    (error) => {
      message.error(error.response.data.error.message)
    }
  );
  const onFinish = (values) => {
    const data = {
      username: values.email,
      email: values.email,
      password: values.password,
      confirm_password: values.confirm_password,
      first_name: values.first_name,
      last_name: values.last_name,
      status: 1,
    };

    mutate(data);
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
          label="First Name"
          name="first_name"
          className="furniture-input w-full h-[3rem]"
          required
          errorMessage="Please enter your first name"
        />
        <FormInput
          label="Last Name"
          name="last_name"
          className="furniture-input w-full h-[3rem]"
          required
          errorMessage="Please enter your last name"
        />
        <FormInput
          label="Email"
          name="email"
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
        <FormInput
          label="Confirm Password"
          name="confirm_password"
          className="furniture-input w-full h-[3rem]"
          type="confirmPassword"
          inputType="password"
        />

        <section className="mb-4">
          <div className="flex flex-row gap-2">
            <FormCheckbox name="add" />

            <span className="text-[0.875rem] leading-[1.715] tracking-[0.05em]">
              Please add me to eFurniture email list.
            </span>
          </div>

          <div></div>
        </section>
        <section className="mb-4">
          <p>
            When you sign up for eFurniture newsletters, you agree to receive
            news and information regarding events via email from eFurniture A/S
            and your preferred/closest eFurniture store.
          </p>
          <br />
          <p>You can at any time revoke this consent.</p>
          <br />
          <p>
            Read more in our{" "}
            <a href="#" className="underline">
              Privacy Policy
            </a>{" "}
            in which we describe how we treat personal information, legislation
            and more.
          </p>
        </section>
        <section className="mb-4">
          <div className="flex flex-row gap-2">
            <FormCheckbox name="agreement" />

            <span className="text-[0.875rem] leading-[1.715] tracking-[0.05em]">
              Accept the eFurniture privacy policy and agree to eFurniture saving
              my personal information.
              <br />
              <a href="#" className="underline">
                See privacy policy
              </a>
            </span>
          </div>
        </section>
        <section className="py-[2.5rem] mb-4">
          <button className="furniture-button-black-hover px-[55px] py-[14px] text-[0.6875rem] tracking-[0.125rem]">
            APPLY
          </button>
        </section>
      </Form>
    </>
  );
}

export default RegisterForm;
