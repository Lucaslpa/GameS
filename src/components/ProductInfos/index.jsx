import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ArrowBarLeft as ArrowBarLeftSVG } from '@styled-icons/bootstrap';
import { AddShoppingCart as AddShoppingCartSVG } from '@styled-icons/material-outlined';

import * as S from './style';

export const ProductInfos = ({ product, freight }) => {
  const [Price, setPrice] = useState(product.price + freight);

  function handlePriceCalc(quantity) {
    const priceQuantity = product.price * quantity;
    console.log(priceQuantity);
    const priceWithFreight = priceQuantity + freight;
    setPrice(priceWithFreight.toFixed(2));
  }

  if (product.name && product.price) {
    return (
      <S.Wrapper>
        <ArrowBarLeftSVG />
        <S.Product>
          <img alt="product" src={`/assets/${product.image}`} />

          <div>
            <h1 data-testid="name">{product.name}</h1>
            <span data-testid="price">price: {product.price}</span>
            <span data-testid="freight">freight: ${freight}</span>
            <div>
              <span>Quantity: </span>
              <input
                min={1}
                data-testid="quantity"
                defaultValue={1}
                onChange={(e) => {
                  handlePriceCalc(e.target.value);
                }}
                type="number"
              />
            </div>
            <button type="button" arial-label="buy product">
              {' '}
              <AddShoppingCartSVG />
              Add to cart: ${Price}{' '}
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
  freight: PropTypes.number.isRequired,
};
