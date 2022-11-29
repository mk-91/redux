import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleCart } from './features/cart/cartSlice';

export function Navbar() {
  const dispatch = useDispatch();

  return (
    <nav className='navbar navbar-dark bg-primary'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='./'>
          Navbar
        </a>
        <form className='d-flex' role='search'>
          <input
            className='form-control me-2'
            type='search'
            placeholder='Search'
            aria-label='Search'
          />
          <button className='btn btn-success' type='submit'>
            Search
          </button>
        </form>
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
