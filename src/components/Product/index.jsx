import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AddShoppingCart as AddShoppingCartSVG } from '@styled-icons/material-outlined';
import { Heart as HeartSVG } from '@styled-icons/boxicons-regular/Heart';
import * as S from './style';

export const Product = ({ product, onClick }) => {
  if ((product.image, product.name, product.price)) {
    return (
      <S.Wrapper>
        <img src={`/assets/${product.image}`} alt="product" />

        <S.Hover>
          <S.Buttons>
            <Link data-testid="link" to={`/Product/${product.id}`}>
              {' '}
              <AddShoppingCartSVG />
              Buy
            </Link>
            <button
              onClick={() => onClick()}
              data-testid="button"
              type="button"
            >
              {' '}
              <HeartSVG />
            </button>
          </S.Buttons>
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
  onClick: PropTypes.func,
};
