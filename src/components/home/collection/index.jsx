import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { CollectionImg } from "../../../data";
import { Container } from "../../../generic/style";
import { CollextionWrap } from "./style";
import vektor from "../../../assets/img/vektorRight.png";
const Collection = () => {
  return (
    <Container>
      <CollextionWrap
        direction={"row sm:column"}
        justifyContent={"space-between"}
      >
        <CollextionWrap.Left>
          <Typography variant="h2">
            We have lots of plants collection for you and your family
          </Typography>
          <CollextionWrap.Text variant="body1">
            <a href="#">See all collection</a>
            <img src={vektor} alt="" />
          </CollextionWrap.Text>
        </CollextionWrap.Left>
        <CollextionWrap.Right>
          {CollectionImg.map((item) => (
            <CollextionWrap.Img key={item.id}>
              <img src={item.img} alt="" />
            </CollextionWrap.Img>
          ))}
        </CollextionWrap.Right>
      </CollextionWrap>
    </Container>
  );
};

export default Collection;
