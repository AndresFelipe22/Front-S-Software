import React from 'react'
import ProfileFieldCard from '../../../component/ProfileFieldCard'
import { Divider } from '@mui/material'

const UserDetails = () => {
  return (
    <div className='flex justify-center py-10'>
        <div className='w-full lg:w-[70%]'>
            <div className='flex items-center pb-3 justify-between'>
                <h1 className='text-2xl font-bold text-gray-600'>
                    Detalles de perfil
                </h1>

            </div>
            <div className=''>
                <ProfileFieldCard keys='Nombre' value={"Sebastian"} />
                <Divider />
                <ProfileFieldCard keys='Email' value={"sebasfcking05@gmail.com"} />
                <Divider />
                <ProfileFieldCard keys='Movil' value={"3205799109"} />

            </div>

        </div>
      
    </div>
  )
}

export default UserDetails
