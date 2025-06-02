// Componente CategorySheet: muestra subcategorías de la categoría principal seleccionada en el Navbar
import React from 'react'
import { peripheralsLevelTwo } from '../../../data/category/level two/peripheralsLevelTwo'
import { componentsLevelTwo } from '../../../data/category/level two/componentsLevelTwo'
import { storageLevelTwo } from '../../../data/category/level two/storageLevleTwo'
import { accessoriesLevelTwo } from '../../../data/category/level two/accessoriesLevelTwo'
import { peripheralsLevelThree } from '../../../data/category/level three/peripheralsLevelThree'
import { componentsLevelThree } from '../../../data/category/level three/componentsLevelThree'
import { storageLevelThree } from '../../../data/category/level three/storageLevelTree'
import { accessoriesLevelThree } from '../../../data/category/level three/accesoriesLevelThree'
import { Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'

// Diccionarios para acceder a los datos de nivel dos y tres según la categoría principal
const categoryTwo: { [key: string]: any[] } ={
    peripherals:peripheralsLevelTwo,
    components:componentsLevelTwo,
    storage:storageLevelTwo,
    accessories:accessoriesLevelTwo
}
const categoryThree: { [key: string]: any[] } = {
    peripherals:peripheralsLevelThree,
    components:componentsLevelThree,
    storage:storageLevelThree,
    accessories:accessoriesLevelThree
}

// Props: selectedCategory (string), toggleDrawer, setShowSheet (opcional)
const CategorySheet = ({ selectedCategory,toggleDrawer,setShowSheet }: any) => {
    // Hook de navegación para ir a la página de productos de la subcategoría
    const navigate=useNavigate();

    // Filtra las subcategorías de nivel tres que pertenecen a una categoría de nivel dos
    const childCategory = (category: any, parentCategoryId: any) => {
        return category.filter((child: any) => {
            return child.parentCategoryId === parentCategoryId
        })
    }

  return (
    // Contenedor principal del panel de subcategorías
    <Box sx={{zIndex:2}} className='bg-white shadow-lg overflow-y-auto'>
        <div className='flex text-sm flex-wrap'>
            {
                // Renderiza cada subcategoría de nivel dos y sus hijos de nivel tres
                categoryTwo[selectedCategory]?.map((item, index)=><div className={`p-8 lg:w-[20%] ${index%2===0?"bg-slate-50":"bg-white"}`} key={item.categoryId}>
                    <p className='text-primary-color mb-5 font-semibold'>{item.name}</p>
                    <ul className='space-y-3'>
                        {childCategory(categoryThree[selectedCategory], item.categoryId).map((item:any)=><div key={item.categoryId}>
                            <li onClick={()=>navigate(`/products/${item.categoryId}`)} className='hover:text-primary-color cursor-pointer'>
                                {item.name}
                            </li>
                        </div>)}
                    </ul>
                </div>)
            }
        </div>
    </Box>
  )
}

export default CategorySheet