import styled from "styled-components";
export const CustomersWrapper = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 20px;
  @media (max-width: 755px) {
    grid-template-columns: 100%;
  }
`;

export const CustomerWrap = styled.div`
  background: #066f14;
  width: 690px;
  height: 204px;
  margin-top: 20px;
  padding: 20px;
  position: relative;
  @media (max-width: 1253px) {
    width: 600px;
  }
  @media (max-width: 1143px) {
    width: 550px;
  }
  @media (max-width: 755px) {
    width: 100%;
    height: auto;
  }
`;
CustomerWrap.User = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  h2 {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    color: #ffffff;
  }
  p {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #d9d9d9;
  }
`;
CustomerWrap.Slide = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 0;
  right: 0;
  .slide {
    background: #143b19;
    height: 40px;
    display: flex;
    align-items: center;
    width: 30px;
    cursor: pointer;
  }
  .slide2 {
    background-color: #fff;
  }
`;
