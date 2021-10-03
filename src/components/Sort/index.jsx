import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';

export const Sort = ({ onSelectSortMethod }) => (
  <S.Wrapper>
    <span data-testid="sort" value="Popularity">
      Sort by:{' '}
    </span>
    <select
      data-testid="select"
      defaultValue="popularity"
      onChange={(e) => onSelectSortMethod(e.target.value)}
    >
      <option value="price">Price</option>
      <option value="popularity">Popularity</option>
      <option value="alphabet">Alphabet</option>
    </select>
  </S.Wrapper>
);

Sort.propTypes = {
  onSelectSortMethod: PropTypes.func
};
