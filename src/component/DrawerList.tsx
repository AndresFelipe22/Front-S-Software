import { ListItemIcon } from '@mui/material'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { peripheralsLevelThree } from '../data/category/level three/peripheralsLevelThree';
import { componentsLevelThree } from '../data/category/level three/componentsLevelThree';
import { storageLevelThree } from '../data/category/level three/storageLevelTree';
import { accessoriesLevelThree } from '../data/category/level three/accesoriesLevelThree';


interface DrawerListProp {
  menu: any[];
  menu2: any[];
  toggleDrawer: () => void;
}

const levelThreeMap: { [key: string]: any[] } = {
  peripherals: peripheralsLevelThree,
  components: componentsLevelThree,
  storage: storageLevelThree,
  accessories: accessoriesLevelThree,
};

const DrawerList = ({ menu, menu2, toggleDrawer }: DrawerListProp) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedMain, setSelectedMain] = React.useState<string | null>(null);

  // Helper: get level two categories for a main category
  const getLevelTwo = (mainCat: any) => mainCat.levelTwoCategory || [];

  // Helper: get level three children for a level two category
  const getLevelThree = (mainCatId: string, levelTwoId: string) => {
    const arr = levelThreeMap[mainCatId] || [];
    return arr.filter((item: any) => item.parentCategoryId === levelTwoId);
  };

  return (
    <div className="h-full">
      <div className="flex flex-col justify-between h-full w-[300px] border-r py-5">
        <div className="space-y-2">
          {menu.map((item, index: number) => (
            <div key={index}>
              <div
                onClick={() => setSelectedMain(item.categoryId)}
                className="pr-9 cursor-pointer"
              >
                <p
                  className={`${item.categoryId === selectedMain ?
                    "bg-primary-color text-white" : "text-primary-color"} flex items-center px-5 py-3 rounded-r-full`}
                >
                  <ListItemIcon>
                    {item.categoryId === selectedMain ? item.activeIcon : item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.name} />
                </p>
              </div>
              {/* Subcategorías nivel dos y tres */}
              {selectedMain === item.categoryId && item.levelTwoCategory && (
                <div className="pl-8 pt-2">
                  {getLevelTwo(item).map((level2: any) => (
                    <div key={level2.categoryId}>
                      <div className="font-semibold text-primary-color text-sm mb-1">{level2.name}</div>
                      <ul className="mb-2">
                        {getLevelThree(item.categoryId, level2.categoryId).map((level3: any) => (
                          <li
                            key={level3.categoryId}
                            className="text-xs text-gray-700 hover:text-primary-color cursor-pointer py-1 pl-2"
                            onClick={() => {
                              navigate(`/products/${level3.categoryId}`);
                              toggleDrawer();
                            }}
                          >
                            {level3.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <Divider />
        <div className="space-y-2">
          {menu2.map((item, index: number) => (
            <div
              onClick={() => navigate(item.path)}
              className="pr-9 cursor-pointer"
              key={index}
            >
              <p
                className={`${item.path === location.pathname
                  ? "bg-primary-color text-white"
                  : "text-primary-color"} flex items-center px-5 py-3 rounded-r-full`}
              >
                <ListItemIcon>
                  {item.path === location.pathname ? item.activeIcon : item.icon}
                </ListItemIcon>
                <ListItemText primary={item.name} />
              </p>
            </div>
          ))}
        </div>
      </div>  
    </div>
  )
}
  

export default DrawerList