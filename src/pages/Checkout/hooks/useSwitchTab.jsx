import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const INITIAL_TAB = "billing"

const useSwitchTab = create(
    persist(
        (set) => ({
            activeTab: INITIAL_TAB,
            handleChangeTab: (tabKey) => set({ activeTab: tabKey }),
        }),
        {
            name: "active-checkout-tab",
            storage: createJSONStorage(() => sessionStorage),
        },
    )
);

export default useSwitchTab;