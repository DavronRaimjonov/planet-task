import { Typography } from "@mui/material";
import styled from "styled-components";

export const AboutUsWrapper = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  align-items: flex-start;

  margin: 50px 0;
  gap: 20px;
  @media (max-width: 755px) {
    grid-template-columns: 100%;
    img {
      width: 100%;
    }
  }
`;

AboutUsWrapper.Body1 = styled(Typography)`
  @media (max-width: 995px) {
    font-size: 14px;
  }
`;
AboutUsWrapper.Text = styled.div`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  color: #4a4a4a;
  padding-bottom: 20px;
  @media (max-width: 995px) {
    font-size: 14px;
    padding-bottom: 10px;
  }
`;
AboutUsWrapper.Title = styled.div`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  color: #066f14;
`;
