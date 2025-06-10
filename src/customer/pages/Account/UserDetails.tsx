import React from 'react'
import ProfileFieldCard from '../../../component/ProfileFieldCard'
import { Divider } from '@mui/material'
import { useAppSelector } from '../../../State/Store'

const UserDetails = () => {
    const {auth}=useAppSelector(store => store);
  return (
    <div className='flex justify-center py-10'>
        <div className='w-full lg:w-[70%]'>
            <div className='flex items-center pb-3 justify-between'>
                <h1 className='text-2xl font-bold text-gray-600'>
                    Detalles de perfil
                </h1>

            </div>
            <div className=''>
                {/**El "auth es un importacion del authslice y del store.ts" por lo tanto
                 * se descomentaran cuando el auth ya este importado y el archivo este completo
                 */}
                <ProfileFieldCard keys='Nombre' value={auth.user?.fullName || ""} />
                <Divider />
                <ProfileFieldCard keys='Email' value={auth.user?.email || ""} />
                <Divider />
                <ProfileFieldCard keys='Movil' value={auth.user?.mobile || "3205799109"} />

            </div>

        </div>
      
    </div>
  )
}

export default UserDetails
