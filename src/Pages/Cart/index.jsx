import React from 'react';
import PropTypes from 'prop-types';
import { ArrowBarLeft as ArrowBarLeftSVG } from '@styled-icons/bootstrap';
import { Link } from 'react-router-dom';
import * as S from './style';
import { Cart } from '../../components/Cart';
import { useCartContext } from '../../Contexts/Cart';
import { buildActions } from '../../Contexts/Cart/buildActions';

export const CartTemplate = ({ products }) => {
  const [state, dispatch] = useCartContext();
  const CartContext = buildActions(dispatch);
  const { cart } = state;

  function handleDeleteProductFromCart(productID) {
    const CartWithoutRemovedProduct = cart.filter(
      (product) => product.id !== productID
    );

    CartContext.SET_CART(CartWithoutRemovedProduct);
  }

  return (
    <S.Wrapper>
      <S.Header>
        <Link to="/">
          <ArrowBarLeftSVG />
        </Link>{' '}
        <span>Cart</span>
      </S.Header>
      {products && products.length ? (
        <Cart
          products={products}
          onDeleteProduct={handleDeleteProductFromCart}
        />
      ) : null}
    </S.Wrapper>
  );
};

CartTemplate.propTypes = {
  products: PropTypes.array.isRequired,
};
