import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { theme } from "../config/mui-config";

const Wrapper = ({ children }) => {
  return (
    <BrowserRouter>
      <CssBaseline />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </BrowserRouter>
  );
};

export default Wrapper;
