import styled from "styled-components";

export const StyledCardInfo = styled.div`
  width: calc(100% - 40px);
  padding: 20px 20px 0 20px;
  @media screen and (max-width: 400px) {
    width: calc(100% - 10px);
    padding: 10px;
  }
  div {
    display: flex;
    flex-direction: row;
  }
`;