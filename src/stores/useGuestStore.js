import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const store = set => ({
    wishlist: [],

    onFavored: (item) => set(store => ({ wishlist: [...store.wishlist, item] })),
    onUnFavored: (id) => set(store => ({ wishlist: store.wishlist.filter(item => item._id !== id) }))
})

export const useGuestStore = create(persist(devtools(store), { name: 'guest-store' }))

