import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    h1: {
      fontFamily: "Nunito, sans-serif;",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "50px",
      color: "#1A1A1A",
      // "@media (max-width:600px)": {
      //   fontSize: "20px",
      // },
    },
    h2: {
      fontFamily: "Nunito, sans-serif;",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: " 36px",
      color: "#1A1A1A",
    },
    
  },
});
