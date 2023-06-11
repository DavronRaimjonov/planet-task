import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    h1: {
      fontFamily: "Nunito, sans-serif;",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "50px",
      color: "#1A1A1A",
      "@media (max-width:833px)": {
        fontSize: "40px",
      },
      "@media (max-width:345px)": {
        fontSize: "30px",
      },
    },
    h2: {
      fontFamily: "Nunito, sans-serif;",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: " 30px",
      color: "#1A1A1A",
      "@media (max-width:943px)": {
        fontSize: "25px",
      },
      "@media (max-width:735px)": {
        fontSize: "20px",
      },
    },
    body1: {
      fontFamily: "DM Sans",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "14px",
      color: "#4A4A4A",
    },
  },
});
