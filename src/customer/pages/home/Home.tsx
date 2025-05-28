import React from 'react'
import PeripheralsCategory from './PeripheralsCategory/PeripheralsCategory'
import Deal from './Deal/Deal'
import ShopBycategory from './ShopByCategory/ShopBycategory'
import Vende from '../../../Assets/seller_banner_image.jpg'
import { Button } from '@mui/material'
import Storefront from '@mui/icons-material/Storefront'
import CategoryGrid from './CategoryGrid/CategoryGrid'

const Home = () => {
  return (
    <>
    <div className='space-y-5 lg:space-y-10 relative'>
       {/* Periféricos */}
        <PeripheralsCategory />
        {/* Sección principal de vender */}
        <section 
      className="relative w-full h-[300px] lg:h-[500px] text-white overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #35A12C 0%, #0891b2 50%, #0c4a6e 100%)'
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white/20 rounded-full"></div>
        <div className="absolute top-32 right-20 w-24 h-24 border-2 border-white/15 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border-2 border-white/25 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-20 h-20 border-2 border-white/20 rounded-full"></div>
      </div>
      {/* Floating Elements */}
      <div className="absolute top-16 right-16 animate-bounce delay-1000">
        <div className="w-8 h-8 bg-white/20 rounded-lg rotate-12"></div>
      </div>
      <div className="absolute bottom-24 left-16 animate-pulse">
        <div className="w-6 h-6 bg-white/15 rounded-full"></div>
      </div>
      {/* Main Content */}
      <div className="absolute top-1/2 left-4 lg:left-[8rem] transform -translate-y-1/2 max-w-2xl">
        <div className="space-y-4 lg:space-y-6">
          {/* Main Heading */}
          <h1 className="text-2xl lg:text-5xl font-bold leading-tight">
            Vende tus productos
          </h1>
          {/* Brand Integration */}
          <p className="text-lg lg:text-3xl font-medium opacity-95">
            Con{' '}
            <strong 
              className="text-2xl lg:text-6xl font-black ml-2 bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              TechStore
            </strong>
          </p>
          {/* Key Benefits - Compact */}
          <div className="hidden lg:flex items-center space-x-8 text-sm opacity-80 mt-4">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-emerald-300 rounded-full"></div>
              <span>Sin comisiones el primer mes</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-cyan-300 rounded-full"></div>
              <span>50K+ compradores activos</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
              <span>Soporte 24/7</span>
            </div>
          </div>
          {/* CTA Button */}
          <div className="pt-4 lg:pt-8">
            <button className="group bg-white text-green-700 px-6 lg:px-8 py-3 lg:py-4 rounded-xl font-bold text-base lg:text-lg hover:bg-gray-50 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1">
              <span style={{ color: '#35A12C' }}>Vende con nosotros</span>
            </button>
          </div>
        </div>
      </div>
      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent"></div>
    </section>
        {/* Categorías principales */}
        <CategoryGrid />
        {/* Ofertas */}
        <section className='pt-20'>
          <h1 className='text-lg lg-text-4xl font-bold text-primary-color pb-5 lg:pb-20 text-center'>
            Ofertas</h1>
          <Deal />
        </section>
       
        {/* Shop by category */}
        <section className='pt-20'>
          <h1 className='text-lg lg-text-4xl font-bold text-primary-color pb-5 lg:pb-20 text-center'>
            Categorías</h1>
          <ShopBycategory/>
        </section>
    </div>
    </>
  )
}

export default Home