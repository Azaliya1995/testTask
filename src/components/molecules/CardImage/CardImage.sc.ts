import styled from "styled-components";

interface  StyledCardImageProps {

}
export const StyledCardImage = styled.div<StyledCardImageProps>`
    position: relative;
    height: 55%;
    width: 100%;
  @media (max-width: 400px) {
    height: 50%;
  }
`;