import { Form } from "antd";

const ChangingEmail = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <section className="mt-4 border-t-2 py-4">
      <p className="font-bold mb-3">Change email</p>
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
          label="New Email"
          name="newEmail"
          rules={[
            {
              required: false,
              message: "Please input your username!",
            },
          ]}
        >
          <input type="text" className="furniture-input w-1/2 h-10" />
        </Form.Item>

        <Form.Item
          label="Confirm New Email"
          name="emailConfirm"
          rules={[
            {
              required: false,
              message: "Please input your last name!",
            },
          ]}
        >
          <input type="text" className="furniture-input w-1/2 h-10" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: false,
              message: "Please input your last name!",
            },
          ]}
        >
          <input type="password" className="furniture-input w-1/2 h-10" />
        </Form.Item>
      </Form>

      <div className="flex flex-col gap-5 text-base w-[40rem]">
        <button
          type="submit"
          className="furniture-button-black-hover text-sm px-6 py-4 w-48"
        >
          Apply
        </button>
      </div>
    </section>
  );
};

export default ChangingEmail;