import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const store = set => ({
    wishlist: [],

    addToWishlist: (item) => set(store => ({ wishlist: [...store.wishlist, item] })),
    deleteFromWishlist: (id) => set(store => ({ wishlist: store.wishlist.filter(item => item._id !== id) }))
})

export const useWishlist = create(persist(devtools(store), { name: 'wishlist' }))

