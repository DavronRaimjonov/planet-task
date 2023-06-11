import { Box } from "@mui/system";
import React from "react";
import { Container } from "../../../generic/style";
import { CustomersWrapper, CustomerWrap } from "./style";
import customrsImg from "../../../assets/img/customer2.png";
import { Typography } from "@mui/material";
import Customer from "./customer";
const Customers = () => {
  return (
    <Container>
      <CustomersWrapper>
        <Box>
          <Typography variant="h2">What Our Customers Says</Typography>
          <Typography variant="body1" p={"20px 0"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor,
            accumsan sit amet nunc cursus. Nec tristique at in erat lectus mas
            sa diam. Lectus elit, nulla elementum fringilla at.
          </Typography>
          <Customer />
        </Box>
        <Box sx={{ zIndex: -1 }}>
          <img src={customrsImg} alt="" />
        </Box>
      </CustomersWrapper>
    </Container>
  );
};

export default Customers;
