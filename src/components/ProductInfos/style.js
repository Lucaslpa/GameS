import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 60rem;
  display: flex;
  flex-direction: column;
  -webkit-box-shadow: 5px 0px 8px -3px rgba(186, 186, 186, 0.32);
  box-shadow: 5px 0px 8px -3px rgba(186, 186, 186, 0.32);
  > svg {
    max-width: 5rem;
    cursor: pointer;
    transition: 0.2s;
    ${({ theme }) => css`
      fill: ${theme.colors.primary};
      &:hover {
        fill: ${theme.colors.secondary};
        transform: scale(1.1);
      }
    `}
  }
`;

export const Product = styled.section`
  max-width: 80rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  > img {
    width: 20rem;
    margin: 0 auto;

    align-self: center;
  }
  ${({ theme }) => css`
    padding: ${theme.spaces.xxbig};
    ${media.lessThan('medium')`
    padding: 0;
       
    `}
  `}

  > div {
    display: flex;
    flex-direction: column;
    width: 100%;
    ${media.lessThan('medium')`
  padding: 3rem 1rem;
       
    `}

    ${({ theme }) => css`
      padding: ${theme.spaces.xxbig};
      h1 {
        margin: 1rem 0;

        font-size: ${theme.fonts.big};
      }
      span {
        margin: 1rem 0;

        font-size: ${theme.fonts.big};
      }
      input {
        margin: 1rem 0;
        padding: ${theme.spaces.medium};
        font-size: ${theme.fonts.big}
        height: 1rem;
        max-width: 7rem;
        outline: none; 
        border: solid 1px ${theme.colors.black};
      }
      button {
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
  }
`;
