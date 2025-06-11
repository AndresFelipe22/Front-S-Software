// Componente Navbar: barra de navegación principal de la tienda
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css"; 
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import AddShoppingCart from "@mui/icons-material/AddShoppingCart";
import Storefront from "@mui/icons-material/Storefront";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { useTheme, useMediaQuery, Drawer } from "@mui/material";
import CategorySheet from "./CategorySheet";
import { mainCategory } from "../../../data/category/mainCategory";
import { useAppSelector } from "../../../State/Store";
import DrawerList from "../../../component/DrawerList";

// Navbar: muestra logo, navegación de categorías, acciones de usuario y acceso rápido a carrito y favoritos
const Navbar = () => {
  // Hook para acceder al tema de MUI
  const theme = useTheme();
  // Hook para detectar si la pantalla es grande (breakpoint lg)
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));
  const { user, auth, cart } = useAppSelector((store) => store);
  // Estado para la categoría seleccionada en el menú de categorías
  const [selectedCategory, setSelectedCategory] = useState("peripherals");
  // Estado para mostrar/ocultar el panel de categorías
  const [showCategorySheet, setShowCategorySheet] = useState(false);
  // Hook de navegación de React Router
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };



  // const becomeSellerClick = () => {
  //   if (sellers.profile?.id) {
  //     navigate("/seller")
  //   } else navigate("/become-seller")
  // }


  return (
    // Contenedor principal sticky para mantener la barra fija arriba
    <Box sx={{ zIndex: 2 }}
      className="sticky top-0 left-0 right-0 bg-white blur-bg bg-opacity-80 ">
      <div className="flex items-center justify-between px-5 lg:px-20 h-[70px] border-b">
        {/* Sección izquierda: logo y navegación de categorías */}
        <div className="flex items-center gap-9 h-full">
          <div className="flex items-center gap-2">
            {/* Menú hamburguesa solo en móvil */}
            {!isLarge && (
              <IconButton onClick={() => toggleDrawer(true)()}>
                <MenuIcon className="text-gray-700" sx={{ fontSize: 29 }} />
              </IconButton>
            )}
            {/* Logo clickable */}
            <img
              src="/logo.svg"
              alt="Logo de la empresa"
              onClick={() => navigate("/")}
              className="h-10 cursor-pointer select-none"
            />
          </div>
          {/* Navegación de categorías principales */}
          <nav aria-label="Categorías principales">
            {isLarge && (
            <ul className="flex items-center font-medium text-gray-900">
              {mainCategory.map(
                (item) => (
                  <li
                    onMouseLeave={()=>{
                      setShowCategorySheet(false);
                    }}
                    onMouseEnter={()=>{
                      setShowCategorySheet(true);
                      setSelectedCategory(item.categoryId);
                    }}
                    className="mainCategory hover:text-primary-color hover:border-b-2 h-[70px] px-4 border-primary-color flex items-center"
                  >
                    {item.name}
                  </li>
              ))}
            </ul>
            )}
          </nav>
        </div>

        {/* Sección derecha: acciones de usuario y botones rápidos */}
        <div className="flex gap-1 lg:gap-6 items-center">
          {/* Buscar */}
          <IconButton aria-label="Buscar" onClick={()=>navigate("/search-products")}>
            <SearchIcon className="text-gray-700" sx={{ fontSize: 29 }} />
          </IconButton>
          {/* Favoritos */}
          <IconButton onClick={()=>navigate("/wishlist")} aria-label="Favoritos">
            <FavoriteBorder className="text-gray-700" sx={{ fontSize: 29 }} />
          </IconButton>
          {/* Carrito */}
          <IconButton onClick={() => navigate("/cart")} aria-label="Carrito">
            <AddShoppingCart className="text-gray-950" sx={{ fontSize: 29 }} />
          </IconButton>

          {/* Usuario autenticado: muestra avatar y nombre, si no, botón de login */}
          {user && user.user ? (
          <Button
            onClick={() => navigate("/account/orders")}
            className="flex items-center gap-2"
          >
            <Avatar
              sx={{ width: 29, height: 29 }}
              src="https://cdn.pixabay.com/photo/2015/04/15/09/28/head-723540_640.jpg"
            />
            <h1 className="font-semibold hidden lg:block">
              {user.user?.fullName?.split(" ")[0]}
            </h1>
          </Button>
        ) : (
          <Button
            variant="contained"
            startIcon={<AccountCircleIcon sx={{ fontSize: "12px" }} />}
            onClick={() => navigate("/login")}
          >
            Login
          </Button>
        )}

          {/* Botón para vendedores solo en pantallas grandes */}
          {isLarge && (
            <Button
              onClick={() => navigate("/become-seller")}
              startIcon={<Storefront />}
              variant="outlined"
            >
              Vende
            </Button>
          )}
        </div>
      </div>
      {/* Panel de subcategorías, visible al hacer hover sobre una categoría */}
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {/* Pasa los menús requeridos y la función para cerrar el Drawer */}
        <DrawerList menu={mainCategory} menu2={[]} toggleDrawer={() => setOpen(false)} />
      </Drawer>
      { showCategorySheet && <div 
      onMouseLeave={()=>setShowCategorySheet(false)}
      onMouseEnter={()=>setShowCategorySheet(true)}
      className="categorySheet absolute top-4[4.41rem] left-20 right-20 border ">
        <CategorySheet selectedCategory={selectedCategory} />
      </div>}
    </Box>
  );
};

export default Navbar;
