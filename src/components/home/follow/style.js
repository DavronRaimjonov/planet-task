import styled from "styled-components";

export const FollowWrapImg = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin: 40px 0;
  @media (max-width: 1031px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 650px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 550px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 350px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
FollowWrapImg.Card = styled.div`
  position: relative;
  cursor: pointer;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 97.5%;
    transition: 0.5s;
  }
  .instagramm {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: -1;
    transition: 0.5s;
  }
  &:hover::before {
    background-color: rgba(0, 0, 0, 0.5);
  }
  &:hover {
    .instagramm {
      opacity: 1;
    }
  }
  .img {
    width: 100%;
    height: 280px;
  }
`;
