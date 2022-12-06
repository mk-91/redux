import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Alert } from '../notifications/Alert';
import { AlertList } from '../notifications/AlertList';
import {
  loadProducts,
  ProductModel,
  selectIsLoading,
  selectProducts,
  selectSearchResults,
  sortProducts,
} from '../product/productsSlice';
import { Cart } from './Cart';
import { Product } from './Product';
import './Shop.css';

// tworzę komponent Shop
export function Shop() {
  const dispatch = useAppDispatch(); //akcja
  const products: ProductModel[] = useAppSelector(selectSearchResults);
  const isLoading = useAppSelector(selectIsLoading);

  useEffect(() => {
    dispatch(loadProducts());
  }, []);

  return (
    <div className='position-relative'>
      <Cart />
      <div className='container pt-5'>
        {isLoading ? (
          <div className='d-flex justify-content-center'>
            <div className='spinner-border' role='status'>
              <span className='visually-hidden'>Loading...</span>
            </div>
          </div>
        ) : (
          <div>
            <div className='mb-3'>
              <strong className='me-2'>Filters:</strong>
              <button
                className='btn btn-light me-1'
                onClick={() => {
                  dispatch(sortProducts('asc'));
                }}
              >
                <i className='bi bi-sort-alpha-down'></i>
              </button>
              <button
                className='btn btn-light'
                onClick={() => {
                  dispatch(sortProducts('desc'));
                }}
              >
                <i className='bi bi-sort-alpha-down-alt'></i>
              </button>
            </div>
            <div className='products-list mb-5'>
              {products.map((product, key) => (
                <Product key={key} product={product} />
              ))}
            </div>
          </div>
        )}

        <AlertList />
        {/* <Alert type='success' message='Produkt został dodany do koszyka.' />
        <Alert type='info' message='Produkt został dodany do koszyka.' />
        <Alert type='warning' message='Produkt został dodany do koszyka.' />
        <Alert type='error' message='Produkt został dodany do koszyka.' />
        <Alert type='defult' message='Produkt został dodany do koszyka.' /> */}
      </div>
    </div>
  );
}
