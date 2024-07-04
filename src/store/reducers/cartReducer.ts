import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { CartType } from "@/common/types/cart";

// Define a type for the slice state
interface CartState {
  items: CartType[];
}

// Define the initial state using that type
const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartType>) => {
      const isInCart = state.items.find((el) => el.id === action.payload.id);
      if (!!isInCart) {
        isInCart.quantity += 1;
      } else {
        const newProduct = { ...action.payload, quantity: 1 };
        state.items.push(newProduct);
      }
    },
    removeFromCart: (state, action: PayloadAction<{ id: string }>) => {
      //...use id that we have passed and remove the item from basket with that id

      let newBasket = [...state.items];

      // find index of first item in basket
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (index !== -1) {
        //splice item out of basket
        newBasket.splice(index, 1);
        state.items = newBasket;
      } else {
        console.warn(`Can't remove product as its not in basket`);
      }
    },

    increase: (state, action: PayloadAction<{ id: string }>) => {
      const item = state.items.find((el) => el.id === action.payload.id);
      if(item) {
        item.quantity += 1;
      }
    },

    decrease: (state, action: PayloadAction<{ id: string }>) => {
      const item = state.items.find((el) => el.id === action.payload.id);
      if(item) {
        item.quantity -= 1;
      }
    },

    removeAll: (state) => {
      state.items = []
    },
  },
});

export const { addToCart, removeFromCart, increase, decrease, removeAll } =
  cartSlice.actions;

// Other code such as selectors can use the imported `RootState` type

export const selectCartItems = (state: RootState) => state.cart.items;

export const selectCartItemsCount = (state: RootState) =>
  state.cart.items.length;

export const selectCartTotal = (state: RootState) => {
  const totalAmount = state.cart.items.reduce(
    (total, item) => (total += item.price * item.quantity),
    0
  );
  return totalAmount;
};

export default cartSlice.reducer;
