import React from 'react';
import * as S from './style';

export const Sort = () => {
  React.useEffect(() => console.log(), []);
  return (
    <S.Wrapper>
      <span data-testid="sort" value="Popularity">
        Sort by:{' '}
      </span>
      <select data-testid="select" defaultValue="popularity">
        <option value="price">Price</option>
        <option value="popularity">Popularity</option>
        <option value="alphabetical">Alphabetical</option>
      </select>
    </S.Wrapper>
  );
};
