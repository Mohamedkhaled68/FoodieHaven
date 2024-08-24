import { create } from "zustand";

export const useCartStore = create((set, get) => ({
    cart: [],

    addItem: (item) => {
        const currCart = get().cart;
        const isItemFound = currCart.find((i) => i.id === item.id);

        if (isItemFound) {
            // Update quantity of the existing item
            const updatedCart = currCart.map((i) =>
                i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
            );
            set({ cart: updatedCart });
        } else {
            // Add new item to the cart
            set({ cart: [...currCart, { ...item, quantity: 1 }] });
        }
    },

    // Additional methods you might need
    removeItem: (itemId) => {
        const currCart = get().cart;
        const updatedCart = currCart.filter((i) => i.id !== itemId);
        set({ cart: updatedCart });
    },

    clearCart: () => set({ cart: [] }),
    getTotalPrice: () => {
        const currCart = get().cart;
        return currCart.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        );
    },
}));

export default useCartStore;
