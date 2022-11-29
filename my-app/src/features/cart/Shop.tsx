import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { ProductModel, selectProducts } from '../product/productsSlice';
import { Cart } from './Cart';
import { Product } from './Product';
import './Shop.css';

// tworzę komponent Shop
export function Shop() {
  const dispatch = useAppDispatch(); //akcja

  const products: ProductModel[] = useAppSelector(selectProducts);

  return (
    <div className='product'>
      <Cart />
      <div className='products-list'>
        {products.map((product, key) => (
          <Product
            key={key}
            name={product.name}
            id={product.id}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}
