import { Form, message } from "antd";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import FormInput from "@components/FormInput";
import { useUpdateWithAuth } from "@hooks/api-hooks";
import { edit_address } from "@api/addressApi";
import { useQueryClient } from "@tanstack/react-query";
import { get_addresses } from "../../../../api/profileApi";

const EditingAddress = ({ data }) => {
  const queryClient = useQueryClient();

  const { mutate } = useUpdateWithAuth(
    edit_address(data._id),
    undefined,
    () => {
      queryClient.invalidateQueries(get_addresses());
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
    <div className="w-3/4">
      <p className="font-bold mb-3 text-xl">Edit adress</p>
      <Form
        name="editing_address"
        initialValues={data}
        labelCol={{
          span: 24,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <FormInput label="Address name" name="address" className="w-full" />
        <FormInput label="Province" name="province" className="w-full" />
        <FormInput label="Phone" name="phone" className="w-full" />
        <FormInput label="Ward" name="ward" className="w-full" />
        <FormInput label="District" name="district" className="w-full" />

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

EditingAddress.propTypes = {
  data: PropTypes.object,
};

export default EditingAddress;
