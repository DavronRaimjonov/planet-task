import { Stack, Typography } from "@mui/material";
import { Button, Container } from "../../../generic/style";
import { ShowcaseLeft, ShowcaseRight, SHowcaseWrapper } from "./style";
import showcaseImg from "../../../assets/img/showcase.png";
import showcaseVektor from "../../../assets/img/klipartz.png";
const Showcase = () => {
  const customers = [
    {
      id: 1,
      title: "2000+",
      coment: "Delivery",
    },
    {
      id: 2,
      title: "1200+",
      coment: "Customers",
    },
    {
      id: 3,
      title: "1000+",
      coment: "Product",
    },
  ];
  return (
    <Container>
      <SHowcaseWrapper>
        <ShowcaseLeft>
          <Typography variant="h1">
            Growing <br /> Beautiful Plants <br />
            at Home
          </Typography>
          <Typography variant="body1" p={"40px 0"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, tempor,
            accumsan sit amet nunc cursus. Nec tristique at in erat lectus mas
            sa diam. Lectus elit, nulla elementum fringilla at.
          </Typography>
          <Button $md>Learn More</Button>
          <Stack direction={"row"} justifyContent={"space-between"}>
            {customers.map((item) => (
              <ShowcaseLeft.Delivery key={item.id}>
                <h2>{item.title}</h2>
                <p>{item.coment}</p>
              </ShowcaseLeft.Delivery>
            ))}
          </Stack>
          <ShowcaseLeft.Vektor src={showcaseVektor} />
        </ShowcaseLeft>
        <ShowcaseRight>
          <img src={showcaseImg} alt="" />
        </ShowcaseRight>
      </SHowcaseWrapper>
    </Container>
  );
};

export default Showcase;
