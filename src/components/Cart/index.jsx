import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Delete as DeleteSVG } from '@styled-icons/material-outlined/';

import * as S from './style';
import { Responsive } from '../Responsive';
import { Table } from './CartComponents/Table';

export const Cart = ({ products, freight = 10, onDeleteProduct }) => {
  const [finalPrice, setFinalPrice] = useState(0);
  const [Products, setProducts] = useState(products);

  function handlePriceCalc() {
    const productsPrices = Products.map((product) => product.price);
    const ProductsPricesSum = productsPrices.reduce(
      (firstPrice, secondPrice) => firstPrice + secondPrice
    );
    const priceWithFreight = ProductsPricesSum + freight;

    setFinalPrice(Number(priceWithFreight.toFixed(2)));
  }

  function handleChangeQuantityProduct(productID, ProductNewQuantity) {
    const productToChange = Products.filter((prod) => prod.id === productID)[0];
    const unchangedProducts = Products.filter((prod) => prod.id !== productID);

    const defaultPrice = productToChange.price / productToChange.quantity;

    const newPrice = defaultPrice * ProductNewQuantity;
    productToChange.price = Number(newPrice.toFixed(2));
    productToChange.quantity = ProductNewQuantity;

    setProducts([...unchangedProducts, productToChange]);
  }

  useEffect(() => {
    handlePriceCalc();
  }, [Products]);

  useEffect(() => {
    setProducts(products);
  }, [products]);

  if (Products.length && Products) {
    return (
      <S.Wrapper>
        <Responsive screen="web">
          <Table
            products={Products}
            onChange={handleChangeQuantityProduct}
            onDeleteProduct={onDeleteProduct}
          />
        </Responsive>
        <Responsive screen="mobile">
          <S.ProductsM>
            {Products.map((product) => (
              <div key={product.id}>
                <img alt="product" src={`/assets/${product.image}`} />
                <h1>{product.name}</h1>
                <span>{product.price}</span>
                <div>
                  <input
                    min={1}
                    data-testid="quantity"
                    onChange={(e) =>
                      handleChangeQuantityProduct(product.id, e.target.value)
                    }
                    type="number"
                    defaultValue={product.quantity ? product.quantity : 1}
                  />
                  <DeleteSVG onClick={() => onDeleteProduct(product.id)} />
                </div>
              </div>
            ))}
          </S.ProductsM>
        </Responsive>
        <S.Infos>
          <span data-testid="freight">Freight: ${freight}</span>
          <span data-testid="finalPrice"> Final price: ${finalPrice}</span>
          <button data-testid="finish" type="button">
            Finish
          </button>
        </S.Infos>
      </S.Wrapper>
    );
  }
  return null;
};

Cart.propTypes = {
  products: PropTypes.array.isRequired,
  freight: PropTypes.number,
  onDeleteProduct: PropTypes.func,
};
