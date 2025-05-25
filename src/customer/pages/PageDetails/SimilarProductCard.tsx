import React from 'react'
import Img3 from '../../../Assets/img-3.jpg'; 

const SimilarProductCard = () => {
  return (
    <div className='group px-4 relative'>
      <div className='card'>

        <img className='card-media object-top' src={Img3} alt=''/>
      </div>
      <div className='details pt-3 space-y-1 group-hover-effect rounded-md'>
        <div className='name'>
            <h1>Intel Core I7 6700k</h1>
            <p>Procesador de sexta generacion</p>
        </div>
        <div className='price flex items-center gap-3 mt-5 text-1.5xl'>
            <span className='font-sans text-gray-800'>
                $ 200.000
            </span>
            <span className='text-gray-400 line-through'>
                $ 250.000
            </span>
            <span className='text-primary-color font-semibold'>
                20% off
            </span>

         </div>
      </div>
    </div>
  )
}

export default SimilarProductCard
