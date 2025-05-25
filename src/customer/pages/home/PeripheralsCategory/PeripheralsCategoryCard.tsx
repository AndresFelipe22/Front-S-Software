import React from 'react'
import mouseImg from '../../../../Assets/mouse.png'

const PeripheralsCategoryCard = () => {
  return (
    <div>
        <img className='object-contain h-20' src={mouseImg} alt="Mouse" />
        <h2 className='font-semibold text-sm'>Mouse</h2>
    </div>
  )
}

export default PeripheralsCategoryCard