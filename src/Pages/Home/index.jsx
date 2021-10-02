import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';
import { Menu } from '../../components/Menu';
import { useCartContext } from '../../Contexts/Cart';
import { useFavoritesContext } from '../../Contexts/Favorites';

export const HomeTemplate = ({ children }) => {
  const [CartState] = useCartContext();
  const [FavoritesState] = useFavoritesContext();
  const { cart } = CartState;
  const { favorites } = FavoritesState;
  React.useEffect(() => {
    console.log(CartState);
  }, [CartState]);
  if (children) {
    return (
      <S.Wrapper>
        <header>
          <Menu
            CartQuantity={cart.length}
            FavoritesQuantity={favorites.length}
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
};
