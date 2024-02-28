import { Form, message } from "antd";
import { Link } from "react-router-dom";
import FormInput from "@components/FormInput";
import { usePostAuth } from "@hooks/api-hooks";
import { add_address } from "@api/addressApi";
import { useFetchOutsideSystem } from "@hooks/api-hooks";
import FormSelect from "@components/FormSelect";
import { get_provice_in_saigon } from "@api/addressApi";

const CreatingAddress = () => {
  const { data: data_address, isLoading } = useFetchOutsideSystem(
    get_provice_in_saigon()
  );

  const { mutate } = usePostAuth(
    add_address(),
    undefined,
    () => {
      message.success("Create address successfully");
    },
    () => {
      message.error("Something went wrong");
    }
  );

  if (isLoading) return;
  const onFinish = (values) => {
    console.log("Success:", values);
    mutate(values);
  };
  return (
    <div className="w-3/4">
      <p className="font-bold mb-3 text-xl">Add adress</p>
      <Form
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

        <FormSelect label="District" name="district" data={data_address} value={"Quận 9"}/>

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

export default CreatingAddress;
