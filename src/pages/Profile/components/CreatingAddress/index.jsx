import { Form } from "antd";
import { Link } from "react-router-dom";
import FormInput from "@components/FormInput";
import { usePostAuth } from "@hooks/api-hooks";
import { add_address } from "@api/addressApi";
import { useFetchOutsideSystem } from "@hooks/api-hooks";
import FormSelect from "@components/FormSelect";
import { get_district_in_saigon } from "@api/addressApi";
import useNotification from "@hooks/useNotification";

import PropTypes from "prop-types";

const CreatingAddress = ({ setIsModalCreateOpen }) => {
  const [form] = Form.useForm();
  const { success_message, error_message } = useNotification();
  const { data: data_address, isLoading } = useFetchOutsideSystem(
    get_district_in_saigon()
  );

  console.log(data_address);

  const { mutate } = usePostAuth(
    add_address(),
    undefined,
    () => {
      success_message("address", "add");
    },
    () => {
      error_message("address", "add");
    }
  );

  if (isLoading) return;
  const onFinish = (values) => {
    console.log("Success:", values);
    mutate(values);
    form.resetFields();
    setIsModalCreateOpen(false);
  };
  return (
    <div className="w-3/4">
      <p className="font-bold mb-3 text-xl">Add adress</p>
      <Form
        form={form}
        name="create-address"
        labelCol={{
          span: 24,
        }}
        initialValues={{
          province: "TP HCM",
          district: "Quận 9",
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <FormInput label="Address name" name="address" className="w-full" />
        <FormInput label="Province" name="province" className="w-full" />
        <FormInput label="Phone" name="phone" className="w-full" />
        <FormInput label="Ward" name="ward" className="w-full" />

        <FormSelect
          label="District"
          name="district"
          data={data_address}
          value={"Quận 9"}
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

CreatingAddress.propTypes = {
  setIsModalCreateOpen: PropTypes.func,
};

export default CreatingAddress;
