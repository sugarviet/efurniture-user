import { Form } from "antd";
import FormInput from "@components/FormInput";
import { useUpdateWithAuth } from "@hooks/api-hooks";
import { get_update_user_password } from "@api/profileApi";
import { message } from "antd";

const ChangingPassword = () => {
  const { mutate } = useUpdateWithAuth(
    get_update_user_password(),
    undefined,
    () => {
      message.success("Successfully updated");
    },
    () => {
      message.success("updated failed");
    }
  );
  const onFinish = (values) => {
    console.log("Success:", values);
    mutate(values);
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
        <FormInput
          label="Password"
          name="oldPassword"
          className="furniture-input w-1/2 h-10"
          type="password"
          inputType="password"
        />
        <FormInput
          label="New Password"
          name="password"
          className="furniture-input w-1/2 h-10"
          type="newPassword"
          inputType="password"
        />
        <FormInput
          label="Confirm New Password"
          name="confirmPassword"
          className="furniture-input w-1/2 h-10"
          type="confirmNewPassword"
          inputType="password"
        />

        <div className="flex flex-col gap-5 text-base w-[40rem]">
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

export default ChangingPassword;
