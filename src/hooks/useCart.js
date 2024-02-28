import { useGuestStore } from "../stores/useGuestStore";

function useCart() {
    const { cart, setCart } = useGuestStore();

    const addToCart = (item, quantity = 1) => {
        const isInCart = cart.some(i => i._id === item._id);

        if (isInCart) return increaseQuantity(item._id, quantity);

        setCart([...cart, { ...item, quantity: 1 }])
    }

    const removeFromCart = (id) => {
        setCart([...cart.filter(item => item._id !== id)]);
    }

    const increaseQuantity = (id, quantity) => {
        const cartClone = [...cart];
        const item = cartClone.find(item => item._id === id);

        item.quantity += quantity;

        setCart(cartClone);
    }

    const decreaseQuantity = (id, quantity) => {
        const cartClone = [...cart];
        const item = cartClone.find(item => item._id === id);

        item.quantity -= quantity;

        if (item.quantity <= 0) return removeFromCart(id);

        setCart(cartClone);
    }

    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    }

    return { cart, addToCart, decreaseQuantity, increaseQuantity, removeFromCart, getTotalPrice };
}

export default useCart;