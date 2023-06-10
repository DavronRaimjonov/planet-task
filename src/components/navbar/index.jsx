import { Stack, useMediaQuery } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { navLink } from "../../data";
import { Button, Container } from "../../generic/style";
import { NavbarWrapper } from "./style";
import { LoginSvg, MenuSvg } from "../../assets";
import NavbarMenu from "./navbar-menu";
import { useState } from "react";
const Navbar = () => {
  const { pathname } = useLocation();
  const matches = useMediaQuery("(max-width:797px)");
  const [modal, setModal] = useState(false);
  const openMenu = () => setModal((prev) => !prev);
  return (
    <NavbarWrapper>
      {modal && <NavbarMenu openMenu={openMenu} />}
      <Container $flex>
        <NavbarWrapper.Logo to="/">Plant</NavbarWrapper.Logo>
        {!matches && (
          <>
            <NavbarWrapper.Stack direction="row">
              {navLink.map((item) => (
                <NavbarWrapper.Links
                  $active={pathname === item.path ? "active" : ""}
                  key={item.id}
                  to={item.path}
                >
                  {item.title}
                </NavbarWrapper.Links>
              ))}
            </NavbarWrapper.Stack>
            <NavbarWrapper.Buttons direction="row">
              <NavbarWrapper.Login>Login</NavbarWrapper.Login>
              <Button $sm>Sing Up</Button>
            </NavbarWrapper.Buttons>
          </>
        )}
        {matches && (
          <>
            <Stack direction={"row"} columnGap={"10px"}>
              <Link>
                <LoginSvg />
              </Link>
              <MenuSvg openMenu={openMenu} />
            </Stack>
          </>
        )}
      </Container>
    </NavbarWrapper>
  );
};

export default Navbar;
