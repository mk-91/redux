import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleCart } from './features/cart/cartSlice';
import { ProductsSearch } from './features/product/ProductsSearch';

export function Navbar() {
  const dispatch = useDispatch();

  return (
    <nav className='navbar navbar-dark bg-primary'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='./'>
          Navbar
        </a>
        <ProductsSearch />
        <button
          className='btn btn-warning'
          onClick={() => dispatch(toggleCart())}
        >
          Cart
        </button>
      </div>
    </nav>
  );
}
