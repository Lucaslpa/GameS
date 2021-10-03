import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 240px;
  display: flex;
  ${({ theme }) => css`
    padding:${theme.spaces.medium} ${theme.spaces.big};
    border: solid 1px ${theme.colors.black};
  `}
  select {
    outline: none;
    cursor: pointer;
    ${({ theme }) => css`
      padding: 0 ${theme.spaces.medium};
      font-size: ${theme.fonts.medium};
    `}
  }
  span {
    ${({ theme }) => css`
      font-size: ${theme.fonts.medium};
    `}
    white-space: nowrap
  }
`;
