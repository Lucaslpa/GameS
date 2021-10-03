import React from 'react';
import PropTypes from 'prop-types';
import { HeartBroken as HeartBrokenSVG } from '@styled-icons/icomoon';
import { Link } from 'react-router-dom';
import * as S from './style';
import { Responsive } from '../Responsive';
import { Table } from './FavoriteComponents/Table';

export const Favorite = ({ products, onDeleteProduct }) => {
  if (products.length && products) {
    return (
      <S.Wrapper>
        <Responsive screen="web">
          <Table products={products} onDeleteProduct={onDeleteProduct} />
        </Responsive>
        <Responsive screen="mobile">
          <S.ProductsM>
            {products.map((product) => (
              <div key={product.id}>
                <img alt="product" src={`/assets/${product.image}`} />
                <h1>{product.name}</h1>
                <span>{product.price}</span>
                <S.Buttons>
                  <Link to={`/Product/${product.id}`}>buy</Link>
                  <button
                    type="button"
                    onClick={() => onDeleteProduct(product.id)}
                  >
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
  onDeleteProduct: PropTypes.func,
};
