import { create } from 'zustand'

const useCartStore = create((set) => ({
  isOpen: false,
  toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
  closeCart: () => set((isOpen) => ({ isOpen: false })),
}));

export default useCartStore;
