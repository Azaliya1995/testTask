import styled from "styled-components";

export const StyledInput = styled.input`
  border: 1px solid #D8D8D8;
  box-sizing: border-box;
  border-radius: 25px;
  width: 418px;
  height: 50px;
  font-family: Open Sans, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  color: #363636;
  padding: 15px;
  &:focus {
    outline: none;
  }
  &:hover {
    border-color: #A8A8A8;
    box-shadow: 0 0 3px #A8A8A8;
  }
  @media screen and (min-width: 600px) and (max-width: 768px) {
    margin-left: 20px;
  }
`;
