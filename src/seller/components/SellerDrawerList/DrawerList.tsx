import { ListItemIcon, ListItemText, Divider } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import * as React from "react";

interface MenuItem {
    name: string;
    path: string;
    icon: any;
    activeIcon: any;
}

interface DrawerListProps {
    menu: MenuItem[];
    menu2: MenuItem[];
    toggleDrawer?: () => void;
}

const DrawerList = ({ menu, menu2, toggleDrawer }: DrawerListProps) => {
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <div className='h-full'>
            <div className='flex flex-col justify-between h-full w-[300px] border-r py-5'>
                <div>
                    <div className="space-y-2">
                        {menu.map((item) => (
                            <div
                                onClick={() => {
                                    navigate(item.path);
                                    if (toggleDrawer) toggleDrawer();
                                }}
                                className='pr-9 cursor-pointer'
                                key={item.path}
                            >
                                <p className={`${item.path === location.pathname ? "bg-primary-color text-white" : "text-primary-color"} flex items-center px-5 py-3 rounded-r-full`}>
                                    <ListItemIcon>
                                        {item.path === location.pathname ? item.activeIcon : item.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={item.name} />
                                </p>
                            </div>
                        ))}
                    </div>
                    <Divider />
                    <div className="space-y-2">
                        {menu2.map((item) => (
                            <div
                                onClick={() => {
                                    navigate(item.path);
                                    if (toggleDrawer) toggleDrawer();
                                }}
                                className='pr-9 cursor-pointer'
                                key={item.path}
                            >
                                <p className={`${item.path === location.pathname ? "bg-primary-color text-white" : "text-primary-color"} flex items-center px-5 py-3 rounded-r-full`}>
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
        </div>
    );
}

export default DrawerList;
