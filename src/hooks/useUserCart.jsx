import { useEffect, useState } from "react";
import { get_add_to_cart_api, get_cart_api, get_decrease_by_one_api, get_increase_by_one_api, get_remove_from_cart_api, get_update_quantity_api } from "../api/cartApi";
import { useDeleteAuth, useFetchWithAuth, usePostAuth, useUpdateWithAuth } from "./api-hooks";

function useUserCart() {
    const [cart, setCart] = useState([]);
    const { data, isLoading } = useFetchWithAuth(get_cart_api());
    const { mutate: addToCartMutation } = usePostAuth(get_add_to_cart_api(), undefined, () => { }, () => { }, get_cart_api());
    const { mutate: increaseQuantityMutation } = useUpdateWithAuth(get_increase_by_one_api(), undefined, () => { }, () => { }, get_cart_api())
    const { mutate: decreaseQuantityMutation } = useUpdateWithAuth(get_decrease_by_one_api(), undefined, () => { }, () => { }, get_cart_api())
    const { mutate: updateQuantityMutation } = useUpdateWithAuth(get_update_quantity_api(), undefined, () => { }, () => { }, get_cart_api())
    const { mutate: removeFromCartMutation } = useDeleteAuth(get_remove_from_cart_api(), undefined, () => { }, () => { }, get_cart_api());

    useEffect(() => {
        if (isLoading || !data) return;
        setCart(data.products);
    }, [data, isLoading])

    const addToCart = (item) => {
        const isInCart = cart.some(i => i._id === item._id);

        if (isInCart) return increaseQuantity(item._id);

        addToCartMutation({ "_id": item._id, "quantity": 1 })
    }

    const removeFromCart = (id) => {
        removeFromCartMutation({ "_id": id, "quantity": 1 });
    }

    const increaseQuantity = (id) => {
        increaseQuantityMutation({ "_id": id, "quantity": 1 })
    }

    const decreaseQuantity = (id) => {
        decreaseQuantityMutation({ "_id": id, "quantity": 1 })
    }

    const updateQuantity = (id, quantity) => {
        updateQuantityMutation({
            "product": {
                "_id": id
            },
            "newQuantity": quantity
        })
    }

    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + item.sale_price * item.quantity_in_cart, 0);
    }

    return { isLoading, cart, addToCart, decreaseQuantity, increaseQuantity, removeFromCart, getTotalPrice, updateQuantity };
}

export default useUserCart;