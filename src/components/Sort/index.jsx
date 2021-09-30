import React from 'react';
import * as S from './style';

export const Sort = () => (
  <S.Wrapper>
    <span data-testid="sort" value="Popularity">Sort by: </span>
    <select data-testid="select">
      <option>Price</option>
      <option>Popularity</option>
      <option>Alphabetical</option>
    </select>
  </S.Wrapper>
);
