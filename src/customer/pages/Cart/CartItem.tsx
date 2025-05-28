import React from 'react'
import Img1 from '../../../Assets/img-1.png'; 
import { Button, Divider, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Remove from '@mui/icons-material/Remove';
import Close from '@mui/icons-material/Close';

const CartItem = () => {

    const handleUpdateQuantity = () => {
        //Actualiza la cantidad del CartItem
    }
  return (
    <div className='border rounded-md relative p-5'>

      <div className='flex gap-5 items-start'>

            <img className='w-[100px] rounded-md object-cover' 
            src={Img1} alt='' />

        <div className='space-y-2'>
            <h1 className="font-semibold text-lg">AMD Ryzen 5600G</h1>
            <p className='text-gray-600 font-medium text-sm'>Procesador AMD para videojuegos</p>
            <p className='text-gray-400 text-xs'><strong>Vendido para:</strong> Amantes de los videojuegos y la tecnología.</p>
            <p className='text-sm'>7 días de garantía</p>
            <p className='text-sm text-gray-500'><strong>Cantidad:</strong> 5</p>
        </div>

        <Divider/>

        <div></div>

        
        
      </div>

      <Divider/>
      <div className='flex justify-between items-center '>
            <div className='px-5 py-2 felx justify-between items-center'>

                    <div className='flex items-center gap-2 w-[140px] 
                    justify-center'>
                        <Button onClick={handleUpdateQuantity} disabled={true} >
                            <Remove/>
                        </Button>
                        <span>{5}</span>
                        <Button onClick={handleUpdateQuantity}>
                            <AddIcon/>
                        </Button>
                    </div>

                </div>
                <div className='pr-5'>
                    <p className='text-gray-700 font-medium'>
                        $ 200.000
                    </p>
                </div>
                <div className='absolute top-1 right-1'>
                    <IconButton color='primary'>
                        <Close/>
                    </IconButton>

                </div>
        </div>
      
    </div>
  )
}

export default CartItem
