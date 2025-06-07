// Componente ProductCart: tarjeta individual de producto con carrusel de imágenes y acciones rápidas
import React, { useEffect, useState } from 'react';
import './ProductCard.css';
import { Button } from '@mui/material';
import { Favorite, ModeComment } from '@mui/icons-material';
import { Product } from '../../../types/ProductTypes';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ item }: { item: Product }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let interval: any;
    if (isHovered) {
      interval = setInterval(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % item.images.length);
      }, 1000);
    } else if (interval) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isHovered, item.images.length]);

  return (
    <>
      {/* Tarjeta de producto con efecto hover */}
      <div
        onClick={() => navigate(`producto-details/${item.category?.categoryId}/${item.title}/${item.id}`)}
        className='group px-4 relative'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className='card'>
          {/* Carrusel de imágenes */}
          {item.images.map((img, index: number) => (
            <img
              key={index}
              className='card-media object-top'
              src={img}
              alt=""
              style={{ transform: `translateX(${(index - currentImage) * 100}%)` }}
            />
          ))}
          {/* Acciones rápidas al hacer hover */}
          {isHovered && (
            <div className='indicator flex flex-col items-center space-y-2'>
              <div className='flex gap-4'>
                <Button variant='contained' color='secondary'>
                  <Favorite sx={{ color: "#35A12C" }} />
                </Button>
                <Button variant='contained' color='secondary'>
                  <ModeComment sx={{ color: "#35A12C" }} />
                </Button>
              </div>
            </div>
          )}
        </div>
        {/* Detalles del producto */}
        <div className='details pt-3 space-y-1 group-hover-effect rounded-md'>
          <div className='name'>
            <h1>{item.seller?.businessDetails?.businessName}</h1>
            <p>{item.title}</p>
          </div>
          <div className='price flex items-center gap-3'>
            <span className='font-sans text-gray-800'>
              ${item.sellingPrice}
            </span>
            <span className='thin-line-through text-gray-400'>
              ${item.mrpPrice}
            </span>
            <span className='text-primary-color font-semibold'>
              {item.discountPercent}%
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;