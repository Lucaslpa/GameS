import styled from 'styled-components';
import media from 'styled-media-query';

export const MobileRender = styled.div`
  display: none;
  height: auto;
  width: auto;
  ${media.lessThan('medium')`
     display: flex
  `}
`;

export const WebRender = styled.div`
  display: none;
  height: auto;
  width: auto;
  ${media.greaterThan('medium')`
  display: flex;

  `}
`;
