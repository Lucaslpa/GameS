import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';
import { ListProducts } from '../../components/ListProducts';
import { Sort } from '../../components/Sort';

export const ListProductsTemplate = ({ products }) => {
  if (products) {
    return (
      <S.Wrapper>
        <S.SortWrapper>
          <Sort />
        </S.SortWrapper>
        <ListProducts products={products} />
      </S.Wrapper>
    );
  }
  return null;
};

ListProductsTemplate.propTypes = {
  products: PropTypes.array.isRequired,
};
