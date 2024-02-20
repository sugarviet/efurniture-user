import { create } from "zustand";

const INITIAL_TAB = "billing"

const useSwitchTab = create((set) => ({
    activeTab: INITIAL_TAB,
    handleChangeTab: (tabKey) => set({ activeTab: tabKey }),
}))

export default useSwitchTab;