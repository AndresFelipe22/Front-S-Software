import React from 'react'

import { AccountBox, Add, Category, Dashboard, ElectricBolt, Home, IntegrationInstructions, LocalOffer, Logout } from '@mui/icons-material';
import DrawerList from '../../component/DrawerList';


const menu = [
    {
        name: "Dashboard",
        path: "/admin",
        icon: <Dashboard className="text-primary-color" />,
        activeIcon: <Dashboard className="text-white" />,
    },
    {
        name: "Cupones",
        path: "/admin/coupon",
        icon: <IntegrationInstructions className="text-primary-color" />,
        activeIcon: <IntegrationInstructions className="text-white" />,
    },
    {
        name: "Añadir Nuevo cupon",
        path: "/admin/add-coupon",
        icon: <Add className="text-primary-color" />,
        activeIcon: <Add className="text-white" />,
    },
    {
        name: "Pagina de inicio",
        path: "/admin/home-grid",
        icon: <Home className="text-primary-color" />,
        activeIcon: <Home className="text-white" />,
    },
    {
        name: "Componentes Categoría",
        path: "/admin/electronics-category",
        icon: <ElectricBolt className="text-primary-color" />,
        activeIcon: <ElectricBolt className="text-white" />,
    },
    {
        name: "Shop By Category",
        path: "/admin/shop-by-category",
        icon: <Category className="text-primary-color" />,
        activeIcon: <Category className="text-white" />,
    },
    {
        name: "Ofertas",
        path: "/admin/deals",
        icon: <LocalOffer className="text-primary-color" />,
        activeIcon: <LocalOffer className="text-white" />,
    },
   
];

const menu2 = [

    {
        name: "Cuenta",
        path: "/admin/account",
        icon: <AccountBox className="text-primary-color" />,
        activeIcon: <AccountBox className="text-white" />,
    },
    {
        name: "Salir",
        path: "/",
        icon: <Logout className="text-primary-color" />,
        activeIcon: <Logout className="text-white" />,
    },

]


const AdminDrawerList = ({toggleDrawer}:any) => {
  return (
    <div>
        <DrawerList menu={menu} menu2={menu2} toggleDrawer={toggleDrawer} />
    </div>
  )
}

export default AdminDrawerList