import { Form } from "antd";
import Rating from "../Rating";
import TextArea from "../TextArea";
import { usePostAuth } from "../../hooks/api-hooks";
import { get_feedback_api } from "../../api/feedbackApi";
import useNotification from "../../hooks/useNotification";

function FeedbackForm({ id, onCancel, orderCode }) {
  const { success_message } = useNotification();
  const { mutate } = usePostAuth(get_feedback_api(), undefined, () => {
    success_message(null, null, "Your feedback has been recorded");
    onCancel();
  });

  const onFinish = (value) => {
    const { content, rating } = value;

    const body = {
      order_code: orderCode,
      product_id: id,
      content: content || "",
      rating: rating,
    };

    mutate(body);
  };

  return (
    <Form
      className="px-8"
      name="register"
      requiredMark="optional"
      labelCol={{
        span: 24,
      }}
      onFinish={onFinish}
    >
      <div className="flex flex-col gap-4">
        <span className="text-2xl font-semibold">Give feedback</span>
        <span className="text-lg text-gray-500">
          What do you think of your experience in using E-Furniture products and
          services?
        </span>
      </div>
      <Form.Item
        rules={[
          {
            required: true,
            message: "Please tell me your experience",
          },
        ]}
        name="rating"
      >
        <Rating className="mt-4" />
      </Form.Item>
      <Form.Item
        valuePropName=""
        label="What are the main reasons for your rating?"
        name="content"
      >
        <TextArea />
      </Form.Item>
      <div className="flex justify-end gap-4 items-center">
        <button className="furniture-button-black-hover px-4 py-4">
          Submit
        </button>
        <button
          onClick={onCancel}
          type="button"
          className="px-4 py-4 uppercase font-semibold text-gray-500 bg-gray-50"
        >
          Cancel
        </button>
      </div>
    </Form>
  );
}

export default FeedbackForm;
