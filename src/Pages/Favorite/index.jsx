import React from 'react';
import PropTypes from 'prop-types';
import { ArrowBarLeft as ArrowBarLeftSVG } from '@styled-icons/bootstrap';
import * as S from './style';
import { Favorite } from '../../components/Favorite';

export const FavoriteTemplate = ({ products }) => {
  if (products) {
    return (
      <S.Wrapper>
        <S.Header>
          <ArrowBarLeftSVG /> <span>Favorites</span>
        </S.Header>

        <Favorite products={products} />
      </S.Wrapper>
    );
  }
  return null;
};

FavoriteTemplate.propTypes = {
  products: PropTypes.array.isRequired,
};
