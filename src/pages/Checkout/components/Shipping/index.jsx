import { Form } from "antd";
import DeliveryMethod from '../DeliveryMethod'

function Shipping() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      name="shipping"
      labelCol={{
        span: 24,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <article className='max-w-[43.75rem] font-HelveticaRoman text-[0.875rem] leading-[1.5] pb-[40px] tracking-[0.5px] pt-6 lg:pt-0'>
        <h2 className='font-HelveticaBold text-[1.5rem] leading-[1.20833] tracking-[0.08em] pb-2'>POINT OF SERVICE</h2>
        <p className='pb-[25px]'>This is the store where we will ship the furniture from and the place you need to reach out to with any questions.</p>
      </article>
      <DeliveryMethod />
      <section className='pt-28 max-w-[43.75rem] font-HelveticaRoman'>
        <h3 className='text-[14px] lg:text-[1rem] leading-[1.1875] tracking-[0.08em] font-HelveticaBold pb-5'>YOUR COMMENT:</h3>
        <article className='pb-[25px]'>
          <p className='text-[0.875rem] leading-[23.3px] tracking-[0.5px]'>Message to the store</p>
          <Form.Item name="messageToStore">
            <textarea className='focus:shadow-email appearance-none outline-none border-[#191915] border-[0.5px] h-[7rem] p-[1rem] text-[0.875rem] w-full'>
            </textarea>
          </Form.Item>
        </article>
        <button
          type="submit"
          className="furniture-button-black-hover w-full px-[55px] py-[14px] text-[0.6875rem] tracking-[0.125rem]"
        >
          continue to payment
        </button>
      </section>

    </Form>
  )
}

export default Shipping