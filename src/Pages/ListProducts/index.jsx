import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';
import { ListProducts } from '../../components/ListProducts';
import { Sort } from '../../components/Sort';

export const ListProductsTemplate = ({ products }) => (
  <S.Wrapper>
    <S.SortWrapper>
      <Sort />
    </S.SortWrapper>
    {products && <ListProducts products={products} />}
  </S.Wrapper>
);
ListProductsTemplate.propTypes = {
  products: PropTypes.array.isRequired,
};
