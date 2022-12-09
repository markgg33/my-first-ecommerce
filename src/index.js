import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Login from './pages/Login';
import Register from './pages/Register';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Cart from './pages/Cart';
import Home from './pages/Home';  

//please delete if not working

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

