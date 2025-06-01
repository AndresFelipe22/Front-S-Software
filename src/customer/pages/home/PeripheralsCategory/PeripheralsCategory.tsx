import React from 'react'
import PeripheralsCategoryCard from './PeripheralsCategoryCard'

// Componente PeripheralsCategory: muestra una grilla de tarjetas de categorías de periféricos
// Utiliza PeripheralsCategoryCard para cada elemento
const PeripheralsCategory = () => {
  // Renderiza una fila de tarjetas de periféricos (mock de 6 elementos)
  return (
    <div className='flex flex-wrap justify-between py-5 lg:px-20 border-b'>
        {[1,1,1,1,1,1].map((item)=><PeripheralsCategoryCard/>)}
        
    </div>
  )
}

export default PeripheralsCategory