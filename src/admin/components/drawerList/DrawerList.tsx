import * as React from "react";
import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch } from '../../../State/Store';
import { logout } from '../../../State/AuthSlice';

export interface Menu {
    name: string;
    path: string;
    icon: React.ReactElement<any>;
    activeIcon: React.ReactElement<any>;
}

interface DrawerListProps {
    toggleDrawer?: any;
    menu: Menu[];
    menu2: Menu[];
}

const DrawerList = ({ toggleDrawer, menu, menu2 }: DrawerListProps) => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleLogout = () => {
        dispatch(logout({}));
        if (toggleDrawer) toggleDrawer();
    };

    return (
        <div className="h-full">
            <div className="flex flex-col justify-between h-full w-[300px] border-r py-5">
                <div>                    <div className="space-y-2">
                        {menu.map((item) => (
                            <div
                                onClick={() => {
                                    if (item.path === "/") {
                                        handleLogout();
                                    } else {
                                        navigate(item.path);
                                        if (toggleDrawer) toggleDrawer();
                                    }
                                }}
                                className="pr-9 cursor-pointer"
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
                <Divider />
                <div className="space-y-2">
                    {menu2.map((item) => (
                        <div
                            onClick={() => {
                                if (item.path === "/") {
                                    handleLogout();
                                } else {
                                    navigate(item.path);
                                    if (toggleDrawer) toggleDrawer();
                                }
                            }}
                            className="pr-9 cursor-pointer"
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
    );
};

export default DrawerList;