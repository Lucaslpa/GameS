import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.menu`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  ${({ theme }) => css`
    padding-top: ${theme.spaces.big};
    padding-bottom: ${theme.spaces.big};
    background-color: ${theme.colors.black};
  `}
  ${media.lessThan('small')`
      flex-direction: column; 
      align-items: center; 
  `}
`;

export const Nav = styled.nav`
  display: flex;
  width: 13rem;
  justify-content: space-around;
  ${({ theme }) => css`
    svg {
      width: 100%;
      max-width: 4rem;
      fill: ${theme.colors.white};
    }
  `}

  ${media.lessThan('medium')`
  z-index: 100;
   position: absolute; 
   bottom: 10%; 
   right: 5%;
  `}
`;

export const NavOption = styled.div`
  cursor: pointer;
  max-width: 5rem;
  display: flex;
  align-items: center;
  position: relative;
  img {
    width: 100%;
  }
  ${({ theme }) => css`
    border-radius: ${theme.radius};
    padding: ${theme.spaces.small};
    ${media.lessThan('medium')`
    img, svg {
            background-color: ${theme.colors.primary}; 
            padding: 0.5rem;
         }
         img { 
           width: 5rem; 
         }
    `}
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
    min-height: 30px;
    border: solid 1px;
    ${({ theme }) => css`
      border: solid 1px ${theme.colors.primary};
    `}
    outline: none;
    padding: 0.3rem;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 100%;
    height: 100%;
    max-width: 5rem;
    ${({ theme }) => css`
      background-color: ${theme.colors.primary};
    `}
    padding: 0.5rem;
  }
  a:hover {
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
