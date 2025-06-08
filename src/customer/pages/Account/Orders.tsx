import React, { useEffect } from 'react'
import OrderItem from './OrderItemCard'
import { useAppDispatch, useAppSelector } from '../../../State/Store'
import { fetchUserOrderHistory } from '../../../State/customer/orderSlice';

const Orders = () => {
  const dispatch=useAppDispatch();
  const {orders}=useAppSelector(store=>store)

  useEffect(()=>{
    dispatch(fetchUserOrderHistory(localStorage.getItem("jwt") || ""));
  },[])
  return (
    <div className='text-sm min-h-screen'>
      <div className='pb-5'>
        <h1 className='font-semibold'> Todas las Ordenes</h1>
        <p> Desde Cualquier Momento</p>
      </div>
      <div className='space-y-2'>

        {orders.orders.map((orders) =>orders.orderItems.map(
          (item)=><OrderItem order={orders} item={item}/>) )}

      </div>
      
    </div>
  )
}

export default Orders
