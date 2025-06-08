import React, { useEffect } from 'react'
import WishlistProductCard from './WishlistProductCard'
import { useAppDispatch, useAppSelector } from '../../State/Store'
import { getWishlistByUserId } from '../../State/customer/wishlistSlice'

const Wishlist = () => {
  const dispatch=useAppDispatch()
  const {wishlist}=useAppSelector(store=>store)

  useEffect(()=>{
    dispatch(getWishlistByUserId())
  },[])
  return (
    <div className='h-[85vh] p-5 lg:20'>
      <section >
        <h1><strong>Lista de Deseos</strong> 5 Productos</h1>

        <div className='pt-10 flex felx-wrap gap-5'>

          {wishlist.wishlist?.products.map((item)=><WishlistProductCard item={item}/>)}

        </div>

      </section>
      
    </div>
  )
}

export default Wishlist
