import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import Img1 from '../../../Assets/img-1.png'; 
import { teal } from '@mui/material/colors';
import Divider from '@mui/material/Divider';
import Shield from '@mui/icons-material/Shield';
import WorkspacePremium from '@mui/icons-material/WorkspacePremium';
import LocalShipping from '@mui/icons-material/LocalShipping';
import Wallet from '@mui/icons-material/Wallet';
import Button from '@mui/material/Button';
import Remove from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import AddShoppingCart from '@mui/icons-material/AddShoppingCart';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import SimilarProduct from './SimilarProduct';
import ReviewCard from '../Review/ReviewCard';






const ProductDetails = () => {
    const [quantity, setQuantity] = React.useState(1);
  return (
    <div className='px-5 lg:px-20 pt-10'> 

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
        <section className='flex flex-col lg:flex-row gap-5'>
            <div className='w-full lg:w-[15%] flex flex-wrap lg:flex-col gap-3'>
            {[1,1,1,1].map((item)=><img className='lg:w-full w-[50px] cursor-pointer rounded-md' 
            src={Img1} alt=''/>)}
            </div>
            <div className='w-full lg:w-[85%]'>
                <img className='w-full rounded-md' src={Img1} alt="" />
            </div>
        </section>

        <section>
         <h1 className='font-bold text-lg text-primary-color'> AMD Ryzen 5700G</h1>
         <p className='text-gray-500 font-semibold'>Procesador AMD para videojuegos</p>
         <div className='flex justify-between items-center py-2 border w-[180px] px-3 mt-5'>
            <div className='flex gap-1 items-center'>
                <span>4</span>
                <StarIcon sx={{color:teal[500],fontSize:"17px"}}/>

            </div>
            <Divider orientation='vertical' flexItem/>
            <span>
                234 ratings
            </span>
         </div>
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
         <p className='text-sm '>Incluye todos los impuestos. Envío gratuito a partir de $ 500.000</p>

         <div className='mt-7 space-y-3 '>
            <div className='flex items-center gap-4'>
                <Shield sx={{color:teal[500]}}/>
                <p>Autenticidad y garantía de calidad.
                </p>
            </div>

            <div className='flex items-center gap-4'>
                <WorkspacePremium sx={{color:teal[500]}}/>
                <p>Garantía de devolución del 100% del dinero
                </p>

            </div>

            <div className='flex items-center gap-4'>
                <LocalShipping sx={{color:teal[500]}}/>
                <p>Devolucion gratuita en 30 días
                </p>

            </div>

            <div className='flex items-center gap-4'>
                <Wallet sx={{color:teal[500]}}/>
                <p>El pago contra entrega podría estar disponible
                </p>

            </div>

         </div>

         <div className='mt-7 space-y-2'>
            <h1>
                QUANTITY:
            </h1>
            <div className='flex items-center gap-2 w-[140px] justify-between'>
                <Button disabled={quantity==1} onClick={() => setQuantity(quantity - 1)}>
                    <Remove/>
                </Button>
                <span>{quantity}</span>
                <Button onClick={() => setQuantity(quantity + 1)}>
                    <AddIcon/>
                </Button>
            </div>

         </div>

         <div className='mt-12 flex items-center gap-5'>
            <Button 
            fullWidth
            variant='contained'
            startIcon={<AddShoppingCart/>}
            sx={{py:"1rem"}}>
                Añadir al carrito
            </Button>

            <Button 
            fullWidth
            variant='outlined'
            startIcon={<FavoriteBorder/>}
            sx={{py:"1rem"}}>
                Lista de deseos
            </Button>

         </div>

         <div className='mt-5 flex items-center gap-3'>
            <p>Clave en el rendimiento de tu computadora de escritorio, ya no tenés que pensar en cómo distribuir el tiempo y acciones porque ahora las tareas en simultáneo son posibles.
            AMD cuenta con un catálogo de productos que se adaptan a los requerimientos de todo tipo de usuarios: juegos en línea, edición a gran escala, contenido en múltiples plataformas y más.</p>
         </div>

         <div className='mt-12 space-y-5'> 
             <ReviewCard/>
             <Divider/>   
         </div>

        </section>

      </div>

      <div className='mt-20'>
        <h1 className="text-lg font-bold">
            Productos similares
        </h1>
        <div className='pt-5'>
            <SimilarProduct/>
        </div>
        
      </div>
      
    </div>

    
  )
}

export default ProductDetails