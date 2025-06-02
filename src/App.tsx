import React from 'react';
import './App.css';
import Navbar from './customer/components/Navbar';
import { ThemeProvider } from '@emotion/react';
import customeTheme from './Theme/customeTheme';
import Home from './customer/pages/home/Home';
import BecomeSeller from './customer/pages/Become Seller/BecomeSeller';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <ThemeProvider theme={customeTheme}>
        <div>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/become-seller" element={<BecomeSeller />} />
            {/* Puedes agregar más rutas aquí si lo necesitas */}
          </Routes>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
