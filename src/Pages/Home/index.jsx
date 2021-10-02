import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';
import { Menu } from '../../components/Menu';
import { useCartContext } from '../../Contexts/Cart';
import { useFavoritesContext } from '../../Contexts/Favorites';

export const HomeTemplate = ({ children, onSearch }) => {
  const [CartState] = useCartContext();
  const [FavoritesState] = useFavoritesContext();
  const { cart } = CartState;
  const { favorites } = FavoritesState;

  if (children) {
    return (
      <S.Wrapper>
        <header>
          <Menu
            CartQuantity={cart.length}
            FavoritesQuantity={favorites.length}
            onSearch={onSearch}
          />
        </header>
        <main>{children}</main>
      </S.Wrapper>
    );
  }
  return null;
};

HomeTemplate.propTypes = {
  children: PropTypes.node.isRequired,
  onSearch: PropTypes.func,
};
