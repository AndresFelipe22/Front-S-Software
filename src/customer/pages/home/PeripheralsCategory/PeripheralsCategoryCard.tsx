import React from 'react'
import mouseImg from '../../../../Assets/mouse.png'

// Componente PeripheralsCategoryCard: muestra una tarjeta individual de periférico (ejemplo: Mouse)
const PeripheralsCategoryCard = () => {
  // Renderiza la imagen y el nombre del periférico
  return (
    <div>
        <img className='object-contain h-20' src={mouseImg} alt="Mouse" />
        <h2 className='font-semibold text-sm'>Mouse</h2>
    </div>
  )
}

export default PeripheralsCategoryCard