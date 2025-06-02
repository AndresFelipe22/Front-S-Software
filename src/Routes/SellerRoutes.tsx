import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../seller/pages/SellerDashboard/HomePage';
import Products from '../seller/pages/Products/Products';
import ProductForm from '../seller/pages/Products/AddProductForm';
import Orders from '../seller/pages/Orders/Orders';
import Payment from '../seller/pages/Payment/Payment';
import Invetory from '../seller/pages/Invetory/Invetory';
import UpdateProductForm from '../seller/pages/Products/UpdateProductForm';
import Transaction from '../seller/pages/Payment/Transaction'

const SellerRoutes = () => {
  return (
         <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/products' element={<Products />} />
        <Route path='/add-product' element={<ProductForm />} />
        <Route path='/update-product/:productId' element={<UpdateProductForm />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/invetory' element={<Invetory />} />
        <Route path='/account' element={<div /> /* Profile is empty, so render a placeholder */} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/transaction' element={<Transaction />} />
       </Routes>
  )
}

export default SellerRoutes