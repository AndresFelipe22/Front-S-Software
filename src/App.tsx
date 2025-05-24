import React from 'react';
import './App.css';
import Navbar from './customer/components/Navbar';
import { ThemeProvider } from '@emotion/react';
import customeTheme from './Theme/customeTheme';

function App() {
  return (
    <>
      <ThemeProvider theme={customeTheme}>
        <Navbar/>
      </ThemeProvider>
    </>
  );
}

export default App;
