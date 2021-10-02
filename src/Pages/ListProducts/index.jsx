import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as S from './style';
import { ListProducts } from '../../components/ListProducts';
import { Sort } from '../../components/Sort';

export const ListProductsTemplate = ({ products }) => {
  const [Products, setProducts] = useState(products);

  useEffect(() => {
    setProducts(products);
  }, [products]);

  return (
    <S.Wrapper>
      <S.SortWrapper>
        <Sort />
      </S.SortWrapper>
      {Products && <ListProducts products={Products} />}
    </S.Wrapper>
  );
};
ListProductsTemplate.propTypes = {
  products: PropTypes.array.isRequired,
};
