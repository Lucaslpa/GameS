import styled from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 100rem;
  display: flex;
  
`;

export const Products = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 0 auto; 

  
  ${media.lessThan('medium')`
  display: grid;
  grid-template-columns: 1fr 1fr;
 `}
  ${media.lessThan('small')`
      display: flex;
      flex-direction: column; 
      align-items: center; 
 `}
`;
