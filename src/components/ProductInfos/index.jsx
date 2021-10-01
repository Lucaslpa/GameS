import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ArrowBarLeft as ArrowBarLeftSVG } from '@styled-icons/bootstrap';
import { AddShoppingCart as AddShoppingCartSVG } from '@styled-icons/material-outlined';

import * as S from './style';

export const ProductInfos = ({ product }) => {
  const [Product] = useState(product);

  if (Product.name && Product.price) {
    return (
      <S.Wrapper>
        <ArrowBarLeftSVG />
        <S.Product>
          <img alt="product" src={`/assets/${Product.image}`} />

          <div>
            <h1 data-testid="name">{Product.name}</h1>
            <span data-testid="price">price: {Product.price}</span>

            <button
              data-testid="button"
              type="button"
              arial-label="buy product"
            >
              {' '}
              <AddShoppingCartSVG />
              <span>Add to cart: ${Product.price}</span>
            </button>
          </div>
        </S.Product>
      </S.Wrapper>
    );
  }
  return null;
};

ProductInfos.propTypes = {
  product: PropTypes.object.isRequired,
};
