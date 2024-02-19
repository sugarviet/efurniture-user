import { Form } from "antd";
import AppInput from "@components/ui/AppInput"

function BillingAddress() {
    return (
        <section className="w-full max-w-[43.75rem]">
            <h2 className='font-HelveticaBold  text-[13px] lg:text-[1rem] leading-[1.20833] tracking-[0.08em] pb-4'>BILLING ADDRESS</h2>
            <Form.Item
                label="First Name"
                name="firstName"
                className="w-auto text-[0.875rem] leading-[1.715] tracking-[0.05em]"
                rules={[
                    {
                        required: false,
                        message: "Please input your username!",
                    },
                ]}
            >
                <AppInput type="text" className="furniture-input w-full h-[3rem]" />
            </Form.Item>

            <Form.Item
                label="Last Name"
                name="lastName"
                className="w-auto text-[0.875rem] leading-[1.715] tracking-[0.05em]"
                rules={[
                    {
                        required: false,
                        message: "Please input your username!",
                    },
                ]}
            >
                <AppInput type="textv" className="furniture-input w-full h-[3rem]" />
            </Form.Item>

            <Form.Item
                label="Ward"
                name="ward"
                className="w-auto text-[0.875rem] leading-[1.715] tracking-[0.05em]"
                rules={[
                    {
                        required: false,
                        message: "Please input your username!",
                    },
                ]}
            >
                <AppInput type="text" className="furniture-input w-full h-[3rem]" />
            </Form.Item>

            <Form.Item
                label="District"
                name="district"
                className="w-auto text-[0.875rem] leading-[1.715] tracking-[0.05em]"
                rules={[
                    {
                        required: false,
                        message: "Please input your username!",
                    },
                ]}
            >
                <AppInput type="text" className="furniture-input w-full h-[3rem]" />
            </Form.Item>

            <Form.Item
                label="Ho Chi Minh"
                name="city"
                className="w-auto text-[0.875rem] leading-[1.715] tracking-[0.05em]"
                rules={[
                    {
                        required: false,
                        message: "Please input your username!",
                    },
                ]}
            >
                <AppInput type="text" className="furniture-input w-full h-[3rem]" />
            </Form.Item>

            <Form.Item
                label="Address (Please remember floor and apartment)"
                name="address"
                className="w-auto text-[0.875rem] leading-[1.715] tracking-[0.05em]"
                rules={[
                    {
                        required: false,
                        message: "Please input your username!",
                    },
                ]}
            >
                <AppInput type="text" className="furniture-input w-full h-[3rem]" />
            </Form.Item>

            <Form.Item
                label="Phone"
                name="phone"
                className="w-auto text-[0.875rem] leading-[1.715] tracking-[0.05em]"
                rules={[
                    {
                        required: false,
                        message: "Please input your username!",
                    },
                ]}
            >
                <AppInput type="text" className="furniture-input w-full h-[3rem]" />
            </Form.Item>

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