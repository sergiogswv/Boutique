import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

export const useStore = create(
  devtools(
    (set, get) => ({
      items: [],
      setItemsStorage: (data) => {
        if (data?.length === 0) {
          console.log('items emptyu')
          set((state) => ({ items: [] }))
          return
        }
        set((state) => ({ items: data }))
      },
      increaseItems: (item) => {
        if (get().items.length > 0) {
          const itemExist = get().items.find((i) => i._id === item._id)
          // New item
          if (!itemExist) {
            console.log('nuevo item, no esta en array')
            set((state) => ({ items: [...state.items, item] }))

            // eslint-disable-next-line no-undef
            localStorage.setItem('webboutique_cart', JSON.stringify(get().items))
            return
          }

          // Duplicate item id but diferent size
          const duplicateItem = get().items.map(
            (i) => i._id === item._id && i.sizes !== item.sizes
          )
          console.log(duplicateItem)
          console.log(duplicateItem.includes(true))
          if (duplicateItem.includes(true)) {
            set((state) => ({ items: [...state.items, item] }))

            // eslint-disable-next-line no-undef
            localStorage.setItem('webboutique_cart', JSON.stringify(get().items))
            return
          }

          const cleanArray = get().items.filter(
            (i) => i._id === item._id && i.sizes !== item.sizes
          )
          cleanArray.push(item)
          set((state) => ({ items: cleanArray }))

          // eslint-disable-next-line no-undef
          localStorage.setItem('webboutique_cart', JSON.stringify(get().items))
        }
        // array items is empty
        if (get().items.length === 0) {
          set((state) => ({ items: [...state.items, item] }))

          // eslint-disable-next-line no-undef
          localStorage.setItem('webboutique_cart', JSON.stringify(get().items))
        }
      },
      deleteItems: (item) => {
        set((state) => ({ items: state.items.filter(i => i.idCart !== item.idCart) }))
      },
      token: null,
      handleToken: (t) => set((state) => ({ token: t })),
      user: [],
      handleUser: (data) => set((state) => ({ user: data }))
    })
  ),
  {
    name: 'ecommerce-storage' // name of the item in the storage (must be unique)
  }
)
