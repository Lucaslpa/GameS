import React from 'react';
import PropTypes from 'prop-types';
import { AddShoppingCart as AddShoppingCartSVG } from '@styled-icons/material-outlined';
import { Heart as HeartSVG } from '@styled-icons/boxicons-regular/Heart';
import * as S from './style';

export const Product = ({ product }) => {
  if ((product.image, product.name, product.price)) {
    return (
      <S.Wrapper>
        <img src={`/assets/${product.image}`} alt="product" />

        <S.Hover>
          <S.Buttons>
            <a href="/">
              {' '}
              <AddShoppingCartSVG />
              Add
            </a>
            <button type="button">
              {' '}
              <HeartSVG />
            </button>
          </S.Buttons>

          <S.infos style={{ color: 'white' }}>
            <h1>{product.name}</h1>
            <span>$ {product.price}</span>
          </S.infos>
        </S.Hover>
        <S.infos>
          <h1>{product.name}</h1>
          <span>$ {product.price}</span>
        </S.infos>
      </S.Wrapper>
    );
  }
  return null;
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
};
