import styled from "styled-components";

export const FooterWrap = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 20px;
  @media (max-width: 821px) {
    grid-template-columns: 2fr 1fr 1fr;
  }
  @media (max-width: 621px) {
    grid-template-columns: 2fr 1fr;
  }
  @media (max-width: 333px) {
    grid-template-columns: 1fr;
  }
`;
FooterWrap.Link = styled.div`
  h2 {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    color: #1a1a1a;
  }
  p {
    cursor: pointer;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #5a5a5a;
    transition: 0.5s;
    &:hover {
      color: #066f14;
    }
  }
`;
