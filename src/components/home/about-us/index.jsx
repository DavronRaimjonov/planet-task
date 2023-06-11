import { Button, Container } from "../../../generic/style";
import { Box, Typography } from "@mui/material";
import { AboutUsWrapper } from "./style";
import aboutImg from "../../../assets/img/aboutUs.png";

const AboutUs = () => {
  return (
    <Container>
      <AboutUsWrapper>
        <Box width={"100%"}>
          <img src={aboutImg} alt="" />
        </Box>
        <Box>
          <AboutUsWrapper.Title>About Us</AboutUsWrapper.Title>
          <Typography variant="h2" p={"20px 0"}>
            Continue to Develop to Became Global Company
          </Typography>
          <AboutUsWrapper.Body1 variant="body1" pb={"20px"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor,
            accumsan sit amet nunc cursus. Nec tristique at in erat lectus mas
            sa diam. Lectus elit, nulla elementum fringilla at. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Eu, tempor, accumsan
            sit amet nunc cursus. Nec tristique at in erat lectus mas sa diam.
            Lectus elit, nulla elementum fringilla at. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit.
          </AboutUsWrapper.Body1>
          <AboutUsWrapper.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor,
            accumsan sit amet nunc cursus.
          </AboutUsWrapper.Text>
          <Button $lg>Read More</Button>
        </Box>
      </AboutUsWrapper>
    </Container>
  );
};

export default AboutUs;
