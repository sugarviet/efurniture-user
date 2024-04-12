import { Rate } from "antd";
import LoadingSpinner from "../../../../components/LoadingSpinner";
import useFeedback from "../../../../hooks/useFeedback";
import RatingTracking from "../../../../components/RatingTracking";
import { RATING_VALUES } from "../../../../constants/enum";
import FeedbackCard from "../../../../components/FeedbackCard";

function ProductFeedback({ product }) {
  const {
    get_average_rating,
    isLoading,
    get_total_feedback,
    get_total_feedback_at_rate,
    get_all_feedback,
  } = useFeedback(product._id);

  if (isLoading) return <LoadingSpinner />;

  if (get_total_feedback() <= 0)
    return (
      <span className="text-gray-500 text-md px-32">Have no feedbacks</span>
    );

  return (
    <section className="px-32">
      <div className="mb-4">
        <span className="font-semibold text-lg">
          Feedbacks of {product.name}
        </span>
        <div className="flex items-center">
          <span className="text-2xl font-bold">
            {get_average_rating().toFixed(1)}
          </span>
          <Rate
            className="text-black mx-2"
            disabled
            allowHalf
            value={get_average_rating()}
          />
          <span className="text-lg mx-2">{get_total_feedback()} feedbacks</span>
        </div>
      </div>
      {[...RATING_VALUES].reverse().map((value, index) => {
        const { label, rate } = value;
        return (
          <RatingTracking
            key={index}
            maxValue={get_total_feedback()}
            value={get_total_feedback_at_rate(rate)}
            label={label}
            rate={rate}
          />
        );
      })}
      {get_all_feedback().map((feedback, index) => {
        return (
          <div
            key={index}
            className="my-2 border-b-gray-200 border-transparent py-4 border-[1px]"
          >
            <FeedbackCard feedback={feedback} />
          </div>
        );
      })}
    </section>
  );
}

export default ProductFeedback;
