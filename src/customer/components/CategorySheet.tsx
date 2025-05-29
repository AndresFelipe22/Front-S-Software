import React from 'react'
import { peripheralsLevelTwo } from '../../data/category/level two/peripheralsLevelTwo'
import { componentsLevelTwo } from '../../data/category/level two/componentsLevelTwo'
import { storageLevelTwo } from '../../data/category/level two/storageLevleTwo'
import { accessoriesLevelTwo } from '../../data/category/level two/accessoriesLevelTwo'
import { peripheralsLevelThree } from '../../data/category/level three/peripheralsLevelThree'
import { componentsLevelThree } from '../../data/category/level three/componentsLevelThree'
import { storageLevelThree } from '../../data/category/level three/storageLevelTree'
import { accessoriesLevelThree } from '../../data/category/level three/accesoriesLevelThree'
import { Box } from '@mui/material'
import zIndex from '@mui/material/styles/zIndex'

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


const CategorySheet = ({ selectedCategory,toggleDrawer,setShowSheet }: any) => {

    const childCategory = (category: any, parentCategoryId: any) => {
        return category.filter((child: any) => {
            // console.log("Category", parentCategoryId, child)
            return child.parentCategoryId == parentCategoryId
        })

    }


  return (
    <Box sx={{zIndex:2}} className='bg-white shadow-lg overflow-y-auto'>
        <div className='flex text-sm flex-wrap'>
            {
                categoryTwo[selectedCategory]?.map((item, index)=><div className={`p-8 lg:w-[20%] ${index%2===0?"bg-slate-50":"bg-white"}`}>
                    <p className='text-primary-color mb-5 font-semibold'>{item.name}</p>
                    <ul className='space-y-3'>

                        {childCategory(categoryThree[selectedCategory], item.categoryId).map((item:any)=><div>
                            <li className='hover:text-primary-color cursor-pointer'>
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