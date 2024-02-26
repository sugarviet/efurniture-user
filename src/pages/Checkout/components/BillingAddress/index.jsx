import FormInput from "@components/ui/FormInput";

function BillingAddress() {
    return (
        <section className="w-full max-w-[43.75rem]">
            <h2 className='font-HelveticaBold  text-[13px] lg:text-[1rem] leading-[1.20833] tracking-[0.08em] pb-4'>BILLING ADDRESS</h2>

            <FormInput
                label="First Name"
                name="firstName"
                className="furniture-input w-full h-[3rem]"
                type="firstName"
            />

            <FormInput
                label="Last Name"
                name="lastName"
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
                label="City"
                name="city"
                className="furniture-input w-full h-[3rem]"
                initialValue="Ho Chi Minh"
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