import { useGuestStore } from "../stores/useGuestStore";

function useGuestCart() {
    const { cart, setCart } = useGuestStore();

    const addToCart = (item) => {
        const isInCart = cart.some(i => i._id === item._id);

        if (isInCart) return increaseQuantity(item._id);

        setCart([...cart, { ...item, quantity_in_cart: 1 }])
    }

    const removeFromCart = (id) => {
        setCart([...cart.filter(item => item._id !== id)]);
    }

    const increaseQuantity = (id) => {
        const cartClone = [...cart];
        const item = cartClone.find(item => item._id === id);

        item.quantity_in_cart += 1;

        setCart(cartClone);
    }

    const decreaseQuantity = (id) => {
        const cartClone = [...cart];
        const item = cartClone.find(item => item._id === id);

        item.quantity_in_cart -= 1;

        if (item.quantity_in_cart <= 0) return removeFromCart(id);

        setCart(cartClone);
    }

    const updateQuantity = (id, quantity) => {
        const cartClone = [...cart];
        const item = cartClone.find(item => item._id === id);

        item.quantity_in_cart = quantity;

        if (item.quantity_in_cart <= 0) return removeFromCart(id);

        setCart(cartClone);
    }

    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + item.sale_price * item.quantity_in_cart, 0);
    }

    return { cart, addToCart, decreaseQuantity, increaseQuantity, removeFromCart, updateQuantity, getTotalPrice, isLoading: false };
}

export default useGuestCart;