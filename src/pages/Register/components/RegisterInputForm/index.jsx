import { Form } from "antd";
import FormInput from "@components/FormInput";
import FormCheckbox from "@components/FormCheckbox";
import { useSignUp } from "@services/Auth/services";

function RegisterInputForm() {
  const { mutate } = useSignUp();
  const onFinish = (values) => {
    const data = {
      username:"datphu11",
      password: "DatPhu",
      confirm_password: "DatPhu",
      full_name: "Trần Nguyễn Đạt Phú",
      avatar: "https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2023-04/LACERDA_DANIEL_L_03-25.png?itok=ZsAZaLY3",
      status: 1
    }
    mutate(data);
    console.log("Success:", values);
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
          name="firstName"
          className="furniture-input w-full h-[3rem]"
          required
          errorMessage="Please enter your first name"
        />
        <FormInput
          label="Last Name"
          name="lastName"
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
              Please add me to eFurniture's email list.
            </span>
          </div>

          <div></div>
        </section>
        <section className="mb-4">
          <p>
            When you sign up for BoConcept newsletters, you agree to receive
            news and information regarding events via email from BoConcept A/S
            and your preferred/closest BoConcept store.
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
            <FormCheckbox
              name="agreement"
              
            />

            <span className="text-[0.875rem] leading-[1.715] tracking-[0.05em]">
              Accept the BoConcept privacy policy and agree to BoConcept saving
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

      {/* <form className="max-w-[43.75rem]">
        <section className="w-full mb-5">
          <label className="w-auto text-[0.875rem] leading-[1.715] tracking-[0.05em]">
            Email Address
          </label>
          <input
            className="furniture-input w-full h-[3rem]"
            type="email"
            required
          />
        </section>

        <section className="mb-4">
          <div className="flex flex-row gap-2">
            <input
              className="furniture-checkbox border-[0.125rem] border-[#5a7468] checked:bg-[#5a7468]"
              type="checkbox"
            />
            <span className="text-[0.875rem] leading-[1.715] tracking-[0.05em]">
              Please add me to eFurniture's email list.
            </span>
          </div>
        </section>
        <section className="mb-4">
          <p>
            When you sign up for BoConcept newsletters, you agree to receive
            news and information regarding events via email from BoConcept A/S
            and your preferred/closest BoConcept store.
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
            <input
              className="furniture-checkbox border-[0.125rem] border-[#5a7468] checked:bg-[#5a7468]"
              type="checkbox"
              defaultValue=""
            />
            <span className="text-[0.875rem] leading-[1.715] tracking-[0.05em]">
              Accept the BoConcept privacy policy and agree to BoConcept saving
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
      </form> */}
    </>
  );
}

export default RegisterInputForm;
