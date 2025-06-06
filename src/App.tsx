import React, { useEffect } from 'react';
import './App.css';
import Navbar from './customer/components/Navbar/Navbar';
import { ThemeProvider } from '@emotion/react';
import customeTheme from './Theme/customeTheme';
import Home from './customer/pages/home/Home';
import BecomeSeller from './customer/pages/Become Seller/BecomeSeller';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Account from './customer/pages/Account/Account';
import Product from './customer/pages/Products/Product';
import SellerDashboard from './seller/pages/SellerDashboard/SellerDashboard';
import Checkout from './customer/pages/Checkout/Checkout';
import AdminDashBoard from './admin/pages/DashBoard/AdminDashBoard';
import { fetchProducts } from './State/fetchProducts';
import { useAppDispatch, useAppSelector } from './State/Store';
import { fetchSellerProfile } from './State/seller/sellerSlice';

function App() {
const dispatch = useAppDispatch();
const { seller } = useAppSelector(store => store);
const navigate = useNavigate();

useEffect(() => {
  dispatch(fetchSellerProfile(localStorage.getItem("jwt") || ""));
}, []);

useEffect(() => {
  if (seller.profile) {
    navigate("/seller");
  }
}, [seller.profile]);


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
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/become-seller" element={<BecomeSeller />} />
            <Route path="/account/*" element={<Account />} />
            <Route path="/seller/*" element={<SellerDashboard />} />
            <Route path="/admin/*" element={<AdminDashBoard />} />
          </Routes>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
