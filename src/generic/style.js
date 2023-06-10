import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  display: ${(props) => (props.$flex ? "flex" : " ")};
  align-items: ${(props) => (props.$flex ? "center" : " ")};
  justify-content: ${(props) => (props.$flex ? "space-between" : " ")};
`;
const btnWidth = {
  sm: "81px",
  md: "131px",
  lg: "160px",
};

export const Button = styled.div`
  background: #066f14;
  border-radius: 4px;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #ffffff;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) =>
    props.$sm
      ? btnWidth.sm
      : props.$md
      ? btnWidth.md
      : props.$lg
      ? btnWidth.lg
      : ""};
  cursor: pointer;
  border: 1px solid #066f14;
  transition: 0.4s;
  &:hover {
    background-color: #fff;
    color: #066f14;
  }
`;
