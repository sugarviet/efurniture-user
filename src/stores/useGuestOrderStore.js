import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useOrderStore = create(
    persist(
        (set) => ({
            selectedPayment: "COD",
            orderProducts: [],
            orderShipping: [],
            total: 0,
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