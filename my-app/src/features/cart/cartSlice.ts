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
  isDisplayed: boolean;
}

const initialState: CartState = {
  items: [],
  isDisplayed: false,
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

    increaseQuantity: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const item = state.items.find((i) => i.id === id);
      if (item) {
        item.quantity++;
      }
    },
    decreaseQuantity: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const item = state.items.find((i) => i.id === id);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else state.items = state.items.filter((i) => i.id !== id);
      }
    },
    toggleCart: (state) => {
      state.isDisplayed = !state.isDisplayed;
    },
  },
});

export const {
  addItem,
  removeItem,
  decreaseQuantity,
  increaseQuantity,
  toggleCart,
} = cartSlice.actions;

export const selectIsDisplayed = (state: RootState) => {
  return state.cart.isDisplayed;
};

export const selectItemsQuantity = (state: RootState) => {
  // let total = 0;
  // state.cart.items.forEach((item) => {
  //   total += item.quantity;
  // });

  // rozwiązanie przy użyciu funkcji reduce zamieniającej tablicę w inny obiekt
  // pierwszy argument to acumulator (akumuluje wartości które chcemy zwrócić)
  const total = state.cart.items.reduce((acc, item) => {
    acc += item.quantity;
    return acc;
  }, 0);

  return total;
};

export const selectTotal = (state: RootState) => {
  const total = state.cart.items.reduce((acc, item) => {
    acc += item.quantity * item.price;
    return acc;
  }, 0);
  return total;
};

export const selectItems = (state: RootState) => {
  return state.cart.items;
};

// Sposób 2 ( Ten lepszy )
export const cartReducer = cartSlice.reducer;

// Sposób 1
// export default cartSlice.reducer;
