import styled from "styled-components";

interface StyledSearchBarProps {
}

export const StyledSearchBar = styled.div<StyledSearchBarProps>`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 10px;
`;