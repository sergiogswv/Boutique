import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

export const useStore = create(devtools(
  (set, get) => ({
    items: [],
    increaseItems: (item) => {
      console.log(get().items.map(i => i._id !== item._id ? i : { ...i, quantity: item.quantity, sizes: item.sizes }))

      if (get().items.length > 0) {
        get().items.map(i => i._id !== item._id
          ? set((state) => ({ items: [...state.items, item] }))
          : set((state) => ({ items: [...state.items, { ...i, quantity: item.quantity, sizes: item.sizes }] })))
        return
      }
      set((state) => ({ items: [...state.items, item] }))
    },
    token: null,
    handleToken: (t) => set((state) => ({ token: t }))
  })
))
