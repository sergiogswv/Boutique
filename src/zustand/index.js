import { create } from 'zustand'

export const useStore = create((set) => ({
  items: [],
  increaseItems: (item) => set((state) => ({ items: [...state.items, item] }))
}))
