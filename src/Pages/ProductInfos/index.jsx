import React from 'react';
import PropTypes from 'prop-types';
import { ArrowBarLeft as ArrowBarLeftSVG } from '@styled-icons/bootstrap';
import { Link } from 'react-router-dom';
import * as S from './style';
import { ProductInfos } from '../../components/ProductInfos';

export const ProductInfosTemplate = ({ product }) => {
  if (product) {
    return (
      <S.Wrapper>
        <S.Header>
          <Link to="/">
            <ArrowBarLeftSVG />
          </Link>{' '}
        </S.Header>

        <ProductInfos product={product} />
      </S.Wrapper>
    );
  }
  return null;
};

ProductInfosTemplate.propTypes = {
  product: PropTypes.object.isRequired,
};
