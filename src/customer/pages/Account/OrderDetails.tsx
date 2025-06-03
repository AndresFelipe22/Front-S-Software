import React from 'react'
import { Box, Button, Divider } from '@mui/material'
import PaymentsIcon from '@mui/icons-material/Payments';
import Img5 from '../../../Assets/img-5.png';
import { useNavigate } from 'react-router-dom';
import OrderStepper from './OrderStepper';

const OrderDetails = () => {
    const navigate = useNavigate();
    // Datos de orden simulados o indefinidos
    // El objeto order está indefinido, así que forzamos el tipo para evitar el error TS2339.
    const order: any = undefined;

  return (
    <Box className='space-y-5 '>

      <section className='flex flex-col gap-5 justify-center items-center'>
        <img className='w-[100px]' src={Img5} alt="" />
        <div className='text-sm space-y-1 text-center'>
          <h1 className='font-bold'>{"GeForce GTX 1650 D6 GAMING X"}
          </h1>
          <p>Este componente electrónico procesa la información que llega al dispositivo y los transforma en imágenes o videos para mostrarla visualmente. </p>
        </div>
        <div>
          <Button onClick={() => navigate(`/reviews/${5}/create`)}>Reseña</Button>
        </div>
      </section>

      <section className='border p-5'>
        <OrderStepper orderStatus={order?.orderStatus ?? 'PENDING'} />

      </section>

      <div className='border p-5'>
        <h1 className='font-bold pb-3'>Delivery Address</h1>
        <div className='text-sm space-y-2'>
          <div className='flex gap-5 font-medium'>
            <p> {"Zosh"}</p>
            <Divider flexItem orientation='vertical' />
            <p>{9564565465}</p>
          </div>

          <p>
            34a Sur27 Av Ciudad de Cali 
          </p>
        </div>
      </div>

      <div className='border  space-y-4'>

        <div className='flex justify-between text-sm pt-5 px-5'>
          <div className='space-y-1'>
            <p className='font-bold'>Precio Total del Articulo</p>
            <p>Ahorraste <span className='text-green-500 font-medium text-xs'> $
              {500.000}.000</span> En este Articulo</p>
          </div>

          <p className='font-medium'>$ {600.000}.000</p>
        </div>

        <div className='px-5 '>
          <div className='bg-teal-50 px-5 py-2 text-xs font-medium flex items-center gap-3 '>
            <PaymentsIcon />
            <p >Pago Contra Entrega</p>


          </div>
        </div>


        <Divider />
        <div className='px-5 pb-5'>
          <p className='text-xs'><strong>Vendido por : </strong>{"GeForce GTX 1650 D6 GAMING X"}</p>
        </div>

        <div className='p-10'>
          <Button
          disabled={false}
            //onClick={handleCancelOrder}
            color='error' sx={{ py: "0.7rem" }} className='' variant='outlined' fullWidth>
            {true ?"order canceled":"Cancel Order"}
          </Button>
        </div>
      </div> 
    </Box>
  )
}

export default OrderDetails
