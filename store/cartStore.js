import { create } from 'zustand'

export const useCartStore = create((set, get) => ({
  items: [],

  addToCart: (item) => {
    const existing = get().items.find((i) => i.id === item.id)
    if (existing) {
      set({
        items: get().items.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
        ),
      })
    } else {
      set({ items: [...get().items, item] })
    }
  },
updateQuantity: (id, quantity) => {
  set({
    items: get().items.map((item) =>
      item.id === id ? { ...item, quantity } : item
    ),
  })
},

removeFromCart: (id) => {
  set({ items: get().items.filter((item) => item.id !== id) })
},

  removeFromCart: (id) => {
    set({ items: get().items.filter((item) => item.id !== id) })
  },

  updateQuantity: (id, quantity) => {
    set({
      items: get().items.map((item) =>
        item.id === id ? { ...item, quantity } : item
      ),
    })
  },

  clearCart: () => set({ items: [] }),

  total: () =>
    get().items.reduce((sum, item) => sum + item.price * item.quantity, 0),
}))
