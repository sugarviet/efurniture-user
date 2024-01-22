import { create } from "zustand";

const INITIAL_TAB = "account"

const useSwithTab = create((set) => ({
    activeTab: INITIAL_TAB,
    handleChangeTab: (tabKey) => set({ activeTab: tabKey }),
}))

export default useSwithTab;