import { Form, message } from "antd";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import FormInput from "@components/FormInput";
import { useUpdateWithAuth } from "@hooks/api-hooks";
import { edit_address } from "@api/addressApi";
import { useQueryClient } from "@tanstack/react-query";
import { get_addresses } from "@api/profileApi";
import { get_district_in_saigon,get_ward_in_saigon } from "@api/addressApi";
import FormSelect from "@components/FormSelect";
import { useFetchOutsideSystem } from "@hooks/api-hooks";
import useNotification from "@hooks/useNotification"
import { useState } from "react";

const EditingAddress = ({ data, setIsModalEditOpen }) => {
  const { success_message, error_message } = useNotification();

  const queryClient = useQueryClient();

  const [selectedDistrict,setSelectedDistrict] = useState({});

  const { data: districtList, isLoading } = useFetchOutsideSystem(
    get_district_in_saigon()
  );

  const { data: wardList, isLoading: isWardLoading } = useFetchOutsideSystem(
    get_ward_in_saigon(selectedDistrict.id)

  );

  const { mutate } = useUpdateWithAuth(
    edit_address(data._id),
    undefined,
    () => {
      queryClient.invalidateQueries(get_addresses());
      success_message('address', 'edit')

    },
    () => {
      error_message('address', 'edit')
    }
  );

  const handleDistrictChange = (e) => {
    setSelectedDistrict({ id: e.target.value, name: e.target.options[e.target.selectedIndex].text })

  };

  if (isLoading) return;
  if (isWardLoading) return;

  const onFinish = (values) => {
    console.log("Success:", values);
    mutate(values);
    setIsModalEditOpen(false);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="w-3/4">
      <p className="font-bold mb-3 text-xl">Edit adress</p>
      <Form
        name="editing_address"
        requiredMark="optional"
        initialValues={data}
        labelCol={{
          span: 24,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <FormInput label="Address name" name="address" className="w-full" />
        <FormInput label="Province" name="province" className="w-full" type="province" />
        <FormInput label="Phone" name="phone" className="w-full" />
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

EditingAddress.propTypes = {
  data: PropTypes.object,
  setIsModalEditOpen: PropTypes.func,
};

export default EditingAddress;
