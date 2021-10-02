import React from 'react';
import { ArrowBarLeft as ArrowBarLeftSVG } from '@styled-icons/bootstrap';
import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as S from './style';
import { ProductInfos } from '../../components/ProductInfos';

export const ProductInfosTemplate = ({ products }) => {
  const { id } = useParams();
  const [Product, setProduct] = React.useState();

  React.useEffect(
    () =>
      setProduct(products.filter((product) => product.id === Number(id))[0]),
    [products]
  );

  return (
    <S.Wrapper>
      <S.Header>
        <Link to="/">
          <ArrowBarLeftSVG />
        </Link>{' '}
      </S.Header>

      {Product && <ProductInfos product={Product} />}
    </S.Wrapper>
  );
};
ProductInfosTemplate.propTypes = {
  products: PropTypes.array.isRequired,
};
