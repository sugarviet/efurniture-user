import { Form } from "antd";
import { Link } from "react-router-dom";
import FormInput from "@components/FormInput";

const EditingAddress = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="w-3/4">
      <p className="font-bold mb-3 text-xl">Add adress</p>
      <Form
        name="create-address"
        labelCol={{
          span: 24,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <FormInput label="Address name" name="newEmail" className="w-full" />
        <FormInput label="Province" name="province" className="w-full" />
        <FormInput label="Phone" name="phone" className="w-full" />
        <FormInput label="Ward" name="ward" className="w-full" />
        <FormInput label="Address" name="address" className="w-full" />

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
  );
};

export default EditingAddress;
