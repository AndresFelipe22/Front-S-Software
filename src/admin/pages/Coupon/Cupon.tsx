import React, { useEffect } from 'react'
import CouponTable from './CouponTable'
import { useAppDispatch } from '../../../State/Store'
import { fetchAllCoupons } from '../../../State/admin/AdminCouponSlice'

const Coupon = () => {
    const dispatch = useAppDispatch()
    
    useEffect(() => {
        dispatch(fetchAllCoupons())
    }, [dispatch]) // Agregamos dispatch como dependencia para evitar warnings
    
    return (
        <div>
            <CouponTable />
        </div>
    )
}

export default Coupon