import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface Item {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export interface CartState {
  items: Item[];
}

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Item>) => {
      const item = state.items.find((i) => i.id === action.payload.id);
      if (item) {
        item.quantity++;
      } else {
        state.items.push(action.payload);
      }
    },
    removeItem: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const itemsWhitoutGivenItem = state.items.filter(
        (item) => item.id !== id
      );
      state.items = itemsWhitoutGivenItem;
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export const selectItemsQuantity = (state: RootState) => {
  // 4. Zmodyfikuj selector, tak aby zliczał prawidłowo elementy
  let quantity = 0;

  state.cart.items.forEach((element) => {
    quantity = quantity + element.quantity;
  });
  return quantity;
};

export const selectItems = (state: RootState) => {
  return state.cart.items;
};

// Sposób 2 ( Ten lepszy )
export const cartReducer = cartSlice.reducer;

// Sposób 1
// export default cartSlice.reducer;
