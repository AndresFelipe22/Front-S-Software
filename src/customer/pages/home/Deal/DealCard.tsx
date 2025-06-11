import React from 'react';
import { Deal } from '../../../../types/DealTypes';
import { useNavigate } from 'react-router-dom';

interface DealCardProps {
  deal: Deal;
}

// Componente DealCard: muestra una tarjeta individual de producto en oferta
const DealCard: React.FC<DealCardProps> = ({ deal }) => {
  const navigate = useNavigate();
  return (
    // Contenedor principal de la tarjeta
    <div
      className='relative w-full max-w-xs sm:max-w-sm md:max-w-[14rem] cursor-pointer group overflow-hidden rounded-lg shadow-lg flex flex-col transition-all duration-300 hover:shadow-2xl bg-white'
      onClick={() => navigate(`/products/${deal.category.categoryId}`)}
    >
      {/* Etiqueta de la oferta */}
      <div className='absolute top-2 right-2 z-10 bg-sky-500 text-white text-xs sm:text-sm font-bold px-2 sm:px-3 py-1 rounded-full shadow-md'>
        {deal.discount}% OFF
      </div>

      {/* Imagen del producto */}
      <div className='overflow-hidden flex-1 flex items-center justify-center min-h-[8rem] sm:min-h-[10rem] md:min-h-[12rem]'>
        <img
          className='w-full h-32 sm:h-40 md:h-48 object-cover object-top transition-transform duration-300 group-hover:scale-105'
          src={deal.category.image}
          alt={deal.category.name || 'Oferta'}
        />
      </div>
      
      {/* Contenido de la tarjeta */}
      <div className='p-3 sm:p-4 bg-white text-center flex flex-col justify-between'>
        <p className='text-base sm:text-lg font-semibold text-slate-800 truncate'>
          {deal.category.name || 'Producto en oferta'}
        </p>
        
        {/* Botón de compra */}
        <button className='mt-3 w-full bg-[#35A12C] text-white font-bold py-2 px-4 rounded-md hover:bg-[#2d8a24] transition-colors duration-300 text-sm sm:text-base'>
          Comprar ahora
        </button>

        {/* Elemento de acento opcional */}
        <div className='mt-4 h-1 w-1/4 mx-auto bg-cyan-500 group-hover:bg-cyan-700 transition-colors duration-300 rounded-full'></div>
      </div>
    </div>
  );
}

export default DealCard;