import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import AddShoppingCart from "@mui/icons-material/AddShoppingCart";
import Storefront from "@mui/icons-material/Storefront";

import { useTheme, useMediaQuery } from "@mui/material";
import CategorySheet from "./CategorySheet";
import { mainCategory } from "../../data/category/mainCategory";

const Navbar = () => {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));
  const [selectedCategory, setSelectedCategory] = useState("peripherals");
  const [showCategorySheet, setShowCategorySheet] = useState(false);
  const navigate = useNavigate();

  return (
    <Box sx={{ zIndex: 2 }}
      className="sticky top-0 left-0 right-0 bg-white blur-bg bg-opacity-80 ">
      <div className="flex items-center justify-between px-5 lg:px-20 h-[70px] border-b">
        {/* Izquierda */}
        <div className="flex items-center gap-9 h-full">
          <div className="flex items-center gap-2">
            {!isLarge && (
              <IconButton aria-label="Abrir menú de navegación">
                <MenuIcon />
              </IconButton>
            )}
            <img
              src="/logo.svg"
              alt="Logo de la empresa"
              onClick={() => (window.location.href = "/")}
              className="h-10 cursor-pointer select-none"
            />
          </div>
          <nav aria-label="Categorías principales">
            <ul className="flex items-center font-medium text-gray-900">
              {mainCategory.map(
                (item) => 
                  <li onMouseLeave={()=>{
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
                
              )}
            </ul>
          </nav>
        </div>

        {/* Derecha */}
        <div className="flex gap-1 lg:gap-6 items-center">
          <IconButton aria-label="Buscar">
            <SearchIcon />
          </IconButton>
          <IconButton aria-label="Favoritos">
            <FavoriteBorder sx={{ fontSize: 29 }} />
          </IconButton>
          <IconButton aria-label="Carrito">
            <AddShoppingCart className="text-gray-950" sx={{ fontSize: 29 }} />
          </IconButton>

          {false ? (
            <Button className="flex items-center gap-2">
              <Avatar
                sx={{ width: 29, height: 29 }}
                src="https://cdn.pixabay.com/photo/2015/04/15/09/28/head-723540_640.jpg"
              />
              <h1 className="font-semibold hidden lg:block">Andres</h1>
            </Button>
          ) : (
            <Button variant="contained">Login</Button>
          )}

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
