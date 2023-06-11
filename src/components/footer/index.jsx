import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import { Facebook, Instagramm } from "../../assets";
import Twiiter from "../../assets/icon/twiiter";
import { footerData, footerData1, footerData2 } from "../../data";
import { Container } from "../../generic/style";
import { NavbarWrapper } from "../navbar/style";
import { FooterWrap } from "./style";

const Footer = () => {
  const matches = useMediaQuery("(max-width:350px)");
  return (
    <Container>
      <FooterWrap>
        <Box>
          <NavbarWrapper.Logo>Plant</NavbarWrapper.Logo>
          <Typography variant="body1" width={`${matches ? "100%" : "60%"}`}>
            Lorem ipsum dolor sit amet, consectetur adi piscing elit. Diam nibh
            posuere duis eu non sit integer at placerat amet.
          </Typography>
          <Stack direction={"row"} spacing={2} m={"10px 0"}>
            <Facebook />
            <Twiiter />
            <Instagramm />
          </Stack>
        </Box>
        <FooterWrap.Link>
          {footerData.map((item) => (
            <Box key={item.id}>
              <h2>{item.title}</h2>
              <p>{item.link}</p>
            </Box>
          ))}
        </FooterWrap.Link>
        <FooterWrap.Link>
          {footerData1.map((item) => (
            <Box key={item.id}>
              <h2>{item.title}</h2>
              <p>{item.link}</p>
            </Box>
          ))}
        </FooterWrap.Link>
        <FooterWrap.Link>
          {footerData2.map((item) => (
            <Box key={item.id}>
              <h2>{item.title}</h2>
              <p>{item.link}</p>
            </Box>
          ))}
        </FooterWrap.Link>
      </FooterWrap>
    </Container>
  );
};

export default Footer;
