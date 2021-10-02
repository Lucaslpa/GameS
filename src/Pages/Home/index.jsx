import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';
import { Menu } from '../../components/Menu';

export const HomeTemplate = ({ children }) => {
  if (children) {
    return (
      <S.Wrapper>
        <menu>
          <Menu />
        </menu>
        <main>{children}</main>
      </S.Wrapper>
    );
  }
  return null;
};

HomeTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};
