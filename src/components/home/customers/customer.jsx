import React from "react";
import { CustomerWrap } from "./style";
import { Box } from "@mui/system";
import { Stack, Typography } from "@mui/material";
import user from "../../../assets/img/customer1.png";
import vektor from "../../../assets/img/customer.png";
import { LeftSlide, RightSlide } from "../../../assets";

const Customer = () => {
  return (
    <CustomerWrap>
      <CustomerWrap.User>
        <Stack direction={"row"} spacing={2} alignItems={"center"}>
          <img src={user} alt="" />
          <Box>
            <h2>Hasanul Islam</h2>
            <p>Marketing CEO</p>
          </Box>
        </Stack>
        <img src={vektor} alt="" />
      </CustomerWrap.User>
      <Typography color={"#fff"} variant="body1" pt={"20px"} width={"80%"}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor,
        accumsan sit amet nunc cursus. Nec tristique at in erat lectus mas sa
        diam. Lectus elit, nulla elementum fringilla at.
      </Typography>
      <CustomerWrap.Slide>
        <div className="slide">
          <LeftSlide />
        </div>
        <div className="slide slide2">
          <RightSlide />
        </div>
      </CustomerWrap.Slide>
    </CustomerWrap>
  );
};

export default Customer;
