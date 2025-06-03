import React from 'react';
import './App.css';
import Navbar from './customer/components/Navbar/Navbar';
import { ThemeProvider } from '@emotion/react';
import customeTheme from './Theme/customeTheme';
import Home from './customer/pages/home/Home';
import BecomeSeller from './customer/pages/Become Seller/BecomeSeller';
import { Routes, Route } from 'react-router-dom';
import Account from './customer/pages/Account/Account';
import Product from './customer/pages/Products/Product';
import SellerDashboard from './seller/pages/SellerDashboard/SellerDashboard';

function App() {
  return (
    <>
      <ThemeProvider theme={customeTheme}>
        <div>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/products/:Category" element={<Product />} />
            {/*<Route path="/reviews/:productId" element={<Review/>} /> */}
            <Route path="/product-details/:categoryId/:name/:productId" element={<Product />} />
            {/*<Route path='/cart' element={<Cart/>} />*/}
            <Route path='/become-seller' element={<BecomeSeller />} />
            <Route path='/account/*' element={<Account />} />
            <Route path='/seller/*' element={<SellerDashboard/>} />
            {/* Puedes agregar más rutas aquí si lo necesitas */}
          </Routes>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
