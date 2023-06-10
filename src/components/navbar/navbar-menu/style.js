import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavbarMenuWrapper = styled.nav`
  background-color: #066f14b2;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  backdrop-filter: blur(5px);
`;
NavbarMenuWrapper.Links = styled(Link)`
  color: #fff;
  display: flex;
  padding-top: 10px;
`;
NavbarMenuWrapper.Close = styled.nav`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;
