import React from 'react'
import mouseImg from '../../../../Assets/mouse.png'; // Update the path and filename as needed

const DealCard = () => {
  return (
    <div className='w-[13rem] cursor-pointer'>
        <img className='border-x-[7px] border-t-[7px] border-[#2ecc71] w-full h-[12rem] object-cover object-top '
         src={mouseImg} alt='mouse deal'></img>
        <div className='border-4 border-black bg-black text-white p-2 text-center'>
            <p className='text-lg font-semibold'>Mouse</p>
            <p className='text-2xl font-bold'>20% off</p>
            <p className='text-balance text-lg'>shop now</p>

        </div>
    </div>
  )
}

export default DealCard