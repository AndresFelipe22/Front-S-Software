import { createTheme } from "@mui/material";

const customeTheme = createTheme({
  palette: {
    mode: "light", // This sets the theme to dark mode
    primary: {
      main: "#35A12C",

    },
    secondary: {
      main: "#EAF0F1", 
    },
   
   
  },
});

export default customeTheme;