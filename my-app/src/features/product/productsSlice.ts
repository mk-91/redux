import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { fetchProducts, fetchSortedProducts } from './productsAPI';

export interface ProductModel {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  image: string;
}

export interface ProductsState {
  products: ProductModel[];
  searchResults: ProductModel[];
  loading: boolean;
}

const initialState: ProductsState = {
  products: [],
  searchResults: [],
  loading: false,
};

export const loadProducts = createAsyncThunk(
  'products/getProducts',
  async (): Promise<ProductModel[]> => {
    const productsResponse = await fetchProducts();

    console.log(productsResponse);

    const products = productsResponse.map((product) => {
      return {
        id: product.id.toString(),
        name: product.title,
        description: product.description,
        price: product.price,
        image: product.image,
        currency: 'PLN',
      };
    });

    console.log(products);

    return products;
  }
);

export const sortProducts = createAsyncThunk(
  'products/getSortedProducts',
  async (sort: 'asc' | 'desc'): Promise<ProductModel[]> => {
    const productsResponse = await fetchSortedProducts(sort);

    const products = productsResponse.map((product) => {
      return {
        id: product.id.toString(),
        name: product.title,
        description: product.description,
        price: product.price,
        image: product.image,
        currency: 'PLN',
      };
    });

    return products;
  }
);

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // dispatch(searchProducts({ query: "Call of Duty "}))

    // PayloadAction<{ id: string }
    // dispatch(jakaAkca({ id: item.id }))

    // PayloadAction<string>
    // dispatch(jakasAkcja(item.id));

    searchProducts: (
      state: ProductsState,
      action: PayloadAction<{ query: string }>
    ) => {
      const { query } = action.payload;

      state.searchResults = state.products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.searchResults = action.payload;
        state.loading = false;
      })
      .addCase(loadProducts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(sortProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.searchResults = action.payload;
        state.loading = false;
      })
      .addCase(sortProducts.pending, (state, action) => {
        state.loading = true;
      });
  },
});

// todo 3
// Zaktualizuj stan w momencie kiedy sortProducts jest wykonywane ( pending ) oraz kiedy już zostanie wykonane ( fulfilled )

export const selectProducts = (state: RootState) => state.products.products;

export const selectSearchResults = (state: RootState) =>
  state.products.searchResults;

export const selectIsLoading = (state: RootState) => state.products.loading;

export const { searchProducts } = productsSlice.actions;

export const productsReducer = productsSlice.reducer;
