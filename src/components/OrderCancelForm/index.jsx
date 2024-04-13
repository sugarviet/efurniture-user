import { Form } from "antd";
import React, { useState } from 'react';
import BankOptionSelect from '../BankOptionSelect';
import TextArea from '../TextArea';
import useCancelOrder from "../../pages/Profile/hooks/useCancelOrder";

function OrderCancelForm({ data, isModalDeleteOpen, toggleModalDelete }) {

    const [form] = Form.useForm();

    const { cancelOrder } = useCancelOrder(data._id);

    const [selectedBank, setSelectedBank] = useState();

    const isCancelMethod = data.payment_method === "Online Payment" || data.order_checkout.paid.type === "Deposit"

    const onFinish = (values) => {
        let body;
        if (isCancelMethod) {
            body = {
                note: {
                    ...values,
                    account_number: selectedBank.account_number,
                    bank_account_name: selectedBank.bank_account_name,
                    bank_code: selectedBank.bank_code,
                    bank_name: selectedBank.bank_name
                }
            };
        } else {
            body = { note: values };
        }
        cancelOrder(body);
        form.resetFields();
        toggleModalDelete(!isModalDeleteOpen)
    };

    return (
        <section className={`${isCancelMethod ? "h-[600px]" : "h-[300px]"}`}>
            <Form
                form={form}
                className="px-8"
                name="cancelReason"
                requiredMark="optional"
                labelCol={{
                    span: 24,
                }}
                onFinish={onFinish}
                autoComplete="off"
            >
                <div className="flex flex-col gap-4">
                    <span className="text-2xl font-semibold">Cancel Order</span>
                </div>
                <Form.Item
                    label="What are the main reasons for cancelling your order?"
                    name="reason"
                >
                    <TextArea />
                </Form.Item>
                {isCancelMethod &&
                    <>
                        <span >Choose your bank account to receive refund amount.</span>
                        <BankOptionSelect selectedBank={selectedBank} setSelectedBank={setSelectedBank} />
                    </>
                }

                <div className="absolute bottom-8 right-8 flex gap-2 ml-auto justify-end pt-8">
                    <div
                        className="furniture-button-black-hover px-6 py-2.5"
                        onClick={toggleModalDelete}
                    >
                        Cancel
                    </div>
                    <button
                        type="submit"
                        className="furniture-button-black-hover px-6 py-2.5"
                    >
                        Confirm
                    </button>
                </div>
            </Form>
        </section>
    )
}

export default OrderCancelForm
