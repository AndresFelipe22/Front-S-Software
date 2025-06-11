import React from 'react'
import DealCard from './DealCard'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Deal as DealType } from '../../../../types/DealTypes';

interface DealProps {
  deals?: DealType[];
}

// Componente Deal: muestra una sección de ofertas destacadas con tarjetas de productos en promoción
const Deal: React.FC<DealProps> = ({ deals }) => {
  // Siempre renderiza la sección, aunque no haya deals
  return (
    <div className='lg:px-20 py-5'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7'>
        {deals && deals.length > 0 ? (
          deals.map((deal, idx) => <DealCard key={deal.category?.categoryId || idx} deal={deal} />)
        ) : (
          <div className="col-span-full w-full text-center py-10 text-gray-400">
            No hay ofertas disponibles en este momento.
          </div>
        )}
      </div>
    </div>
  )
}

export default Deal