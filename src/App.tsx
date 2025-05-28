import React from 'react';
import './App.css';
import Navbar from './customer/components/Navbar';
import { ThemeProvider } from '@emotion/react';
import customeTheme from './Theme/customeTheme';
import Home from './customer/pages/home/Home';
import ProductDetails from './customer/pages/PageDetails/ProductDetails';
import Review from './customer/pages/Review/Review';
import { Routes, Route } from 'react-router-dom';
import Product from './customer/pages/Products/Product'; // Asumiendo que existe
import Cart from './customer/pages/Cart/Cart'; // Asumiendo que existe
import Checkout from './customer/pages/Checkout/Checkout'; // Asumiendo que existe
import Account from './customer/pages/Account/Account'; // Asumiendo que existe

function App() {
  return (
    <>
      <ThemeProvider theme={customeTheme}>
        <div>
          <Navbar />
          <ProductDetails />
          <Review />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:category" element={<Product />} />
            <Route path="/revews/:productId" element={<Product />} />
            <Route path="/product-details/:categoryId/:name/:productId" element={<Product />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/become-seller" element={<Checkout />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
