import React from 'react';
import './App.css';
import Navbar from './customer/components/Navbar';
import { ThemeProvider } from '@emotion/react';
import customeTheme from './Theme/customeTheme';
import Home from './customer/pages/home/Home';
import ProductDetails from './customer/pages/PageDetails/ProductDetails';
import Review from './customer/pages/Review/Review';
import Cart from './customer/pages/Cart/Cart';
import Checkout from './customer/pages/Checkout/Checkout';
import { Routes, Route } from 'react-router-dom';
import BecomeSeller from './customer/pages/Become Seller/BecomeSeller';
import Account from './customer/pages/Account/Account';

function App() {
  return (
    <>
      <ThemeProvider theme={customeTheme}>
        <div>
          <Navbar/>
          {/*<Home/> */}
          {/*<Product/> */}
          {/** Aporte mio en el App.tsx, agregar */}
          {/* <ProductDetails/> */}
          {/** Aporte mio en el App.tsx, Se comento el ProductDetails, Info relevante */}
          {/* <Review/>*/}
          {/*<Cart/>*/}
          {/*<Checkout/>*/}
          {/*<Account/>*/}
          <Routes>
            <Route path="/" element={<Home />} />
            {/*<Route path="/products/:category" element={<Product />} />*/}
            <Route path="/reviews/:productId" element={<Review />} />
            <Route path="/product-details/:categoryId/:name/:productId" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/account" element={<Account />} />
            {/* Puedes agregar más rutas aquí si lo necesitas */}
            
            {/*<Route path="/become-seller" element={<BecomeSeller />} />*/}
            {/* Puedes agregar más rutas aquí si lo necesitas */}
          </Routes>
          
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
