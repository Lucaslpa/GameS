import React from 'react';
import PropTypes from 'prop-types';
import { HeartBroken as HeartBrokenSVG } from '@styled-icons/icomoon';
import * as S from './style';
import { Responsive } from '../Responsive';
import { Table } from './FavoriteComponents/Table';

export const Favorite = ({ products }) => {
  if (products.length && products) {
    return (
      <S.Wrapper>
        <Responsive screen="web">
          <Table products={products} />
        </Responsive>
        <Responsive screen="mobile">
          <S.ProductsM>
            {products.map((product) => (
              <div key={product.id}>
                <img alt="product" src={`/assets/${product.image}`} />
                <h1>{product.name}</h1>
                <span>{product.price}</span>
                <S.Buttons>
                  <a href="/">buy</a>
                  <button type="button">
                    <HeartBrokenSVG />
                  </button>
                </S.Buttons>
              </div>
            ))}
          </S.ProductsM>
        </Responsive>
      </S.Wrapper>
    );
  }
  return null;
};

Favorite.propTypes = {
  products: PropTypes.array.isRequired,
};
