import { Form } from "antd";
import { Link } from "react-router-dom";
import FormInput from "@components/FormInput";
import { usePostAuth } from "@hooks/api-hooks";
import { add_address } from "@api/addressApi";
import { useFetchOutsideSystem } from "@hooks/api-hooks";
import FormSelect from "@components/FormSelect";
import { get_district_in_saigon, get_ward_in_saigon } from "@api/addressApi";
import { get_addresses } from "@api/profileApi";
import useNotification from "@hooks/useNotification";
import { useState } from "react";
import PropTypes from "prop-types";
import { useQueryClient } from "@tanstack/react-query";

const CreatingAddress = ({ setIsModalCreateOpen }) => {

  const [form] = Form.useForm();

  const { success_message, error_message } = useNotification();

  const queryClient = useQueryClient();

  const [selectedDistrict, setSelectedDistrict] = useState({});
  const [selectedWard, setSelectedWard] = useState({});

  const { data: districtList } = useFetchOutsideSystem(
    get_district_in_saigon()
  );

  const { data: wardList } = useFetchOutsideSystem(
    get_ward_in_saigon(selectedDistrict.id)

  );

  const handleDistrictChange = (e) => {
    setSelectedDistrict({ id: e.target.value, name: e.target.options[e.target.selectedIndex].text })
  };

  const handleWardChange = (e) => {
    setSelectedWard({ id: e.target.value, name: e.target.options[e.target.selectedIndex].text })
  };


  const { mutate } = usePostAuth(
    add_address(),
    undefined,
    () => {
      queryClient.invalidateQueries(get_addresses());
      success_message("address", "add");
    },
    () => {
      error_message("address", "add");
    }
  );

  const onFinish = (values) => {
    console.log("Success:", values);
    mutate(
      {
        ...values,
        district: selectedDistrict.name,
        ward: selectedWard.name
      }
    );
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
        requiredMark="optional"
        initialValues={{
          province: "Thành Phố Hồ Chí Minh",
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <FormInput label="Address name" name="address" className="w-full" type="detailAddress" />
        <FormInput label="Province" name="province" className="w-full" disabled type="province" />
        <FormInput label="Phone" name="phone" className="w-full" type="phone" />
        <FormSelect
          label="District"
          name="district"
          type="district"
          data={districtList?.map((district) => ({ label: district.district_name, value: district.district_id }))}
          onChange={handleDistrictChange}
        />
        <FormSelect
          label="Ward"
          name="ward"
          type="ward"
          data={wardList?.map((ward) => ({ label: ward.ward_name, value: ward.ward_id }))}
          onChange={handleWardChange}
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
