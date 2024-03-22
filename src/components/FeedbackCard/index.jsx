import { Rate } from "antd";
import calcTimeFrom from "../../utils/calcTimeFrom";

function FeedbackCard({ feedback }) {
  const { rating, content, name, updatedAt } = feedback;
  return (
    <section className="flex flex-col">
      <span className="font-semibold">{name}</span>
      <Rate value={rating} className="text-xs text-black" disabled />
      <span>{content}</span>
      <span className="text-gray-400 text-xs mt-2">
        {calcTimeFrom(updatedAt)}
      </span>
    </section>
  );
}

export default FeedbackCard;
