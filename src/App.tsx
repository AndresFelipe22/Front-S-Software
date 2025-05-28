import React from 'react';
import './App.css';
import Navbar from './customer/components/Navbar';
import { ThemeProvider } from '@emotion/react';
import customeTheme from './Theme/customeTheme';
import Home from './customer/pages/home/Home';
import ProductDetails from './customer/pages/PageDetails/ProductDetails';
import Review from './customer/pages/Review/Review';

function App() {
  return (
    <>
      <ThemeProvider theme={customeTheme}>
        <div>
          <Navbar/>
          {/* <Home/> */}
          {/* <Product/> */}
          {/** Aporte mio en el App.tsx, agregar */}
<<<<<<< HEAD
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
=======
          {/*<ProductDetails/>*/}
          {/** Aporte mio en el App.tsx, Se comento el ProductDetails, Info relevante */}
          <Review/>
          
>>>>>>> dd0c2fcca1f661944264eae61a0a06e696d28bcd
        </div>
        
      </ThemeProvider>
    </>

  );
}

export default App;
