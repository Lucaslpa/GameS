import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 100rem;
`;

export const Products = styled.table`
  width: 100%;
  th {
    text-align: center;

    ${({ theme }) => css`
      padding: ${theme.spaces.big};
      span {
        font-size: ${theme.fonts.big};
      }
    `}
  }
`;

export const Product = styled.tr`
  border: solid 1px black;
  td {
    text-align: center;

    img {
      max-width: 13rem;
    }
    span {
      ${({ theme }) => css`
        font-size: ${theme.fonts.medium};
      `}
    }
    input {
      border: solid 1px black;
      ${({ theme }) => css`
        padding: ${theme.spaces.medium};
      `}
    }
  }
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end; 
  ${({ theme }) => css`
    padding: ${theme.spaces.medium};
    span {
      font-size: ${theme.fonts.big};
      margin: ${theme.spaces.medium};
    }
    button {
       max-width: 5rem; 
       margin: 1rem 0;
        padding: ${theme.spaces.big};
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${theme.colors.black};
        font-size: ${theme.fonts.big};
        background-color: ${theme.colors.yellow};
        cursor: pointer;
        border-radius: ${theme.radius};
        width: 100%;
        max-width: 40rem;
        transition: 0.4s;
        > svg {
          max-width: 2rem;
          fill: ${theme.colors.black};
          margin-right: ${theme.spaces.medium};
        }

        &:hover {
          background-color: #f5f240;
          color: black;
        }
    }
  `}
`;
