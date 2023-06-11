import styled from "styled-components";

export const ProductWrapper = styled.div`
  margin-bottom: 20px;
`;

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

ProductWrapper.Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  margin: 40px 0;
  @media (max-width: 1072px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 788px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 390px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
ProductWrapper.Card = styled.div`
  background-color: #eaf2e5;
  text-align: center;
  padding: 10px 20px;
  img {
    height: 150px;
  }
  h2 {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    color: #1a1a1a;
    text-align: start;
  }
  p {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    color: #1a1a1a;
    text-align: start;
    padding-top: 5px;
  }
`;
ProductWrapper.Star = styled.img`
  height: 20px !important;
  display: flex;
  justify-content: flex-start;
`;
