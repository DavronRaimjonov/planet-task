import { Typography } from "@mui/material";
import React from "react";
import { followImg } from "../../../data";
import { Container } from "../../../generic/style";
import { FollowWrapImg } from "./style";
import instagramm from "../../../assets/img/Instagram.png";
const Follow = () => {
  return (
    <Container>
      <Typography textAlign={"center"} variant="h2">
        Follow Us on Instagram
      </Typography>
      <Typography
        textAlign={"center"}
        variant="body1"
        width={"60%"}
        margin={"0 auto"}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor,
        accu msan sit amet nunc cursus. Nec tristique at in erat lectus
      </Typography>
      <FollowWrapImg>
        {followImg.map((item) => (
          <FollowWrapImg.Card key={item.id}>
            <img className="img" src={item.img} alt="" />
            <a href="#" className="instagramm">
              <img src={instagramm} alt="" />
            </a>
          </FollowWrapImg.Card>
        ))}
      </FollowWrapImg>
    </Container>
  );
};

export default Follow;
