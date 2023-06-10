import { ThemeProvider } from "@emotion/react";
import { BrowserRouter } from "react-router-dom";
import { theme } from "../config/mui-config";

const Wrapper = ({ children }) => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </BrowserRouter>
  );
};

export default Wrapper;
