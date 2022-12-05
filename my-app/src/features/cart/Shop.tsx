import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Alert } from '../notifications/Alert';
import { AlertList } from '../notifications/AlertList';
import {
  loadProducts,
  ProductModel,
  selectProducts,
  selectSearchResults,
} from '../product/productsSlice';
import { Cart } from './Cart';
import { Product } from './Product';
import './Shop.css';

// tworzę komponent Shop
export function Shop() {
  const dispatch = useAppDispatch(); //akcja
  const products: ProductModel[] = useAppSelector(selectSearchResults);

  useEffect(() => {
    dispatch(loadProducts());
  }, []);

  return (
    <div className='position-relative'>
      <Cart />
      <div className='container pt-3'>
        <div className='products-list mb-5'>
          {products.map((product, key) => (
            <Product
              key={key}
              name={product.name}
              id={product.id}
              price={product.price}
            />
          ))}
        </div>

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
