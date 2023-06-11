import styled from "styled-components";

export const SubscirpeWrapper = styled.div`
  background: #dfffe3;
  border-radius: 6px;
  margin: 30px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 60px;
  .eror {
    color: red;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
  }
  @media (max-width: 717px) {
    flex-direction: column;
    gap: 30px;
    padding: 0 20px;
  }
`;
SubscirpeWrapper.Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60%;
  background-color: #fff;
  padding: 6px;
  border-radius: 8px;
  @media (max-width: 717px) {
    width: 100%;
  }
  input {
    width: 75%;
    border: none;
    outline: none;
    background-color: transparent;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #5a5a5a;
  }
`;
