import React from 'react'
import Pc1 from '../../../../Assets/pc4.jpg'
import mouse1 from '../../../../Assets/mouse.jpg'
import ram from '../../../../Assets/ram.jpg'
import teclado from '../../../../Assets/teclado.jpg'
import gpu from '../../../../Assets/gpu.jpg'
import audifonos from '../../../../Assets/audifonos.jpg'

// Componente CategoryGrid: muestra una grilla de imágenes representando distintas categorías de productos
const CategoryGrid = () => {
  // Renderiza la grilla de imágenes de categorías
  return (
    <div className='grid gap-4 grid-rows-12 grid-cols-12 lg:h-[600px] px-5 lg:px-20'>
        {/* Cada div contiene una imagen de categoría */}
        <div className='col-span-3 row-span-12 text-white'>
          <img className='w-full h-full object-cover object-top rounded' src={Pc1} alt="" />
        </div>
        <div className='col-span-2 row-span-6 text-white'>
          <img className='w-full h-full object-cover object-top rounded' src={mouse1} alt="" />
        </div>
         <div className='col-span-4 row-span-6 text-white'>
          <img className='w-full h-full object-cover object-top rounded' src={ram} alt="" />
        </div>
         <div className='col-span-3 row-span-12 text-white'>
          <img className='w-full h-full object-cover object-top rounded' src={teclado} alt="" />
        </div>
         <div className='col-span-4 row-span-6 text-white'>
          <img className='w-full h-full object-cover object-top rounded' src={gpu} alt="" />
        </div>
         <div className='col-span-2 row-span-6 text-white'>
          <img className='w-full h-full object-cover object-top rounded' src={audifonos} alt="" />
        </div>
    </div>
  )
}

export default CategoryGrid