import { useOrderStore } from "../stores/useGuestOrderStore";

export const withBillingGuest = (WrappedComponent) => {
    return () => {

        const data = null;

        return <WrappedComponent userData={data} />;
    };
};
