import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import styled from "styled-components";

export const CollextionWrap = styled(Stack)`
  margin-top: 40px;
  align-items: center;
  gap: 20px 10px;
  @media (max-width: 641px) {
    flex-direction: column;
  }
`;
CollextionWrap.Text = styled(Typography)`
  padding-top: 5px;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  &:hover {
    img {
      transition: 0.4s;
      padding-left: 5px;
    }
  }
  a {
    color: inherit;
  }
`;
CollextionWrap.Img = styled.div`
  overflow: hidden;
  &:hover {
    img {
      transition: all 0.4s ease-in-out;
      transform: scale(1.2);
    }
  }
  @media (max-width: 353px) {
    width: 90%;
    img {
      width: 100%;
    }
  }
`;
CollextionWrap.Left = styled.div`
  width: 30%;
  @media (max-width: 641px) {
    width: 100%;
  }
`;
CollextionWrap.Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60%;
  gap: 20px;
  @media (max-width: 641px) {
    width: 100%;
  }
  @media (max-width: 353px) {
    flex-direction: column;
  }
`;
