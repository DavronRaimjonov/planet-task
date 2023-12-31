import React from "react";
import ReactDOM from "react-dom/client";
import Wrapper from "./hooks/wrapper";
import "./index.css";
import Root from "./root";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Wrapper>
      <Root />
    </Wrapper>
  </React.StrictMode>
);
