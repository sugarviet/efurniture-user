import { Form } from "antd";
import FormInput from "@components/ui/FormInput";

const ChangingPassword = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <section className="mt-4 border-t-2 py-4">
      <p className="font-bold mb-3">Change password</p>
      <Form
        name="changePassword"
        labelCol={{
          span: 24,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <FormInput label="Password"
          name="password" className="furniture-input w-1/2 h-10" type="password"/>
          <FormInput label="New Password"
          name="newPassword" className="furniture-input w-1/2 h-10" type="newPassword"/>
          <FormInput label="Confirm New Password"
          name="confirmNewPassword" className="furniture-input w-1/2 h-10" type="confirmNewPassword"/>
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

export default ChangingPassword;
