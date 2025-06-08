import React from 'react'
import { Button, Divider, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Remove from '@mui/icons-material/Remove';
import Close from '@mui/icons-material/Close';
import { CartItem } from '../../../types/cartTypes';
import { useAppDispatch } from '../../../State/Store';
import { updateCartItem } from '../../../State/customer/cartSlice';


const CartItemCard = ({item}:{item:CartItem}) => {

    const dispatch=useAppDispatch();

    const handleUpdateQuantity = (value:number)=>() => {
        //Actualiza la cantidad del CartItem
        dispatch(updateCartItem({
        jwt: localStorage.getItem("jwt"),
        cartItemId: item.id,
        cartItem: { quantity: item.quantity + value }
        }));
    }
  return (
    <div className='border rounded-md relative p-5'>

      <div className='flex gap-5 items-start'>

            <img className='w-[100px] rounded-md object-cover' 
            src={item.product.images[0]} alt='' />

        <div className='space-y-2'>
            {/**businessName y businessDetails no existen todavia, asegurarse de excribir bien */}
            <h1 className="font-semibold text-lg">{item.product.seller?.businessDetails.businessName}</h1>
            <p className='text-gray-600 font-medium text-sm'>{item.product.title}</p>

            <p className='text-gray-400 text-xs'><strong>Vendido para:</strong> Amantes de los videojuegos y la tecnología.</p>
            <p className='text-sm'>7 días de garantía</p>
            <p className='text-sm text-gray-500'><strong>Cantidad:</strong> {item.quantity}</p>
        </div>

        <Divider/>

        <div></div>

        
        
      </div>

      <Divider/>
      <div className='flex justify-between items-center '>
            <div className='px-5 py-2 felx justify-between items-center'>

                    <div className='flex items-center gap-2 w-[140px] 
                    justify-center'>
                        <Button onClick={handleUpdateQuantity(-1)} disabled={true} >
                            <Remove/>
                        </Button>
                        <span>{item.quantity}</span>
                        <Button onClick={handleUpdateQuantity(1)}>
                            <AddIcon/>
                        </Button>
                    </div>

                </div>
                <div className='pr-5'>
                    <p className='text-gray-700 font-medium'>
                        $ {item.sellingPrice}
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

export default CartItemCard
