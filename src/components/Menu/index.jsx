import React from 'react';
import { Search as SearchSVG } from '@styled-icons/boxicons-regular';
import * as S from './style';
import { Responsive } from '../Responsive';

export const Menu = () => (
  <S.Wrapper>
    <S.Logo aria-label="Site logo">GameS</S.Logo>
    <S.Search>
      <input arial-label="Search field" type="text" />
      <button type="submit">
        <SearchSVG />
      </button>
    </S.Search>
    <Responsive screen="web">
      <S.Cart data-testid="cart web">
        <img alt="cart" src="/assets/cart-icon.svg" />
        <S.ProductsInCart>
          <span>8</span>
        </S.ProductsInCart>
      </S.Cart>
    </Responsive>
    <Responsive screen="mobile">
      <S.CartMobile data-testid="cart mobile">
        <img alt="cart" src="/assets/cart-icon.svg" />
        <S.ProductsInCart>
          <span>8</span>
        </S.ProductsInCart>
      </S.CartMobile>
    </Responsive>
  </S.Wrapper>
);
