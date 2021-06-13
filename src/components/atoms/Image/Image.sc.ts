import styled from "styled-components";

interface  StyledImageProps {
    isLabel: boolean
}
export const StyledImage = styled.img<StyledImageProps>`
  ${({ isLabel }) => isLabel && `
    bottom: 0;
    right: 0;
    position: absolute;
    height: 30px;
    width: 100px;
  `}
  ${({ isLabel }) => !isLabel && `
    position: inherit;
    height: 100%;
    width: 100%;
  `}
`;