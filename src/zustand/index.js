import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

export const useStore = create(
  devtools(
    (set, get) => ({
      items: [],
      increaseItems: (item) => {
        if (get().items.length > 0) {
          const itemExist = get().items.find((i) => i._id === item._id)
          if (!itemExist) {
            console.log('nuevo item, no esta en array')
            set((state) => ({ items: [...state.items, item] }))
            return
          }

          const duplicateItem = get().items.map(
            (i) => i._id === item._id && i.sizes !== item.sizes
          )
          if (duplicateItem.includes(true) && !duplicateItem.includes(false)) {
            set((state) => ({ items: [...state.items, item] }))
            return
          }

          const cleanArray = get().items.filter(
            (i) => i._id === item._id && i.sizes !== item.sizes
          )
          cleanArray.push(item)
          set((state) => ({ items: cleanArray }))
        }
        if (get().items.length === 0) {
          set((state) => ({ items: [...state.items, item] }))
        }
      },
      token: null,
      handleToken: (t) => set((state) => ({ token: t }))
    })
  ),
  {
    name: 'ecommerce-storage' // name of the item in the storage (must be unique)
  }
)
