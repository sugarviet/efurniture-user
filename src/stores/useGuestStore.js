import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const store = set => ({
    wishlist: [],
    cart: [],

    favoriteRooms: [],

    onFavored: (item) => set(store => ({ wishlist: [...store.wishlist, item] })),
    onUnFavored: (id) => set(store => ({ wishlist: store.wishlist.filter(item => item._id !== id) })),

    setCart: (items) => set({ cart: [...items] }),

    onFavoredListProduct: (items) => set(store => ({ wishlist: [...store.wishlist, ...items] })),

    // onFavoredRooms: (room) => set()
})

export const useGuestStore = create(persist(devtools(store), { name: 'guest-store' }))

