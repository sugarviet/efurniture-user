import { useLocation } from "react-router-dom";
import { get_order_by_pay_os, get_order_by_pay_os_guest } from "../../api/orderHistoryApi";
import OrderConfirmationDetail from "../../components/OrderConfirmationDetail";
import { withFetchDataWithHeaders } from "../../hocs/withFetchDataWithHeaders";
import { useEffect } from "react";
import useNavigation from "../../hooks/useNavigation";
import useGuestCart from "../../hooks/useGuestCart";
import useAuth from "../../stores/useAuth";
import { withFetchData } from "../../hocs/withFetchData";

function OrderConfirmation() {

  const { accessToken } = useAuth();

  const location = useLocation();

  const params = new URLSearchParams(location.search);

  const orderConfirmationParams = params.get("orderCode")

  const OrderConfirmationDetailWithOnline = withFetchDataWithHeaders(OrderConfirmationDetail, () =>
    get_order_by_pay_os(orderConfirmationParams)
  );
  const OrderConfirmationDetailWithOnlineGuest = withFetchData(OrderConfirmationDetail, () =>
    get_order_by_pay_os_guest(orderConfirmationParams)
  );

  const { go_to_home } = useNavigation();

  const orderConfirmationState = location.state || { orderConfirmationState: null };

  useEffect(() => {
    if (orderConfirmationState.orderConfirmationState === null && !orderConfirmationParams) {
      go_to_home();
    }
  }, [orderConfirmationParams, orderConfirmationState]);

  return (
    <div>
      {accessToken ? (
        orderConfirmationParams ? (
          <OrderConfirmationDetailWithOnline data={orderConfirmationState} />
        ) : (
          <OrderConfirmationDetail data={orderConfirmationState} />
        )
      ) : (
        orderConfirmationParams ? (
          <OrderConfirmationDetailWithOnlineGuest />
        ) : (
          <OrderConfirmationDetail data={orderConfirmationState} />
        )
      )}

    </div>
  );
}

export default OrderConfirmation
