import React from 'react'
import ShopByCategoryCard from './ShopByCategoryCard'

// Componente ShopBycategory: muestra una grilla de tarjetas para comprar por categoría
const ShopBycategory = () => {
  // Renderiza una fila de tarjetas de categoría (mock de 7 elementos)
  return (
        <div className='flex flex-wrap justify-between py-5 lg:px-20 gap-7'>
            {[1,1,1,1,1,1,1].map((item)=><ShopByCategoryCard/>)}
        </div>
  )
}

export default ShopBycategory