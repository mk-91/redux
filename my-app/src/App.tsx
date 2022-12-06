import React from 'react';
import './App.css';
import { Shop } from './features/cart/Shop';
import './../node_modules/bootstrap/dist/css/bootstrap.css';
import './../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import { Navbar } from './Navbar';

function App() {
  return (
    <>
      <div className='App'>
        <Navbar />
        <Shop />
      </div>
    </>
  );
}

export default App;
