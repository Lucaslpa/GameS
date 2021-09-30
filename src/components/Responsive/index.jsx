import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';

export const Responsive = ({ children, screen }) => (
  <>
    {screen === 'mobile' && (
      <S.MobileRender data-testid="mobile">{children}</S.MobileRender>
    )}
    {screen === 'web' && <S.WebRender data-testid="web">{children}</S.WebRender>}
  </>
);

Responsive.propTypes = {
  children: PropTypes.node.isRequired,
  screen: PropTypes.string.isRequired,
};
