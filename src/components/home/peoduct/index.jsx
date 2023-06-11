import { Stack, Typography } from "@mui/material";
import { useState } from "react";
import { ProductBtn } from "../../../data";
import { Container } from "../../../generic/style";
import { ProductWrapper } from "./style";

const Product = () => {
  const [title, setTitle] = useState("new");
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
      </ProductWrapper>
    </Container>
  );
};

export default Product;
