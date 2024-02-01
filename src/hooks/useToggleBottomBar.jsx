import { create } from "zustand";

export const useToggleCheckoutBottomBar = create((set) => ({
  isOpen: false,
  toggleCheckoutBottomBar: () => set(({ isOpen }) => ({ isOpen: !isOpen })),
  closeCheckoutBottomBar: () => set(() => ({ isOpen: false })),
}));

export const useToggleLoginBottomBar = create((set) => ({
  isOpen: false,
  toggleLoginBottomBar: () => set(({ isOpen }) => ({ isOpen: !isOpen })),
  closeLoginBottomBar: () => set(() => ({ isOpen: false })),
}));
