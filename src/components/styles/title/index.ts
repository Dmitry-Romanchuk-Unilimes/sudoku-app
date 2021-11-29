import styled, { css } from "styled-components";

export const Title = styled.h1`
  ${(props) => css`
    color: ${props.theme.colors.white};
    text-align: center;
    margin: 0;
  `}
`;
