import React from 'react'
import ShopByCategoryCard from './ShopByCategoryCard'

const ShopBycategory = () => {
  return (

        <div className='flex flex-wrap justify-between py-5 lg:px-20 gap-7'>
            {[1,1,1,1,1,1].map((item)=><ShopByCategoryCard/>)}
        </div>
   
  )
}

export default ShopBycategory