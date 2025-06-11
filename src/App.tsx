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
import { useAppDispatch, useAppSelector } from './State/Store';
import { fetchSellerProfile } from './State/seller/sellerSlice';
import Auth from './customer/pages/Auth/Auth';

import ProductDetails from './customer/pages/PageDetails/ProductDetails';
import Review from './customer/pages/Review/Review';
import Wishlist from './customer/Wishlist/Wishlist';




function App() {
  const dispatch = useAppDispatch();
  const { seller } = useAppSelector(store => store);
  const auth = {};
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchSellerProfile(localStorage.getItem("jwt") || ""));
  }, [dispatch]);

  useEffect(() => {
    if (seller.profile) {
      navigate("/seller");
    }
  }, [seller.profile, navigate]);

  useEffect(() => {
    // dispatch(fetchProducts());
  }, [dispatch])


 console.log("User profile", auth)
  return (
    <>
      <ThemeProvider theme={customeTheme}>
        <div>


          {/* <h1 className='py-10 text 5xl'> name :  {auth.user?.email}</h1> */}
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Auth/>} />
            <Route path="/products/:category" element={<Product />} />
            {/*<Route path="/reviews/:productId" element={<Review/>} /> */}
            <Route path="/product-details/:categoryId/:name/:productId" element={<Product />} />
            {/*<Route path='/cart' element={<Cart/>} />*/}
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/become-seller" element={<BecomeSeller />} />
            <Route path="/account/*" element={<Account />} />
            <Route path="/seller/*" element={<SellerDashboard />} />
            <Route path="/admin/*" element={<AdminDashBoard />} />
          </Routes>


          {/* <Navbar/>*/}
          {/* <Home/> */}
          {/* <Product/> */}
          {/** Aporte mio en el App.tsx, agregar */}
          {/*<ProductDetails/>*/}
          {/** Aporte mio en el App.tsx, Se comento el ProductDetails, Info relevante */}
          {/**<Review/>*/}

          
          
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
