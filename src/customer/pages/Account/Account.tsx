import { Divider } from '@mui/material'
import React from 'react'
import { useNavigate, useLocation, Route, Routes } from 'react-router-dom'
import Orders from './Orders';
import OrderDetails from './OrderDetails';
import UserDetails from './UserDetails';
import Address from './Address';
import { logut } from '../../../State/AuthSlice';
import { useAppDispatch } from '../../../State/Store';


const menu = [
  { name: 'Orders', path: '/account/orders' },
  { name: 'Profile', path: '/account' },
  { name: 'Saved Cards', path: '/account/saved-cards' },
  { name: 'Addresses', path: '/account/addresses' },
  { name: 'Logout', path: '/' }
  
  
]

const Account = () => {
  const navigate = useNavigate();
  const location=useLocation();
  const dispatch = useAppDispatch();

  const handleClick = (item:any) => {
    if(item.path === '/') {
      dispatch(logut({}));
    }
    navigate(item.path);
    
  } 
  // const handleClick = (item:any) => { 
  return (
    <div className='px-5 lg:px-52 min-h-screen mt-10'>
      <div>
        <h1 className='text-xl font-bold pb-5'>Santiago Infante</h1>
      </div>
      <Divider/>
      <div className='grid grid-cols-1 lg:grid-cols-3 lg:min-h-[78vh]'>
        <section className='col-span-1 lg:border-r lg:pr-5 py-5 
        h-full '>
          {
            menu.map((item) => (
              <div onClick={()=>handleClick(item)} key={item.name} 
              className={`${item.path===location.pathname?"bg-primary-color text-white":""}
                py-3 cursor-pointer hover:text-white
               hover:bg-primary-color px-5 rounded-md border-b`}>
                <p>
                  {item.name}</p>
              </div>
            ))
          }
        </section>
        <section className='right lg:col-span-2 lg:pl-5 py-5'>
          <Routes>
            <Route path='/orders' element={<Orders />} />
            <Route path='/order/:orderId/:orderItemId' element={<OrderDetails />} />
            <Route path='/' element={<UserDetails />} />
            <Route path='/addresses' element={<Address />} />
          </Routes>
          
        </section>

      </div>
      
    </div>
  )
}

export default Account
