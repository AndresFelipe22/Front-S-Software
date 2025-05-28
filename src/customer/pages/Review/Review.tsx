import Img1 from '../../../Assets/img-1.png'; 
import React from 'react'
import ReviewCard from './ReviewCard';
import { Divider } from '@mui/material';

const Review = () => {
  return (
    <div className='p-5 lg:px-20 flex lg:flex flex-row gap-20'>

        <section className='w-full md:w-1/2 lg:w-[30%] space-y-2'>

        <img src={Img1} alt=''/>

        <div>
          <div>

            <p className='font-bold text-xl'>AMD Ryzen 5700G</p>
            <p className='text-lg text-gray-600'>Procesador AMD Ryzen de gran calidad</p>
              <div className='price flex items-center gap-3 mt-5 text-2xl'>
                <span className='font-sans text-gray-800'>
                    $ 200.000
                </span>
                <span className='text-gray-400 line-through'>
                    $ 250.000
                </span>
                <span className='text-primary-color font-semibold'>
                    20% off
                </span>

              </div>
          </div>
        </div>

        </section>

        <section className='space-y-5 w-full'>
          {[1,1,1,1,1,1].map((item)=><div className='space-y-3'> <ReviewCard/>
          <Divider/> </div>)}
        </section>
    </div>
  )
}

export default Review
