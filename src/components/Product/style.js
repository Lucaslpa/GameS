import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Buttons = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${({ theme }) => css`
    padding: ${theme.spaces.big};
  `}
  button {
    background-color: transparent;
    cursor: pointer;
    border: solid 1px white;
    ${({ theme }) => css`
      padding: ${theme.spaces.medium};
      border-radius: 100%;
    `}
    transition: 0.4s;
    svg {
      width: 100%;
      max-width: 2.3rem;
      fill: white;
    }
    &:hover {
      background-color: white;
      ${({ theme }) => css`
        svg {
          fill: ${theme.colors.black};
        }
      `}
    }
  }
  a {
    ${({ theme }) => css`
      text-decoration: none;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: ${theme.fonts.medium};
      border-radius: ${theme.radius};
      background-color: white;
      padding: ${theme.spaces.medium} ${theme.spaces.big};
      color: ${theme.colors.black};
      svg {
        width: 100%;
        max-width: 2.3rem;
        fill: ${theme.colors.black};
      }
      &:active {
        background-color: rgba(255, 255, 255, 0.6);
      }
    `}
  }
`;

export const infos = styled.div`
  width: 100%;
  ${({ theme }) => css`
    padding: ${theme.spaces.big};
  `}
  h1 {
    ${({ theme }) => css`
      font-size: ${theme.fonts.medium};
    `}
  }

  span {
    white-space: nowrap;
    ${({ theme }) => css`
      font-size: ${theme.fonts.medium};
    `}
  }
`;

export const Hover = styled.div`
  z-index: 10;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  opacity: 0;
  transition: 0.4s;
  ${({ theme }) => css`
    background-color: rgb(0, 111, 176, 0.9);
    padding: ${theme.spaces.small} ${theme.spaces.big};
  `}
  &:hover {
    opacity: 1;
  }
`;

export const Wrapper = styled.div`
  width: 25rem;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  ${({ theme }) => css`
    padding: ${theme.spaces.small} ${theme.spaces.big};
  `}
  ${media.lessThan('small')`
      flex-direction: column; 
      align-items: center; 
  `}
  img {
    width: 100%;
    max-width: 20rem;
  }
`;
