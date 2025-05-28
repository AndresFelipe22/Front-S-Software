import React from 'react';
import './App.css';
import Navbar from './customer/components/Navbar';
import { ThemeProvider } from '@emotion/react';
import customeTheme from './Theme/customeTheme';
import Home from './customer/pages/home/Home';
import ProductDetails from './customer/pages/PageDetails/ProductDetails';

function App() {
  return (
    <>
      <ThemeProvider theme={customeTheme}>
        <div>
          <Navbar/>
          <Home/>
          {/* <Product/> */}
          {/** Aporte mio en el App.tsx, agregar */}
          <ProductDetails/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:category" element={<Product/>} />
          <Route path="/revews/:productId" element={<Product/>} />
          <Route path="/product-details/:categoryId/:name/:productId" element={<Product/>} />
          <Route path='/Cart' element={<Cart/>} />
          <Route path='/checkout' element={<Checkout/>} />
          <Route path='/become-seller' element={<Checkout/>} />
          <Route path='/account' element={<Account/>} />
        
        </Routes>
        </div>
        
      </ThemeProvider>
    </>

  );
}

export default App;
