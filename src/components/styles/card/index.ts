import styled, { css } from "styled-components";

export const Card = styled.div`
  ${(props) => css`
    background-color: ${props.theme.colors.white};
    border-radius: 15px;
    display: flex;
    flex: 1;
    flex-direction: column;
    margin-top: 20px;
    max-height: 600px;
    padding: 15px;
  `}
`;
