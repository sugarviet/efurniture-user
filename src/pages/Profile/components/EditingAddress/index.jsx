import { Form } from "antd";
import { Link } from "react-router-dom";

const EditingAddress = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="w-3/4">
      <p className="font-bold mb-3 text-xl">Edit adress</p>
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
          label="Address name"
          name="newEmail"
          rules={[
            {
              required: false,
              message: "Please input your username!",
            },
          ]}
        >
          <input type="text" className="furniture-input w-full" />
        </Form.Item>
        <Form.Item
          label="First Name"
          name="newEmail"
          rules={[
            {
              required: false,
              message: "Please input your username!",
            },
          ]}
        >
          <input type="text" className="furniture-input w-full" />
        </Form.Item>
        <Form.Item
          label="Last Name"
          name="newEmail"
          rules={[
            {
              required: false,
              message: "Please input your username!",
            },
          ]}
        >
          <input type="text" className="furniture-input w-full" />
        </Form.Item>
        <Form.Item
          label="Address (Please remember floor and apartment)"
          name="newEmail"
          rules={[
            {
              required: false,
              message: "Please input your username!",
            },
          ]}
        >
          <input type="text" className="furniture-input w-full" />
        </Form.Item>
        <Form.Item
          label="Phone"
          name="newEmail"
          rules={[
            {
              required: false,
              message: "Please input your username!",
            },
          ]}
        >
          <input type="text" className="furniture-input w-full" />
        </Form.Item>

        <div className="flex flex-col gap-5 text-base w-[40rem]">
          <button
            type="submit"
            className="furniture-button-black-hover text-sm px-6 py-4 w-48"
          >
            Apply
          </button>
        </div>
      </Form>
      <div className="text-gray-400 mt-10">
        <p className="text-sm">
          Please be advised that we are gathering your personal information. For
          more information, see our{" "}
          <Link to="/" className="underline">
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  )
}

export default EditingAddress