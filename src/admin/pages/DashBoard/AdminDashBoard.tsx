import React from 'react'
import AdminDrawerList from '../../component/AdminDrawerList'
import AdminRoutes from '../../../Routes/AdminRoutes';

const DashBoard = () => {
  const toggleDrawer = () => {
  
  };
  return (
    <div>
       <div className="min-h-screen">
            <section className="lg:flex lg:h-[90vh]">
              <div className="hidden lg:block h-full">
              <AdminDrawerList toggleDrawer={toggleDrawer} />
              </div>
              <div className="p-10 w-full lg:w-[80%]  overflow-y-auto">
                <AdminRoutes />
              </div>
            </section>
          </div>
    </div>
  )
}

export default DashBoard