import React from 'react';
import './App.css';
import Navbar from './customer/components/Navbar';
import { ThemeProvider } from '@emotion/react';
import customeTheme from './Theme/customeTheme';
import Home from './customer/pages/home/Home';

function App() {
  return (
    <>
      <ThemeProvider theme={customeTheme}>
        <Navbar/>
        <Home/>
      </ThemeProvider>
    </>
  );
}

export default App;
