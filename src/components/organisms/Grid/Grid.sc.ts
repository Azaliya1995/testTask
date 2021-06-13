import styled from "styled-components";

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  padding: 10px;
  grid-gap: 30px;
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    padding: 20px;
    grid-gap: 20px;
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (min-width: 700px) and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    padding: 25px;
    grid-gap: 25px;
  }
  @media (max-width: 699px) {
    grid-template-columns: 1fr;
  }
`;
