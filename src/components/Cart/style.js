import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 100rem;
`;

export const Products = styled.table`
  width: 100%;
  overflow-x: scroll;
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
  ${({ theme }) => css`
    td {
      text-align: center;

      img {
        max-width: 13rem;
      }
      span {
        font-size: ${theme.fonts.medium};
      }
      input {
        border: solid 1px black;

        padding: ${theme.spaces.medium};
      }
      svg {
        width: 100%;
        max-width: 4rem;
        cursor: pointer;
        fill: ${theme.colors.primary};
        transition: 0.4s;
        &:hover {
          fill: red;
        }
      }
    }
  `}
  border: solid 1px black;
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
      > div {
        display: flex;
        justify-content: space-around;
        align-items: center;
      }

      svg {
        width: 100%;
        max-width: 4rem;
        padding-top: 1rem; 
        cursor: pointer;
        fill: ${theme.colors.primary};
        transition: 0.4s;
        &:hover {
          fill: red;
        }
      }
      padding: ${theme.spaces.medium} ${theme.spaces.small};
      h1 {
        font-size: ${theme.fonts.medium};
        margin-top: ${theme.spaces.medium};
      }
      span {
        font-size: ${theme.fonts.medium};
        margin-top: ${theme.spaces.medium};
      }
      input {
        padding: ${theme.spaces.medium};
        font-size: ${theme.fonts.medium};
        border: solid 1px ${theme.colors.black};
        margin-top: ${theme.spaces.medium};
        outline: none;
      }
    `}
    img {
      margin: 0 auto;
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
      margin: 1rem 0;
      padding: ${theme.spaces.medium};
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${theme.colors.black};
      font-size: ${theme.fonts.big};
      background-color: ${theme.colors.yellow};
      cursor: pointer;
      border-radius: ${theme.radius};
      width: 100%;
      max-width: 25rem;
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
