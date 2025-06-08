// Componente ProductCart: tarjeta individual de producto con carrusel de imágenes y acciones rápidas
import React, { useEffect, useState } from 'react'

import img1 from '../../../Assets/pc4.jpg'
import img2 from '../../../Assets/mouse.jpg'
import "./ProductCard.css"
import img3 from '../../../Assets/audifonos.jpg'
import img4 from '../../../Assets/teclado.jpg'
import { Button } from '@mui/material'
import { Favorite, ModeComment } from '@mui/icons-material'
import { useAppDispatch } from '../../../State/Store'
import { addProductToWishlist } from '../../../State/customer/wishlistSlice'
import { Product } from '../../../types/ProductTypes'

// Imágenes mock para el carrusel
const images=[
  img1, img2, img3, img4
]

const ProductCart = ({item}: { item:Product}) => {
  // Estado para la imagen actual del carrusel
  const [currentImage, setCurrentImage] = useState(0);
  // Estado para saber si el mouse está sobre la tarjeta
  const [isHovered, setIsHovered] = useState(false);
  const dispatch=useAppDispatch();

  // Efecto: cambia la imagen automáticamente cuando el mouse está sobre la tarjeta
  useEffect(() => {
    let interval: any
    if (isHovered) {
      interval = setInterval(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
      }, 1000); // Cambia la imagen cada 1 segundo
    } else if (interval) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  },[ isHovered]);

  const handleWishlist = (event:any)=>{
    event.stopPropagation()
    item.id && dispatch(addProductToWishlist({productId: item.id} ))
  }
  
  return (
    <>
      {/* Tarjeta de producto con efecto hover */}
      <div className='group px-4 relative'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
        <div className='card'>
          {/* Carrusel de imágenes */}
          {images.map((item, index)=><img className='card-media object-top' 
          src={item} alt=""
          style={{transform:`translateX(${(index-currentImage)*100}%)`}}/>)}
          {/* Acciones rápidas al hacer hover */}
          {isHovered && <div className='indicator flex flex-col items-center space-y-2'>
              <div className='flex gap-4'>
                <Button onClick={handleWishlist} variant='contained' color='secondary'>
                  <Favorite sx={{ color: "#35A12C"  }}/>
                </Button>
                <Button variant='contained' color='secondary'>
                  <ModeComment sx={{ color: "#35A12C"  }}/>
                </Button>
              </div>
            </div>}
        </div>
        {/* Detalles del producto */}
        <div className='details pt-3 space-y-1 group-hover-effect rounded-md'>
          <div className='name'>
            <h1>Procesador</h1>
            <p>Ryzen 5</p>
          </div>
          <div className='price flex items-center gap-3'>
            <span className='font-sans text-gray-800'>
              $ {item.sellingPrice}
            </span>
            <span className='thin-line-through text-gray-400'>
              $ {item.mrpPrice}
            </span>
            <span className='text-primary-color font-semibold'>
              {item.discountPercent}%
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductCart