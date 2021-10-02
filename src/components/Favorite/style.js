import styled, { css } from 'styled-components';
import media from 'styled-media-query';

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

export const Buttons = styled.div`
  ${media.lessThan('medium')`
       margin-top: 2rem; 
      `}
  width: 100%;
  display: flex !important;
  justify-content: space-between;
  ${({ theme }) => css`
    a {
      width: 55%;
      padding: ${theme.spaces.medium};
      background-color: ${theme.colors.primary};
      border-radius: ${theme.radius};
      color: white;
      font-size: ${theme.fonts.medium};
      &:hover {
        background-color: ${theme.colors.secondary};
      }
    }
    button {
      cursor: pointer;
      background-color: white;
      width: 40%;

      svg {
        width: 100%;
        max-width: 3rem;
        cursor: pointer;
        fill: ${theme.colors.primary};
        transition: 0.4s;
        &:hover {
          fill: red;
        }
      }
    }
  `}
`;

export const ProductsM = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  > div {
    display: flex;
    flex-direction: column;
    max-width: 30rem;

    width: 100%;
    ${({ theme }) => css`
      margin-top: ${theme.spaces.medium};
      padding: ${theme.spaces.medium} ${theme.spaces.small};
      h1 {
        font-size: ${theme.fonts.medium};
        margin-top: ${theme.spaces.medium};
      }
      span {
        font-size: ${theme.fonts.medium};
        margin-top: ${theme.spaces.medium};
      }
    `}
    img {
      margin: 0 auto;
    }
  }
`;
