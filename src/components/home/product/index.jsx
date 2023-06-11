import { Stack, Typography } from "@mui/material";
import { useState } from "react";
import { ProductBtn, products } from "../../../data";
import { Button, Container } from "../../../generic/style";
import { ProductWrapper } from "./style";
import stars from "../../../assets/img/stars.png";
const Product = () => {
  const [title, setTitle] = useState("new");
  const filterProduct = products.filter((item) => item.category === title);
  return (
    <Container>
      <ProductWrapper>
        <ProductWrapper.Title>
          <Typography variant="h2" p={"10px"}>
            Our Best Product
          </Typography>
          <Stack direction={"row"} justifyContent={"center"} spacing={2}>
            {ProductBtn.map((item) => (
              <ProductWrapper.FilterTitle
                $active={item.title === title ? "active" : ""}
                key={item.id}
                onClick={() => setTitle(item.title)}
              >
                {item.name}
              </ProductWrapper.FilterTitle>
            ))}
          </Stack>
        </ProductWrapper.Title>
        <ProductWrapper.Cards>
          {filterProduct.map((item) => (
            <ProductWrapper.Card key={item.id}>
              <img src={item.img} alt="" />
              <h2>{item.title}</h2>
              <ProductWrapper.Star src={stars} alt="" />
              <p>${item.price}</p>
            </ProductWrapper.Card>
          ))}
        </ProductWrapper.Cards>
        <Stack direction={"row"} justifyContent={"center"}>
          <Button $sm>View All</Button>
        </Stack>
      </ProductWrapper>
    </Container>
  );
};

export default Product;
