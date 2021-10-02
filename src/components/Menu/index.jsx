import React from 'react';
import { Search as SearchSVG } from '@styled-icons/boxicons-regular';
import { Link } from 'react-router-dom';
import { Heart as HeartSVG } from '@styled-icons/boxicons-regular/Heart';
import PropTypes from 'prop-types';
import * as S from './style';

const NavOption = ({ url, children, quantity }) => (
  <Link to={url}>
    <S.NavOption data-testid="cart mobile">
      {children}
      <S.ProductsInCart>
        <span>{quantity}</span>
      </S.ProductsInCart>
    </S.NavOption>
  </Link>
);

NavOption.propTypes = {
  url: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  quantity: PropTypes.number.isRequired,
};

export const Menu = () => (
  <S.Wrapper>
    <S.Logo aria-label="Site logo">GameS</S.Logo>
    <S.Search>
      <input arial-label="Search field" type="text" />
      <button type="submit">
        <SearchSVG />
      </button>
    </S.Search>
    <S.Nav>
      <NavOption url="/Cart" quantity={3}>
        <img alt="cart" src="/assets/cart-icon.svg" />
      </NavOption>
      <NavOption url="/Favorites" quantity={3}>
        <HeartSVG aria-label="favorites" />
      </NavOption>
    </S.Nav>
  </S.Wrapper>
);
