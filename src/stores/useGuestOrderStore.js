import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";


const initialValues = {
    selectedPayment: "COD",
    note: "",
    orderShipping: [],
    selectedDistrict: '',
    selectedWard: '',
};

export const useOrderStore = create(
    persist(
        (set) => ({
            ...initialValues,
            setSelectedDistrict: (district) => set({ selectedDistrict: district }),
            setSelectedWard: (ward) => set({ selectedWard: ward }),
            setSelectedPayment: (payment) => set({ selectedPayment: payment }),
            setNote: (noteFilled) => set({ note: noteFilled }),
            setOrderShipping: (shipping) => set({ orderShipping: shipping }),
        }),
        {
            name: "order-guest-storage",
            storage: createJSONStorage(() => sessionStorage),
        },
    )
);