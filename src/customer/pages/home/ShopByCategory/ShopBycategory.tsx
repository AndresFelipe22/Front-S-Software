import React from 'react'
import ShopByCategoryCard from './ShopByCategoryCard'
import { HomeCategory } from '../../../../types/HomeTypes';

interface ShopBycategoryProps {
  categories?: HomeCategory[];
}

// Componente ShopBycategory: muestra una grilla de tarjetas para comprar por categoría
const ShopBycategory: React.FC<ShopBycategoryProps> = ({ categories }) => {
  if (!categories || categories.length === 0) return null;
  // Renderiza una fila de tarjetas de categoría (mock de 7 elementos)
  return (
        <div className='flex flex-wrap justify-between py-5 lg:px-20 gap-7'>
            {categories.map((cat, idx) => <ShopByCategoryCard key={cat.categoryId || idx} category={cat} />)}
        </div>
  )
}

export default ShopBycategory