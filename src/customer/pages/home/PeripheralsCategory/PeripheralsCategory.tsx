import React from 'react'
import PeripheralsCategoryCard from './PeripheralsCategoryCard'

const PeripheralsCategory = () => {
  return (
    <div className='flex flex-wrap justify-between py-5 lg:px-20 border-b'>
        {[1,1,1,1,1,1].map((item)=><PeripheralsCategoryCard/>)}
        
    </div>
  )
}

export default PeripheralsCategory