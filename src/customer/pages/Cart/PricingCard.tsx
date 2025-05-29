import { Divider } from '@mui/material'
import React from 'react'

const PricingCard = () => {
  return (
    <>
      <div className='space-y-3 p-5'>
        <div className='flex justify-between items-center'>
          <span>Subtotal</span>
          <span>$ 200.000 </span>
        </div>
        <div className='flex justify-between items-center'>
          <span>Descuento</span>
          <span>$ 30.000 </span>
        </div>
        <div className='flex justify-between items-center'>
          <span>Envio</span>
          <span>$ 15.000 </span>
        </div>
        
        
        
      </div>
      <Divider/>

      <div className='flex justify-between items-center p-5 text-primary-color'>
          <span>Total</span>
          <span>$ 185.000 </span>
        </div>
    </>
  )
}

export default PricingCard
