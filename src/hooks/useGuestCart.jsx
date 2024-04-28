import useCartStore from "../stores/useCartStore";
import { useGuestStore } from "../stores/useGuestStore";
import useNotification from "./useNotification";
import { sha256 } from "js-sha256";
import { useEffect } from "react";
import { useFetch } from "./api-hooks";
import { get_furniture_info_api } from "../api/furnitureApi";

function useGuestCart() {
  const { cart, setCart } = useGuestStore();
  const { success_message, error_message } = useNotification();
  const { toggleCart } = useCartStore();

  const getJsonStringCart = () => {
    const body = [...cart].map((furniture) => {
      const { _id, select_variation, quantity_in_cart } = furniture;
      return {
        variation: select_variation.map((variation) => {
          const { variation_id, property_id } = variation;
          return {
            variation_id: variation_id,
            property_id: property_id,
          };
        }),
        product_id: _id,
        quantity: quantity_in_cart,
      };
    });

    return JSON.stringify(body);
  };

  const { data, isLoading } = useFetch(
    get_furniture_info_api(getJsonStringCart())
  );

  const getCart = () => data || [];

  const hashCodeItem = (item) => {
    const values = [
      item._id,
      ...item.select_variation.map((item) => item.property_id),
    ];

    return sha256.update(values.join("")).hex().slice(0, 20);
  };

  const addToCart = (item) => {
    item.code = hashCodeItem(item);

    const isInCart = cart.some((i) => i.code === item.code);

    if (!isInCart) {
      setCart([...cart, { ...item, quantity_in_cart: 1 }]);
      toggleCart();
      return;
    }

    increaseQuantity(item.code);
    success_message(null, null, `${item.name} has already been in the cart`);
  };

  const removeFromCart = (code) => {
    setCart([...cart.filter((item) => item.code !== code)]);
  };

  const increaseQuantity = (code, quantity = 1) => {
    const cartClone = [...cart];
    const item = cartClone.find((item) => item.code === code);

    item.quantity_in_cart += quantity;

    setCart(cartClone);
  };

  const decreaseQuantity = (code) => {
    const cartClone = [...cart];
    const item = cartClone.find((item) => item.code === code);

    item.quantity_in_cart -= 1;

    if (item.quantity_in_cart <= 0) return removeFromCart(code);

    setCart(cartClone);
  };

  const updateQuantity = (code, quantity) => {
    const cartClone = [...cart];
    const item = cartClone.find((item) => item.code === code);

    item.quantity_in_cart = quantity;

    if (item.quantity_in_cart <= 0) return removeFromCart(code);

    setCart(cartClone);
  };

  const updateVariation = (item) => {
    const code = hashCodeItem(item);
    const isInCart = cart.some((i) => i.code === code);

    if (isInCart)
      return error_message(null, null, "Product has already been in the cart");

    const currentItem = cart.find((i) => i.code === item.code);
    currentItem.code = code;
    currentItem.select_variation = item.select_variation;

    setCart([...cart]);
  };

  const addManyToCart = (list) => {
    const subCart = [...cart];
    for (let i = 0; i < list.length; i++) {
      const { product, quantity } = list[i];
      product.code = hashCodeItem(product);

      const isInCart = subCart.some((i) => i.code === product.code);

      if (!isInCart) {
        subCart.push({ ...product, quantity_in_cart: quantity });
      } else {
        increaseQuantity(product.code, quantity);
      }
    }

    setCart([...subCart]);
    toggleCart();
  };

  const clearCart = () => {
    setCart([]);
  };

  return {
    cart,
    getCart,
    addManyToCart,
    updateVariation,
    addToCart,
    decreaseQuantity,
    increaseQuantity,
    removeFromCart,
    updateQuantity,
    clearCart,
    isLoading: false,
  };
}

export default useGuestCart;
