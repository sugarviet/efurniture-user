import PropTypes from "prop-types";
import OrderHistoryCard from "../OrderHistoryCard";
function OrderHistory({ data }) {
  const isEmptyData = data.data.length === 0;

  return (
    <>
      {data?.data.map((order, index) => (
        <OrderHistoryCard data={order} key={index} />
      ))}
      {isEmptyData && (
        <div className="w-full h-[500px] flex flex-col items-center justify-center">
          <img
            className="w-52"
            src="https://res.cloudinary.com/dc4hafqoa/image/upload/v1710247931/eFurniture/empty-order_rlotiy.png"
          ></img>
          <p>No orders yet.</p>
        </div>
      )}
    </>
  );
}

OrderHistory.propTypes = {
  data: PropTypes.object,
};

export default OrderHistory;
