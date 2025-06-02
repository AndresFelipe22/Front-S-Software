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

function App() {
  return (
    <>
      <ThemeProvider theme={customeTheme}>
        <div>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/become-seller" element={<BecomeSeller />} />
            <Route path="/products/:category" element={<Product />} />
            <Route path="/account/*" element={<Account />} />
            {/* Puedes agregar más rutas aquí si lo necesitas */}
          </Routes>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
