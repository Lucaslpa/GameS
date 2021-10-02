import React from 'react';
import PropTypes from 'prop-types';
import { ArrowBarLeft as ArrowBarLeftSVG } from '@styled-icons/bootstrap';
import * as S from './style';
import { Cart } from '../../components/Cart';

export const CartTemplate = ({ products }) => {
  if (products) {
    return (
      <S.Wrapper>
        <S.Header>
          <ArrowBarLeftSVG /> <span>Cart</span>
        </S.Header>

        <Cart products={products} />
      </S.Wrapper>
    );
  }
  return null;
};

CartTemplate.propTypes = {
  products: PropTypes.array.isRequired,
};