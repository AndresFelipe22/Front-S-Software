import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SellerTable from '../admin/pages/Seller/SellersTable'
import Coupon from '../admin/pages/Coupon/Coupon'
import AddNewCouponForm from '../admin/pages/Coupon/AddNewCouponForm'
import GridTable from '../admin/pages/HomePage/GridTable'
import EletronicTable from '../admin/pages/HomePage/EletronicTable'
import ShopByCategoryTable from '../admin/pages/HomePage/ShopByCategoryTable'
import Deal from '../admin/pages/HomePage/Deal'

const AdminRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<SellerTable />} />
            <Route path='/coupon' element={<Coupon />} /> 
            <Route path='/add-coupon' element={<AddNewCouponForm />} /> 
            <Route path='/home-grid' element={<GridTable />} />
            <Route path='/electronics-category' element={<EletronicTable />} /> 
            <Route path='/shop-by-category' element={<ShopByCategoryTable />} /> 
            <Route path='/deals' element={<Deal />} /> 

        </Routes>

    </div>
  )
}

export default AdminRoutes