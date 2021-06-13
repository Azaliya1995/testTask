import styled from 'styled-components';

interface StyledTextProps {
    fontSize: number;
    fontWeight: string;
    lineHeight: number;
    width: number;
    padding: number;
}
export const StyledText = styled.p<StyledTextProps>`
  font-family: Open Sans,serif;
  font-style: normal;
  font-weight: ${props => props.fontWeight};
  font-size: ${props => `${props.fontSize}px`};
  line-height: ${props => `${props.lineHeight}px`};
  color: #363636;
  break-inside: avoid-column;
  width: auto;
  margin: 7px;
  padding:  ${props => props.padding ? `${props.padding}px` : 0};
  span {display:inline}
`;
