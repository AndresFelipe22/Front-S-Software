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
          {/*<Home/> */}
          {/* <Product/> */}
          {/** Aporte mio en el App.tsx, agregar */}
          {/*<ProductDetails/>*/}
          {/** Aporte mio en el App.tsx, Se comento el ProductDetails, Info relevante */}
          <Review/>
          
        </div>
        
      </ThemeProvider>
    </>
  );
}

export default App;
