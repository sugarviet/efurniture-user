import FormInput from "@components/FormInput";
import { useFetchOutsideSystem } from "@hooks/api-hooks";
import { get_district_in_saigon, get_ward_in_saigon } from "@api/addressApi";
import { useOrderStore } from "../../../../stores/useGuestOrderStore";
import useAuth from "@stores/useAuth";
import FormSelect from "@components/FormSelect";
import FormCheckbox from "@components/FormCheckbox";

function BillingAddress({ userData, addressList }) {

    const { accessToken } = useAuth();

    const {
        setSelectedDistrict,
        setSelectedWard,
        selectedDistrict,
        selectedWard,
        setOrderShipping,
        orderShipping,
        selectedAddress,
        setSelectedAddress
    } = useOrderStore();

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

    const handleChooseAddress = (event) => {
        if (event.target.value === "") {
            setOrderShipping({})
            setSelectedDistrict({})
            setSelectedWard({})
        }
        const selectedValue = event.target.value
        const selectedObject = addressList.find(address => address._id === selectedValue);
        setSelectedAddress(selectedObject);
        setSelectedDistrict({ name: selectedObject?.district })
        setSelectedWard({ name: selectedObject?.ward })
    };

    return (
        <section className="w-full max-w-[43.75rem]">
            <h2 className='font-HelveticaBold  text-[13px] lg:text-[1rem] leading-[1.20833] tracking-[0.08em] pb-4'>BILLING ADDRESS</h2>

            {accessToken &&
                <div className="furniture-divided-bottom pb-10 mb-5">
                    <p className='text-[14px] leading-[24px] tracking-[0.7px]'>Select an address</p>
                    <select
                        placeholder="Select new address"
                        value={selectedAddress ? selectedAddress._id : ""}
                        onChange={handleChooseAddress}
                        className='furniture-input w-full h-[3rem] text-base tracking-[0.8px] leading-[48px] text-ellipsis'
                    >
                        {/* <option value="">Select from saved addresses</option> */}
                        <option value="">Select new address</option>
                        {addressList?.map((address) => (
                            <option key={address._id} value={address._id}>{address.province} - {address.address}, {address.ward}, {address.district}</option>
                        ))}

                    </select>
                    {selectedAddress &&
                        <section className='max-w-[43.75rem] mt-6'>
                            <div className="border-[0.0625rem] border-grey4 border-b-[0.0625rem] border-b-[#5a7468] shadow-deliveryCard bg-grey6 relative">
                                <img className="absolute w-7 top-1/2 -translate-y-1/2 left-4" src="https://res.cloudinary.com/dc4hafqoa/image/upload/v1710427915/eFurniture/location_yy4hos.png"></img>
                                <div className='grid grid-cols-[1fr_auto] py-[1.5rem] pr-[1.5rem] pl-[4rem]'>
                                    <article className='text-[12px] lg:text-[14px] leading-[1.1875] tracking-[0.08em] flex flex-col gap-1'>
                                        <h4 className='font-medium text uppercase'>{selectedAddress.address}, {selectedAddress.ward}, {selectedAddress.district}, {selectedAddress.province}</h4>
                                        <p>{userData?.first_name} {userData?.last_name}</p>
                                        <p>{selectedAddress.phone}</p>
                                        <p>{userData?.email} </p>
                                    </article>
                                </div>
                            </div>
                        </section>
                    }
                </div>
            }


            <div className={`ease-slow-to-fast duration-200 overflow-hidden max-h-0 ${!selectedAddress ? "max-h-[1500px]" : ""}`}>
                <FormInput
                    label="First Name"
                    name="first_name"
                    className="furniture-input w-full h-[3rem]"
                    type={!selectedAddress ? "firstName" : "default"}
                />

                <FormInput
                    label="Last Name"
                    name="last_name"
                    className="furniture-input w-full h-[3rem]"
                    type={!selectedAddress ? "lastName" : "default"}
                />

                <FormSelect
                    label="District"
                    name="district"
                    type={!selectedAddress ? "district" : "default"}
                    data={districtList?.map((district) => ({ label: district.district_name, value: district.district_id }))}
                    onChange={handleDistrictChange}
                />

                <div className="relative">
                    <FormSelect
                        label="Ward"
                        name="ward"
                        type={!selectedAddress ? "ward" : "default"}
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
                    type="province"
                />
                <FormInput
                    label="Address (Please remember floor and apartment)"
                    name="address"
                    className="furniture-input w-full h-[3rem]"
                    type={!selectedAddress ? "detailAddress" : "default"}
                />
                <FormInput
                    label="Phone"
                    name="phone"
                    className="furniture-input w-full h-[3rem]"
                    type={!selectedAddress ? "phone" : "default"}
                />
                {/* {accessToken &&
                    <FormCheckbox name="isCreateAddress" valuePropName={true}>
                        <span> Create a saved address for this address</span>
                    </FormCheckbox>
                } */}
            </div>
        </section>
    )
}

export default BillingAddress