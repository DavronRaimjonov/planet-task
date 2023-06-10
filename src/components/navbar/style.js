import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { Stack } from "@mui/system";
export const NavbarWrapper = styled.nav`
  position: sticky;
  top: 0;
  background-color: #ffffff;
  padding: 20px 0;
`;

NavbarWrapper.Logo = styled(Link)`
  font-family: "Nunito";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  color: #1a1a1a;
`;

NavbarWrapper.Stack = styled(Stack)`
  width: 60%;
  justify-content: flex-end;
  gap: 0 38px;
`;

NavbarWrapper.Buttons = styled(Stack)`
  gap: 48px;
`;
NavbarWrapper.Links = styled(NavLink)`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #1a1a1a;
  color: ${(props) => (props.$active ? "#066F14" : "")};
  transition: 0.4s;
  &:hover {
    color: #066f14;
  }
`;
NavbarWrapper.Login = styled.button`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #1a1a1a;
  border: none;
  outline: none;
  background-color: transparent;
  width: 81px;
  height: 35px;
  transition: 0.5s;
  cursor: pointer;
  border-radius: 4px;
  &:hover {
    background-color: #066f14;
    color: #ffff;
  }
`;
