import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface Item {
  id: string;
  name: string;
  price: number;
}

export interface CartState {
  items: Item[]; // w koszyku będziemy przechowywać tablicę obiektów Item
}

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState, // jak nazwa i klucz jast taka sama to wystarczy podać initialState
  reducers: {
    addItem: (state, action: PayloadAction<Item>) => {
      state.items.push(action.payload); //przesłanie do stanu zawartości payloudu, push dodaje na końcu tablicy
    },
  },
});

export const { addItem } = cartSlice.actions;
// destrukturyzacja == export const addItem = cartSlice.actions.addItem
// bardzo przydatne przy
export const selectItemsQuantity = (state: RootState) => {
  return state.cart.items.length; // wyciągamy ilość produktów w koszyku
};

// klasyczny defolt export
// export default cartSlice.reducer;

// jest też taki trik z exportem żeby łatwiej importować
export const cartReducer = cartSlice.reducer;
