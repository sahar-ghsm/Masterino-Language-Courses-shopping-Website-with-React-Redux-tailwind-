import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    increaseItemQuantity(state, action) {
      const item = state.cart.find((c) => c.id === action.payload);
      item.quantity++;
    },
    descreaseItemQuantity(state, action) {
      const item = state.cart.find((c) => c.id === action.payload);
      item.quantity--;
    },
    clearCart(state, action) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  descreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
export const getTotalQuantityOfCart = (store) =>
  store.cart?.cart?.reduce((sum, item) => sum + item.quantity, 0);
export const getTotalPriceOfCart = (store) =>
  store.cart.cart.reduce((sum, item) => sum + item.quantity * item.price, 0);
export const getShoppingCart = (store) => store.cart.cart;
export const getItemQuantityById = (id) => (state) =>
  state.cart.cart.find((item) => item.id === id)?.quantity || 0;

// export const getItemQuantityById = (id) => (state) =>
// state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;
