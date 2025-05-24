import {
  Avatar,
  Box,
  Button,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";


import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import AddShoppingCart from "@mui/icons-material/AddShoppingCart";
import Storefront from "@mui/icons-material/Storefront";

const Navbar = () => {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <Box >
      <div className="flex items-center justify-between px-5 lg:px-20 h-[70px] border-b">
        <div className="flex items-center gap-9 h-full">
          <div className="flex items-center gap-2">
            
            <IconButton>
              <MenuIcon/>
            </IconButton>
            <img
              src="/logo.svg"
              alt="Logo de la empresa"
              onClick={() => window.location.href = "/"}
              className="h-10 cursor-pointer select-none"
            />
          </div>
          <ul className="flex items-center font-medium text-gray-900">
            {["Perifericos",
            "Componentes",
            "Monitores",
            "Accesorios"].map((item)=><li className="mainCategory hover:text-primary-color
            hover:border-b-2 h-[70px] px-4 border-primary-color flex items-center">
                {item}
              </li>)}
          </ul>
        </div>
        <div className="flex gap-1 lg:gap-6 items-center">
          <IconButton>
            <SearchIcon/>
          </IconButton>
          <IconButton>
            <FavoriteBorder sx={{fontSize: 29}}/>
          </IconButton>
          <IconButton>
            <AddShoppingCart className="text-gray-950" sx={{fontSize: 29}}/>
          </IconButton>
          {
          false ? <Button className="flex items-center gap-2">
              <Avatar 
              sx={{ width: 29, height: 29 }}
              src="https://cdn.pixabay.com/photo/2015/04/15/09/28/head-723540_640.jpg"/>
              <h1 className="font-semibold hidden lg:block">Andres</h1>
            </Button> : <Button variant="contained">Login</Button>
          }
          {isLarge &&<Button startIcon={<Storefront/>} variant='outlined'>
            Vende 
          </Button>}
        </div>
      </div>
    </Box>
  );
};

export default Navbar;
