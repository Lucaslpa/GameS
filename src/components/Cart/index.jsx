import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Delete as DeleteSVG } from '@styled-icons/material-outlined/';
import { finalPriceCalc } from '../../utils/FinalPriceCalc';

import * as S from './style';
import { Responsive } from '../Responsive';
import { Table } from './CartComponents/Table';

export const Cart = ({ products, freight = 10, onDeleteProduct }) => {
  const [Freight, setFreight] = useState(10);
  const [finalPrice, setFinalPrice] = useState(0);
  const [Products, setProducts] = useState(products);

  function handlePriceCalc() {
    const newFreightsValue = Products.length * freight;

    const { FinalPriceWithFreight, FinalPriceWithoutFreight } = finalPriceCalc(
      Products,
      newFreightsValue
    );

    if (FinalPriceWithoutFreight > 250) {
      setFinalPrice(FinalPriceWithoutFreight);
      setFreight(0);
      return;
    }

    setFreight(newFreightsValue);
    setFinalPrice(FinalPriceWithFreight);
  }

  function handleUpdateProductQuantityAndPrice(productID, ProductNewQuantity) {
    const productToUpdate = Products.filter((prod) => prod.id === productID)[0];
    const unchangedProducts = Products.filter((prod) => prod.id !== productID);

    if (ProductNewQuantity > 0) {
      const productBasePrice = productToUpdate.price / productToUpdate.quantity;

      const newProductPrice = productBasePrice * ProductNewQuantity;
      productToUpdate.price = Number(newProductPrice.toFixed(2));
      productToUpdate.quantity = ProductNewQuantity;

      setProducts([...unchangedProducts, productToUpdate]);
    }
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
            onChange={handleUpdateProductQuantityAndPrice}
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
                      handleUpdateProductQuantityAndPrice(product.id, e.target.value)
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
          <span data-testid="freight">Freight: ${Freight}</span>
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
