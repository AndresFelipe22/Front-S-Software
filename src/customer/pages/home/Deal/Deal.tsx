import React from 'react'
import DealCard from './DealCard'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Slider } from '@mui/material';

// Componente Deal: muestra una sección de ofertas destacadas con tarjetas de productos en promoción
const Deal = () => {
  // Configuración del slider (mock, no implementado en este fragmento)
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  // Renderiza la sección de ofertas con varias DealCard
  return (
    <div className='lg:px-20 py-5'>
      <div className='flex items-center justify-between'>
          {[1,1,1,1,1,1].map((item)=><DealCard/>)}
      </div>
    </div>
  )
}

export default Deal