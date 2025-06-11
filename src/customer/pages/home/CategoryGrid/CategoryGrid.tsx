import React from 'react'

// Definición de la interfaz para las props del componente CategoryGrid
interface CategoryGridProps {
  categories?: Array<{ name: string; image: string; categoryId: string }>;// Array de categorías con nombre, imagen e ID
}

// Componente CategoryGrid: muestra una grilla de imágenes representando distintas categorías de productos
const CategoryGrid: React.FC<CategoryGridProps> = ({ categories }) => {
  // Si no hay categorías o la lista está vacía, no renderizar nada
  if (!categories || categories.length === 0) return null;
  // Renderiza la grilla de imágenes de categorías
  return (
    <div className='grid gap-4 grid-rows-12 grid-cols-12 lg:h-[600px] px-5 lg:px-20'>
      {/* Mapea cada categoría y crea un div con la imagen correspondiente */}
      {categories.map((cat, idx) => (
        <div key={cat.categoryId + idx} className='col-span-3 row-span-12 text-white'>
          <img className='w-full h-full object-cover object-top rounded' src={cat.image} alt={cat.name} />
        </div>
      ))}
    </div>
  )
}

export default CategoryGrid