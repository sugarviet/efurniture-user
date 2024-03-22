import { useContext } from "react";
import { FurnitureCardContext } from "../../FurnitureCardContext";
import { Rate } from "antd";
import useFeedback from "../../../../hooks/useFeedback";

function FurnitureRating() {
  const { furniture } = useContext(FurnitureCardContext);
  const { get_average_rating, isLoading } = useFeedback(furniture._id);

  if (isLoading) return null;

  const averageRating = get_average_rating();

  if (!averageRating)
    return <span className="text-xs text-gray-500">have no feedbacks</span>;

  return (
    <div>
      <span>{`(${averageRating})`}</span>
      <Rate
        className="text-black text-xs ml-1"
        disabled
        value={averageRating}
        allowHalf
      />
    </div>
  );
}

export default FurnitureRating;
