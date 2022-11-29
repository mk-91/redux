import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { cartReducer } from '../features/cart/cartSlice';
import counterReducer from '../features/counter/counterSlice';
import { productsReducer } from '../features/product/productsSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
    products: productsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
