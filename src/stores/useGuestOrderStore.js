import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";


const initialValues = {
    selectedPayment: "COD",
    selectedAddress: false,
    selectedDelivery: "efurniture",
    selectedCoupon: null,
    note: "",
    orderShipping: [],
    selectedDistrict: {},
    selectedWard: {},
};

export const useOrderStore = create(
    persist(
        (set) => ({
            ...initialValues,
            setSelectedDistrict: (district) => set({ selectedDistrict: district }),
            setSelectedWard: (ward) => set({ selectedWard: ward }),
            setSelectedPayment: (payment) => set({ selectedPayment: payment }),
            setSelectedDelivery: (delivery) => set({ selectedDelivery: delivery }),
            setNote: (noteFilled) => set({ note: noteFilled }),
            setOrderShipping: (shipping) => set({ orderShipping: shipping }),
            setSelectedAddress: (address) => set({ selectedAddress: address }),
            setSelectedCoupon: (coupon) => set({ selectedCoupon: coupon }),
            reset: () => set(initialValues)
        }),
        {
            name: "order-guest-storage",
            storage: createJSONStorage(() => sessionStorage),
        },
    )
);