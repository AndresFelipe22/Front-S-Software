import React from 'react';
import MouseImg from '../../../../Assets/mouse.png'; // Asegúrate de que la ruta sea correcta

// Paso 1: Importa tu archivo CSS
import './ShopByCategory.css';

const ShopByCategoryCard = () => {
  return (
    // Mantenemos Tailwind para el layout (flex, gap, etc.) y la funcionalidad 'group'
    <div className='flex flex-col items-center gap-4 group cursor-pointer'>
      
      {/* Usamos nuestra clase CSS para el estilo del círculo.
        Mantenemos Tailwind para los tamaños responsivos y el padding.
      */}
      <div 
        className='category-card-circle w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] rounded-full p-2 lg:p-3'
      >
        {/* Usamos nuestra clase CSS para el estilo de la imagen */}
        <img 
          className='category-card-image'
          src={MouseImg} 
          alt="Categoría Periféricos" 
        />
      </div>
      
      {/* Usamos nuestra clase CSS para el color y la transición del título.
        Mantenemos Tailwind para la tipografía (tamaño y peso).
      */}
      <h3 className='category-card-title text-xl font-semibold'>
        Periféricos
      </h3>

    </div>
  );
}

export default ShopByCategoryCard;