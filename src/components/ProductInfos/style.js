import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  width: 100%;
  display: flex; 
  justify-content: center; 
`;

export const Product = styled.section`
  max-width: 40rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%; 
  padding: 3rem; 
  > img {
    width: 20rem;
    margin: 0 auto;
    align-self: center;
  }
  > div {
    display: flex;
    flex-direction: column;
    padding: 0 !important; 
    width: 100%;
    ${media.lessThan('medium')`
  padding: 3rem 1rem;
       
    `}

    ${({ theme }) => css`
      padding: ${theme.spaces.xxbig};
      h1 {
        margin: 3rem 0;

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
