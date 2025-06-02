import React from 'react';
import mouseImg from '../../../../Assets/mouse.png'; // Asegúrate de que la ruta a tu imagen sea correcta

// Componente DealCard: muestra una tarjeta individual de producto en oferta
const DealCard = () => {
  // Renderiza la tarjeta de oferta con imagen, descuento y botón de compra
  return (
    // Contenedor principal de la tarjeta
    <div className='relative w-full max-w-[14rem] cursor-pointer group overflow-hidden rounded-lg shadow-lg'>
      
      {/* Etiqueta de la oferta */}
      <div className='absolute top-2 right-2 z-10 bg-sky-500 text-white text-sm font-bold px-3 py-1 rounded-full shadow-md'>
        20% OFF
      </div>

      {/* Imagen del producto */}
      <div className='overflow-hidden'>
        <img 
          className='w-full h-[12rem] object-cover object-top transition-transform duration-300 group-hover:scale-110'
          src={mouseImg} 
          alt='Oferta de mouse'
        />
      </div>
      
      {/* Contenido de la tarjeta */}
      <div className='p-4 bg-white text-center'>
        <p className='text-lg font-semibold text-slate-800'>Mouse Gamer</p>
        
        {/* Botón de compra */}
        <button className='mt-3 w-full bg-[#35A12C] text-white font-bold py-2 px-4 rounded-md hover:bg-[#2d8a24] transition-colors duration-300'>
          Comprar ahora
        </button>

        {/* Elemento de acento opcional */}
        <div className='mt-4 h-1 w-1/4 mx-auto bg-cyan-500 group-hover:bg-cyan-700 transition-colors duration-300 rounded-full'></div>
      </div>
    </div>
  );
}

export default DealCard;