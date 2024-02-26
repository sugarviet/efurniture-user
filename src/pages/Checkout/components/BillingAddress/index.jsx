import FormInput from "@components/FormInput";

function BillingAddress() {
    return (
        <section className="w-full max-w-[43.75rem]">
            <h2 className='font-HelveticaBold  text-[13px] lg:text-[1rem] leading-[1.20833] tracking-[0.08em] pb-4'>BILLING ADDRESS</h2>

            <div className="furniture-divided-bottom pb-10 mb-5">
                <select className='furniture-input w-full h-[3rem] text-base tracking-[0.8px] leading-[48px] text-ellipsis'>
                    <option value="">Select from saved addresses</option>
                    <option value="address">Tp Hồ Chí Minh - 18/19, Tân Lập 1, Phường Hiệp Phú, Quận 9, Tp Hồ Chí Minh</option>
                </select>
            </div>

            <FormInput
                label="First Name"
                name="firs_tName"
                className="furniture-input w-full h-[3rem]"
                type="firstName"
            />

            <FormInput
                label="Last Name"
                name="last_name"
                className="furniture-input w-full h-[3rem]"
                type="lastName"
            />

            <FormInput
                label="Ward"
                name="ward"
                className="furniture-input w-full h-[3rem]"
                type="ward"
            />
            <FormInput
                label="District"
                name="district"
                className="furniture-input w-full h-[3rem]"
                type="district"
            />

            <FormInput
                label="Province"
                name="province"
                className="furniture-input w-full h-[3rem]"
                initialValue="Thành Phố Hồ Chí Minh"
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