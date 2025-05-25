import React from 'react'
import PeripheralsCategory from './PeripheralsCategory/PeripheralsCategory'
import Deal from './Deal/Deal'
import ShopBycategory from './ShopByCategory/ShopBycategory'
import Vende from '../../../Assets/vende.png'
import { Button } from '@mui/material'
import Storefront from '@mui/icons-material/Storefront'

const Home = () => {
  return (
    <>
    <div className='space-y-5 lg:space-y-10 relative'>
        <PeripheralsCategory />
        <section className='pt-20'>
          <h1 className='text-lg lg-text-4xl font-bold text-primary-color pb-5 lg:pb-10 text-center'>
            Ofertas</h1>
          <Deal />
        </section>
        
        <section className='pt-20'>
          <h1 className='text-lg lg-text-4xl font-bold text-primary-color pb-5 lg:pb-10 text-center'>
            Categorías</h1>
          <ShopBycategory/>
        </section>
        <section className='lg:px-20 relative h-[200px] lg:h-[450px] object-cover'>
          <img className='w-full h-full' src={Vende} alt="Vende Con Nosotros" />
            <div className='absolute top-1/2 left-4 lg:left-[15rem] transform  -translate-y-1/2 font-semibold lg:text-4xl space-y-3 '>
              <h1 className=''>
                ell Your Product
              </h1>
              <p className='text-lg md:text-2xl'>With <strong className='logo text-3xl md:text-5xl pl-2'>zosh bazzar</strong></p>
              <div className='pt-6 flex justify-center'>
                  <Button startIcon={<Storefront/>}variant="contained">
                     Vende con nosotros
                  </Button>
                </div>
           </div>         
        </section>
    </div>
    </>
  )
}

export default Home