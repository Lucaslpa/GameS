import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as S from './style';

export const Cart = ({ products, freight = 0 }) => {
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

  if (products.length && products) {
    return (
      <S.Wrapper>
        <S.Products>
          <thead>
            <tr>
              <th>
                <span>Product</span>
              </th>
              <th>
                <span>Name</span>
              </th>

              <th>
                <span>Price</span>
              </th>
              <th>
                <span>Quantity</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <S.Product key={product.id}>
                <td>
                  <img alt="Product" src={`/assets/${product.image}`} />
                </td>
                <td>
                  <span data-testid="name">{product.name}</span>
                </td>
                <td>
                  <span data-testid="price">$ {product.price}</span>
                </td>
                <td>
                  <input
                    min={1}
                    data-testid="quantity"
                    onChange={(e) =>
                      handleChangeQuantityProduct(
                        product.id,
                        Number(e.target.value)
                      )
                    }
                    type="number"
                    defaultValue={product.quantity}
                  />
                </td>
              </S.Product>
            ))}
          </tbody>
        </S.Products>

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
};
