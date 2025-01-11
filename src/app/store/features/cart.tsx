import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  price: string | number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Action to add item to the cart
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const itemExists = state.items.find(item => item.idMeal === action.payload.idMeal);
      if (itemExists) {
        itemExists.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
    },
    // Action to remove item from the cart
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.idMeal !== action.payload);
    },
    // Action to update the quantity of an item in the cart
    updateItemQuantity: (state, action: PayloadAction<{ index: number; quantity: number }>) => {
      const { index, quantity } = action.payload;
      if (state.items[index]) {
        state.items[index].quantity = quantity;
      }
    },
    // Action to clear all items in the cart
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, updateItemQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
