import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  ${({ theme }) => css`
    padding-top: ${theme.spaces.big};
    padding-bottom: ${theme.spaces.big};
  `}
  background-color: #303030;
  ${media.lessThan('small')`
      flex-direction: column; 
      align-items: center; 
  `}
`;

export const Logo = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.fonts.big};
    font-weight: 500;
    color: #fcfcfc;
  `}
`;

export const Search = styled.div`
  width: 100%;
  max-width: 30rem;
  display: flex;
  align-items: center;
  ${media.lessThan('small')`
  padding: 2rem 1rem 0 1rem ; 
  `}
  input {
    width: 100%;
    height: 100%;
    border: solid 1px;
    ${({ theme }) => css`
      border: solid 1px ${theme.colors.primary};
    `}
    outline: none;
    padding: 0.3rem;
  }

  button {
    cursor: pointer;
    width: 100%;
    height: 100%;
    max-width: 5rem;
    ${({ theme }) => css`
      background-color: ${theme.colors.primary};
    `}
    padding: 0.5rem;
  }
  button:hover {
    ${({ theme }) => css`
      background-color: ${theme.colors.secondary};
    `}
  }

  svg {
    ${({ theme }) => css`
      border-radius: ${theme.radius};
    `}
    width: 2rem;
    fill: white;
  }
`;

export const Cart = styled.div`
  ${({ theme }) => css`
    border-radius: ${theme.radius};
    padding: ${theme.spaces.small};
  `}
  cursor: pointer;
  max-width: 5rem;
  display: flex;
  align-items: center;

  img {
    width: 100%;
  }
  position: relative;
`;

export const CartMobile = styled.div`
  ${({ theme }) => css`
    border-radius: ${theme.radius};
    padding: ${theme.spaces.small};
    border: solid 1px ${theme.colors.black};
    background-color: ${theme.colors.primary};
  `}
  width: 100%;
  cursor: pointer;
  max-width: 4rem;
  display: flex;
  align-items: center;
  position: absolute;
  img {
    width: 100%;
  }
  right: 6%;
  bottom: 3%;
`;

export const ProductsInCart = styled.div`
  width: 2.3rem;
  height: 2.3rem;
  border-radius: 100%;
  ${({ theme }) => css`
    background-color: ${theme.colors.yellow};
  `}
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    ${({ theme }) => css`
      font-size: ${theme.fonts.medium};
    `}
    color: black;
  }
  top: 0%;
  right: -10%;
  pointer-events: none; 
`;
