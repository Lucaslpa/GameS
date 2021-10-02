import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 100rem;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;

  ${media.lessThan('medium')`
   padding: 3rem  0; 
  `}
  svg {
    max-width: 3rem;
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
  span {
    font-size: 3rem; 
    padding: 2rem 6rem; 
    font-weight: 500; 
    ${media.lessThan('medium')`
   padding: 2rem  1rem ; 
  `}
  }
`;
