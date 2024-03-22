import { get_feedback_api_of } from "../api/feedbackApi";
import { useFetchWithAuth } from "./api-hooks";

function useFeedback(id) {
  const { data, isLoading } = useFetchWithAuth(get_feedback_api_of(id));

  const get_average_rating = () =>
    data.reduce((rating, cur) => rating + cur.rating, 0) / data.length;

  const get_total_feedback = () => data.length;

  const get_total_feedback_at_rate = (rate) =>
    data.reduce((total, cur) => {
      if (cur.rating !== rate) return total;

      return total + 1;
    }, 0);

  const get_all_feedback = () =>
    data.map((feedback) => {
      const { name } = feedback;
      return { name: name || "Anh ba khía", ...feedback };
    });

  return {
    get_all_feedback,
    get_average_rating,
    isLoading,
    get_total_feedback,
    get_total_feedback_at_rate,
  };
}

export default useFeedback;
