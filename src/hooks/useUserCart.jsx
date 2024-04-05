import { useEffect, useState } from "react";
import {
  get_add_to_cart_api,
  get_cart_api,
  get_decrease_by_one_api,
  get_increase_by_one_api,
  get_remove_from_cart_api,
  get_update_quantity_api,
  get_update_variation_api,
} from "../api/cartApi";
import {
  useDeleteAuth,
  useFetchWithAuth,
  usePostAuth,
  useUpdateWithAuth,
} from "./api-hooks";
import useNotification from "./useNotification";
import useCartStore from "../stores/useCartStore";
import useAuth from "../stores/useAuth";

function useUserCart() {
  const [cart, setCart] = useState([]);
  const { accessToken } = useAuth();
  const { success_message, error_message } = useNotification();
  const { toggleCart } = useCartStore();
  const { data, isLoading } = useFetchWithAuth(get_cart_api(), undefined, {
    enabled: !!accessToken,
  });
  const { mutate: addToCartMutation } = usePostAuth(
    get_add_to_cart_api(),
    undefined,
    () => {
      toggleCart();
    },
    (error) => {
      error_message(null, null, error.message);
    },
    get_cart_api()
  );
  const { mutate: increaseQuantityMutation } = useUpdateWithAuth(
    get_increase_by_one_api(),
    undefined,
    () => {},
    () => {},
    get_cart_api()
  );
  const { mutate: decreaseQuantityMutation } = useUpdateWithAuth(
    get_decrease_by_one_api(),
    undefined,
    () => {},
    () => {},
    get_cart_api()
  );
  const { mutate: updateQuantityMutation } = useUpdateWithAuth(
    get_update_quantity_api(),
    undefined,
    () => {},
    () => {},
    get_cart_api()
  );
  const { mutate: removeFromCartMutation } = useDeleteAuth(
    get_remove_from_cart_api(),
    undefined,
    () => {},
    () => {},
    get_cart_api()
  );

  const { mutate: updateVariationMutation } = useUpdateWithAuth(
    get_update_variation_api(),
    undefined,
    () => {},
    (error) => {
      const message = error.response.data.error.message;
      error_message(null, null, message);
    },
    get_cart_api()
  );

  useEffect(() => {
    if (isLoading || !data) return;
    setCart(data.products);
  }, [data, isLoading]);

  const addToCart = (item) => {
    const { _id, select_variation } = item;

    const body = {
      _id: _id,
      variation: select_variation,
      quantity: 1,
    };

    addToCartMutation(body);
  };

  const removeFromCart = (code) => {
    removeFromCartMutation({ code: code, quantity: 1 });
  };

  const increaseQuantity = (code) => {
    increaseQuantityMutation({ code: code, quantity: 1 });
  };

  const decreaseQuantity = (code) => {
    decreaseQuantityMutation({ code: code, quantity: 1 });
  };

  const updateQuantity = (code, quantity) => {
    updateQuantityMutation({
      product: {
        code: code,
      },
      newQuantity: quantity,
    });
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => {
      const subPrice = item.select_variation.reduce(
        (total, cur) => total + cur.sub_price,
        0
      );
      return total + (item.sale_price + subPrice) * item.quantity_in_cart;
    }, 0);
  };

  const updateVariation = (item) => {
    const { code, _id, select_variation } = item;
    const body = {
      code: code,
      _id: _id,
      variation: select_variation,
    };
    updateVariationMutation(body);
  };

  return {
    isLoading,
    updateVariation,
    cart,
    addToCart,
    decreaseQuantity,
    increaseQuantity,
    removeFromCart,
    getTotalPrice,
    updateQuantity,
  };
}

export default useUserCart;
