import { Form } from "antd";
import AppInput from "@components/ui/AppInput";

const ChangingName = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <section className="my-4">
      <p className="font-bold mb-3">Change personal info</p>
      <Form
        name="basic"
        labelCol={{
          span: 24,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="First Name"
          name="firstName"
          rules={[
            {
              required: false,
              message: "Please input your username!",
            },
          ]}
        >
          <AppInput className="w-1/2 h-10" />
        </Form.Item>

        <Form.Item
          label="Last Name"
          name="lastName"
          rules={[
            {
              required: false,
              message: "Please input your last name!",
            },
          ]}
        >
          <AppInput className="w-1/2 h-10" />
        </Form.Item>

      <div className="flex flex-col gap-5 text-base w-[40rem]">
        <p>
          When you sign up for BoConcept newsletters, you agree to receive news
          and information regarding events via email from BoConcept A/S and your
          preferred/closest BoConcept store.
        </p>

        <p>You can at any time revoke this consent.</p>

        <p>
          Read more in our{" "}
          <a href="#" className="underline hover:text-black">
            Privacy Policy
          </a>{" "}
          in which we describe how we treat personal information, legislation
          and more.
        </p>

        <p className=" text-gray-400">
          I accept the BoConcept privacy policy{" "}
          <a href="#" className="underline">
            See privacy policy
          </a>
        </p>
        <button
          type="submit"
          className="furniture-button-black-hover text-sm px-6 py-4 w-48"
        >
          Apply
        </button>

      </div>
      </Form>
    </section>
  );
};

export default ChangingName;
