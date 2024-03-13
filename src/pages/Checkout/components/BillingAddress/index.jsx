import FormInput from "@components/FormInput";
import { useFetchOutsideSystem } from "@hooks/api-hooks";
import { get_district_in_saigon, get_ward_in_saigon } from "@api/addressApi";
import { useState } from 'react';
import { Form } from "antd";
import { useOrderStore } from "../../../../stores/useGuestOrderStore";
import useAuth from "@stores/useAuth";

function BillingAddress() {

    const { accessToken } = useAuth();

    //province
    const [districtId, setDistrictId] = useState(null);

    const { setSelectedDistrict, setSelectedWard, selectedDistrict } = useOrderStore();

    const { data: districtList } = useFetchOutsideSystem(
        get_district_in_saigon()
    );

    const { data: wardList } = useFetchOutsideSystem(
        get_ward_in_saigon(selectedDistrict.id)

    );

    const handleDistrictChange = (e) => {
        setSelectedDistrict({ id: e.target.value, name: e.target.options[e.target.selectedIndex].text })
        // const selectedDistrictName = e.target.options[e.target.selectedIndex].text;
        // setSelectedDistrict(e.target.value);

    };
    const handleWardChange = (e) => {
        // const selectedWardName = e.target.options[e.target.selectedIndex].text;
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

            <Form.Item label={<span className="text-base text-gray-800 font-semibold mb-[-5px]">District</span>} name="district">
                <select onChange={handleDistrictChange} className='furniture-input w-full h-[3rem]'>
                    <option value="">Choose district</option>
                    {districtList?.map((district) => (
                        <option key={district.district_id} value={district.district_id}>{district.district_name}</option>
                    ))}
                </select>
            </Form.Item>

            <Form.Item label={<span className="text-base text-gray-800 font-semibold mb-[-5px]">Ward</span>} name="ward">
                <select onChange={handleWardChange} className='furniture-input w-full h-[3rem]'>
                    <option value="">Choose ward</option>
                    {wardList?.map((ward) => (
                        <option key={ward.ward_id} value={ward.ward_id}>{ward.ward_name}</option>
                    ))}
                </select>
            </Form.Item>

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

            <div className="flex flex-row gap-3 pb-4">
                <input className="furniture-checkbox border-[0.125rem] border-[#5a7468] checked:bg-[#5a7468]"
                    type="checkbox"
                />
                <p>Ship to billing address</p>
            </div>
        </section>
    )
}

export default BillingAddress