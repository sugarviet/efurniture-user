import { create } from 'zustand';

const useCartStore = create((set) => ({
  isOpen: false,
  toggleCart: () => set(({ isOpen }) => ({ isOpen: !isOpen })),
  closeCart: () => set(() => ({ isOpen: false })),
}));

export default useCartStore;