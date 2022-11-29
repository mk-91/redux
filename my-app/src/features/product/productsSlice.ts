import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface ProductModel {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
}

export interface ProductState {
  products: ProductModel[];
}

const initialState: ProductState = {
  products: [
    {
      id: '1',
      name: 'Call od Duty',
      price: 150,
      currency: 'PLN',
      description: 'Super gra',
    },
    {
      id: '2',
      name: 'Fifa 2022',
      price: 129,
      currency: 'PLN',
      description: 'Super gra',
    },
    {
      id: '3',
      name: 'Cyberpunk',
      price: 100,
      currency: 'PLN',
      description: 'Super gra',
    },
    {
      id: '4',
      name: 'God of War',
      price: 199,
      currency: 'PLN',
      description: 'Super gra',
    },
    {
      id: '5',
      name: 'NBA 2k22',
      price: 99,
      currency: 'PLN',
      description: 'Super gra',
    },
    {
      id: '6',
      name: 'Crash Bandicoot',
      price: 149,
      currency: 'PLN',
      description: 'Super gra',
    },
    {
      id: '7',
      name: 'Horizon',
      price: 169,
      currency: 'PLN',
      description: 'Super gra',
    },
    {
      id: '8',
      name: 'Minecraft',
      price: 99,
      currency: 'PLN',
      description: 'Super gra',
    },
  ],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});

export const selectProducts = (state: RootState) => state.products.products;

export const productsReducer = productsSlice.reducer;
