import * as React from "react";
import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch } from '../../../State/Store';
import { logut } from '../../../State/seller/AuthSlice';

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
        dispatch(logut({}));
        if (toggleDrawer) toggleDrawer();
    };

    const handleClick = (item: Menu) => (e?: React.MouseEvent | React.KeyboardEvent) => {
        if (item.path === "/logout") {
            handleLogout();
        } else if (item.path) {
            navigate(item.path);
            if (toggleDrawer) toggleDrawer();
        }
    };

    return (
        <div className="h-full">
            <div className="flex flex-col justify-between h-full w-[300px] border-r py-5">
                <div>
                    <div className="space-y-2">
                        {menu.map((item) => (
                            <div
                                key={item.name}
                                role="button"
                                tabIndex={0}
                                onClick={handleClick(item)}
                                onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') handleClick(item)(e); }}
                                className="pr-9 cursor-pointer"
                            >
                                <p className={`${item.path === location.pathname ? "bg-primary-color text-white " : "text-primary-color"} flex items-center px-5 py-3 rounded-r-full`}>
                                    <ListItemIcon>{location.pathname === item.path ? item.activeIcon : item.icon}</ListItemIcon>
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
                            key={item.name}
                            role="button"
                            tabIndex={0}
                            onClick={handleClick(item)}
                            onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') handleClick(item)(e); }}
                            className="pr-9 cursor-pointer"
                        >
                            <p className={`${item.path === location.pathname ? "bg-primary-color text-white " : "text-primary-color"} flex items-center px-5 py-3 rounded-r-full`}>
                                <ListItemIcon>{location.pathname === item.path ? item.activeIcon : item.icon}</ListItemIcon>
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