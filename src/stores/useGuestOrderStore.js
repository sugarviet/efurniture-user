import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useOrderStore = create(
    persist(
        (set) => ({
            selectedPayment: "COD",
            orderProducts: [],
            orderShipping: [],
            selectedDistrict: '',
            selectedWard: '',
            total: 0,
            setSelectedDistrict: (district) => set({ selectedDistrict: district }),
            setSelectedWard: (ward) => set({ selectedWard: ward }),
            setSelectedPayment: (payment) => set({ selectedPayment: payment }),
            setOrderProducts: (product) => set({ orderProducts: product }),
            setOrderShipping: (shipping) => set({ orderShipping: shipping }),
            setTotal: (totalValue) => set({ total: totalValue }),
        }),
        {
            name: "order-guest-storage",
            storage: createJSONStorage(() => sessionStorage),
        },
    )
)