import { ElectricBolt } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import { teal } from '@mui/material/colors'
import Img5 from '../../../Assets/img-5.png'; 
import React from 'react'

const OrderItem = () => {
  return (
    <div className='text-sm bg-white p-5 apce-y-4 border rounded-md cursor-pointer'>
      <div className='flex items-center gap-5'>
        <div>
          <Avatar sizes='small' sx={{bgcolor:teal[800]}}>
            <ElectricBolt/>
          </Avatar>
        </div>
        <div>
          <h1 className="font-bold text-primary-color">PENDIENTE</h1>
          <p>Llegando el Lunes, 15 Jul</p>
        </div>

      </div>
      <div className='mt-4 p-5 bg-teal-50 flex gap-3'>
        <div>
          <img className='w-[70px]' src={Img5} alt=''/>
        </div>
        <div className='w-full space-y-2'>
          <h1 className='font-bold'>GeForce GTX 1650 D6 GAMING X</h1>
          <p>Este componente electrónico procesa la información que llega al dispositivo y los transforma en imágenes o videos para mostrarla visualmente. 
            Es ideal para trabajar con aplicaciones gráficas ya que permite obtener imágenes más nítidas.</p>
        </div>

      </div>
      
    </div>
  )
}

export default OrderItem
