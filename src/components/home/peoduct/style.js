import styled from "styled-components";

export const ProductWrapper = styled.div``;

ProductWrapper.Title = styled.div`
  text-align: center;
`;
ProductWrapper.FilterTitle = styled.div`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #4a4a4a;
  padding-bottom: 20px;
  cursor: pointer;
  color: ${(props) => props.$active && "#066F14"};
`;



