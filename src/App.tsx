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
        </div>
        
      </ThemeProvider>
    </>
  );
}

export default App;
