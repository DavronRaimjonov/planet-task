import { CloseSvg } from "../../../assets";
import { navLink } from "../../../data";
import { NavbarMenuWrapper } from "./style";
const NavbarMenu = ({ openMenu }) => {
  return (
    <NavbarMenuWrapper>
      {navLink.map((item) => (
        <NavbarMenuWrapper.Links key={item.id} to={item.path}>
          {item.title}
        </NavbarMenuWrapper.Links>
      ))}
      <NavbarMenuWrapper.Close onClick={openMenu}>
        <CloseSvg />
      </NavbarMenuWrapper.Close>
    </NavbarMenuWrapper>
  );
};

export default NavbarMenu;
