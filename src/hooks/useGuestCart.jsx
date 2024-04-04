import useCartStore from "../stores/useCartStore";
import { useGuestStore } from "../stores/useGuestStore";
import useNotification from "./useNotification";
import { sha256 } from "js-sha256";

function useGuestCart() {
  const { cart, setCart } = useGuestStore();
  const { success_message, error_message } = useNotification();
  const { toggleCart } = useCartStore();

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

  const increaseQuantity = (code) => {
    const cartClone = [...cart];
    const item = cartClone.find((item) => item.code === code);

    item.quantity_in_cart += 1;

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

  const getTotalPrice = () => {
    return cart.reduce(
      (total, item) => total + item.sale_price * item.quantity_in_cart,
      0
    );
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

  const clearCart = () => {
    setCart([]);
  };

  return {
    cart,
    updateVariation,
    addToCart,
    decreaseQuantity,
    increaseQuantity,
    removeFromCart,
    updateQuantity,
    getTotalPrice,
    clearCart,
    isLoading: false,
  };
}

export default useGuestCart;
