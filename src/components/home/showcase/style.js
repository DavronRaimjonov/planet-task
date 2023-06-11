import styled from "styled-components";

export const SHowcaseWrapper = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  align-items: center;
  gap: 30px;
  @media (max-width: 755px) {
    grid-template-columns: 100%;
  }
`;
export const ShowcaseLeft = styled.div`
  position: relative;
`;
export const ShowcaseRight = styled.div`
  width: 100%;
`;
ShowcaseLeft.Vektor = styled.img`
  position: absolute;
  bottom: 10%;
  right: -20%;
  @media (max-width: 789px) {
    display: none;
  }
`;
ShowcaseLeft.Delivery = styled.div`
  text-align: center;
  margin-top: 50px;
  h2 {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    color: #001b04;
  }
  p {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    color: #1a1a1a;
  }
  @media (max-width: 345px) {
    h2 {
      font-size: 24px;
    }
  }
`;
