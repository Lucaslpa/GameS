import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';
import { Product } from '../Product';

export const ListProducts = ({ products }) => {
  if (products.length && products) {
    return (
      <S.Wrapper>
        <S.Products>
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </S.Products>
      </S.Wrapper>
    );
  }
  return null;
};

ListProducts.propTypes = {
  products: PropTypes.array.isRequired,
};
