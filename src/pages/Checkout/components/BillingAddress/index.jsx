import FormInput from "@components/FormInput";
import { useFetchOutsideSystem } from "@hooks/api-hooks";
import { get_district_in_saigon, get_ward_in_saigon } from "@api/addressApi";
import { useState } from 'react';
import { Form } from "antd";
import { useOrderStore } from "../../../../stores/useGuestOrderStore";
import useAuth from "@stores/useAuth";
import FormSelect from "@components/FormSelect";

function BillingAddress() {

    const { accessToken } = useAuth();

    const { setSelectedDistrict, setSelectedWard, selectedDistrict, selectedWard } = useOrderStore();

    const { data: districtList } = useFetchOutsideSystem(
        get_district_in_saigon()
    );

    const { data: wardList } = useFetchOutsideSystem(
        get_ward_in_saigon(selectedDistrict.id)

    );

    const handleDistrictChange = (e) => {
        setSelectedWard({ id: "0", name: "" })
        setSelectedDistrict({ id: e.target.value, name: e.target.options[e.target.selectedIndex].text })

    };
    const handleWardChange = (e) => {
        setSelectedWard({ id: e.target.value, name: e.target.options[e.target.selectedIndex].text })
    };


    return (
        <section className="w-full max-w-[43.75rem]">
            <h2 className='font-HelveticaBold  text-[13px] lg:text-[1rem] leading-[1.20833] tracking-[0.08em] pb-4'>BILLING ADDRESS</h2>

            {accessToken &&
                <div className="furniture-divided-bottom pb-10 mb-5">
                    <p className='text-[14px] leading-[24px] tracking-[0.7px]'>Select an address</p>
                    <select className='furniture-input w-full h-[3rem] text-base tracking-[0.8px] leading-[48px] text-ellipsis'>
                        <option value="">Select from saved addresses</option>
                        <option value="address">Tp Hồ Chí Minh - 18/19, Tân Lập 1, Phường Hiệp Phú, Quận 9, Tp Hồ Chí Minh</option>
                    </select>
                </div>
            }

            <FormInput
                label="First Name"
                name="first_name"
                className="furniture-input w-full h-[3rem]"
                type="firstName"
            />

            <FormInput
                label="Last Name"
                name="last_name"
                className="furniture-input w-full h-[3rem]"
                type="lastName"
            />

            <FormSelect
                label="District"
                name="district"
                type="district"
                data={districtList?.map((district) => ({ label: district.district_name, value: district.district_id }))}
                onChange={handleDistrictChange}
            />

            <div className="relative">
                <FormSelect
                    label="Ward"
                    name="ward"
                    type="ward"
                    data={wardList?.map((ward) => ({ label: ward.ward_name, value: ward.ward_id }))}
                    onChange={handleWardChange}
                />
                {selectedWard.id === "0" && <p className="absolute bottom-[-24px] text-[#ff4f4f]">Please choose a ward below</p>}
            </div>

            <FormInput
                label="Province"
                name="province"
                className="furniture-input w-full h-[3rem]"
                disabled
            />
            <FormInput
                label="Address (Please remember floor and apartment)"
                name="address"
                className="furniture-input w-full h-[3rem]"
                type="detailAddress"
            />
            <FormInput
                label="Phone"
                name="phone"
                className="furniture-input w-full h-[3rem]"
                type="phone"
            />
        </section>
    )
}

export default BillingAddress