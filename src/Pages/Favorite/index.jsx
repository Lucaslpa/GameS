import React from 'react';
import PropTypes from 'prop-types';
import { ArrowBarLeft as ArrowBarLeftSVG } from '@styled-icons/bootstrap';
import { Link } from 'react-router-dom';
import * as S from './style';
import { Favorite } from '../../components/Favorite';
import { useFavoritesContext } from '../../Contexts/Favorites';
import { buildActions } from '../../Contexts/Favorites/buildActions';

export const FavoriteTemplate = ({ products }) => {
  const [state, dispatch] = useFavoritesContext();
  const FavoritesContext = buildActions(dispatch);
  const { favorites } = state;

  function handleDeleteProductFromFavorites(productID) {
    const FavoritesWithoutRemovedProduct = favorites.filter(
      (product) => product.id !== productID
    );

    FavoritesContext.SET_FAVORITES(FavoritesWithoutRemovedProduct);
  }

  return (
    <S.Wrapper>
      <S.Header>
        <Link to="/">
          {' '}
          <ArrowBarLeftSVG />
        </Link>
        <span>Favorites</span>
      </S.Header>

      {products && products.length ? (
        <Favorite
          products={products}
          onDeleteProduct={handleDeleteProductFromFavorites}
        />
      ) : null}
    </S.Wrapper>
  );
};

FavoriteTemplate.propTypes = {
  products: PropTypes.array.isRequired,
};
