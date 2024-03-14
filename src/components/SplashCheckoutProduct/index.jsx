import { useState, useEffect } from "react";
import CheckoutProduct from "@components/CheckoutProduct"
import { useToggleCheckoutBottomBar } from "@hooks/useToggleBottomBar";
import { withGuestCart } from "../../hocs/withGuestCart";
import { withUserCart } from "../../hocs/withUserCart"
import useAuth from "../../stores/useAuth";

const GuestCheckoutProduct = withGuestCart(CheckoutProduct)
const UserCheckoutProduct = withUserCart(CheckoutProduct)

function SplashCheckoutProduct() {

    const [splashCheckout, setSplashCheckout] = useState(true);

    const { closeCheckoutBottomBar } = useToggleCheckoutBottomBar();

    const { accessToken } = useAuth();

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1024) {
                setSplashCheckout(false);
            } else {
                setSplashCheckout(true);
                closeCheckoutBottomBar();
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={`w-full fixed bottom-0 lg:bottom-[-100%] bg-white h-[calc(90%_-_1.5rem)]  overflow-hidden z-[7777]  ${!splashCheckout && "bottom-[-100%] duration-500"}`}>
            {accessToken ? <UserCheckoutProduct /> : <GuestCheckoutProduct />}
        </div>
    )
}

export default SplashCheckoutProduct