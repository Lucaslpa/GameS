import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';
import { Product } from '../Product';
import { useFavoritesContext } from '../../Contexts/Favorites';
import { buildActions } from '../../Contexts/Favorites/buildActions';

export const ListProducts = ({ products }) => {
  const [state, dispatch] = useFavoritesContext();
  const { favorites } = state;
  const FavoritesContext = buildActions(dispatch);

  function handleAddIntoFavorites(favoriteProduct) {
    const AlreadyIntoFavorites = favorites.filter(
      (product) => product.id === favoriteProduct.id
    ).length;
    if (AlreadyIntoFavorites) {
      alert('Already Into Favorites');
      return;
    }
    FavoritesContext.SET_FAVORITES([...favorites, favoriteProduct]);
  }

  if (products.length && products) {
    return (
      <S.Wrapper>
        <S.Products>
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              onClick={() => handleAddIntoFavorites(product)}
            />
          ))}
        </S.Products>
      </S.Wrapper>
    );
  }
  return null;
};

ListProducts.propTypes = {
  products: PropTypes.array.isRequired,
};
