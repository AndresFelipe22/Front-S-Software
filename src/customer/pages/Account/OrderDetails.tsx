import React, { useEffect } from 'react'
import { Box, Button, Divider } from '@mui/material'
import PaymentsIcon from '@mui/icons-material/Payments';
import Img5 from '../../../Assets/img-5.png';
import { useNavigate, useParams } from 'react-router-dom';
import OrderStepper from './OrderStepper';
import { useAppDispatch, useAppSelector } from '../../../State/Store';
import { fetchOrderById, fetchOrderItemById } from '../../../State/customer/orderSlice';

const OrderDetails = () => {
    const navigate = useNavigate();
    const dispatch= useAppDispatch();
    const {orderId,orderItemId}=useParams();
    const {orders} = useAppSelector(store => store);

    useEffect(() => {
      dispatch(fetchOrderById({orderId: Number(orderId),jwt:localStorage.getItem
        ("jwt") || ""}));
        dispatch(fetchOrderItemById({orderItemId: Number(orderItemId),jwt:localStorage.getItem
        ("jwt") || ""}));

    },[])
    // Datos de orden simulados o indefinidos
    // El objeto order está indefinido, así que forzamos el tipo para evitar el error TS2339.
    const order: any = undefined;

  return (
    <Box className='space-y-5 '>

      <section className='flex flex-col gap-5 justify-center items-center'>
        <img className='w-[100px]' src={orders.orderItem?.product.images[0]} alt="" />
        <div className='text-sm space-y-1 text-center'>
          <h1 className='font-bold'>{orders.orderItem?.product.seller?.
          businessDetails.businessName}
          </h1>
          <p>{orders.orderItem?.product.title} </p>
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
            <p> {orders.currentOrder?.shippingAddress.name}</p>
            <Divider flexItem orientation='vertical' />
            <p>{orders.currentOrder?.shippingAddress.mobile}</p>
          </div>

          <p>
            {orders.currentOrder?.shippingAddress.address}, {" "}
            {orders.currentOrder?.shippingAddress.state}, {" "}
            {orders.currentOrder?.shippingAddress.city}, {" - "}
            {orders.currentOrder?.shippingAddress.pinCode}

            {/*34a Sur27 Av Ciudad de Cali */}
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

          <p className='font-medium'>$ {orders.orderItem?.sellingPrice}</p>
        </div>

        <div className='px-5 '>
          <div className='bg-teal-50 px-5 py-2 text-xs font-medium flex items-center gap-3 '>
            <PaymentsIcon />
            <p >Pago Contra Entrega</p>


          </div>
        </div>


        <Divider />
        <div className='px-5 pb-5'>
          <p className='text-xs'><strong>Vendido por : </strong>{orders.orderItem?.product
          .seller?.businessDetails.businessName}</p>
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
