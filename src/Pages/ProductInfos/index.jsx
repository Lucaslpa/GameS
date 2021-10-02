import React from 'react';
import { ArrowBarLeft as ArrowBarLeftSVG } from '@styled-icons/bootstrap';
import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as S from './style';
import { ProductInfos } from '../../components/ProductInfos';
import { useCartContext } from '../../Contexts/Cart';
import { buildActions } from '../../Contexts/Cart/buildActions';

export const ProductInfosTemplate = ({ products }) => {
  const { id } = useParams();
  const [CartState, dispatch] = useCartContext();
  const [Product, setProduct] = React.useState();
  const { cart } = CartState;
  const CartContext = buildActions(dispatch);

  React.useEffect(
    () =>
      setProduct(products.filter((product) => product.id === Number(id))[0]),
    [products]
  );

  function handleAddIntoCart() {
    Product.quantity = 1;
    const AlreadyIntoCart = cart.filter(
      (product) => product.id === Product.id
    ).length;
    if (AlreadyIntoCart) {
      alert('Already Into Cart');
      return;
    }
    CartContext.SET_CART([...cart, Product]);
  }

  return (
    <S.Wrapper>
      <S.Header>
        <Link to="/">
          <ArrowBarLeftSVG />
        </Link>{' '}
      </S.Header>

      {Product && (
        <ProductInfos product={Product} onClick={() => handleAddIntoCart()} />
      )}
    </S.Wrapper>
  );
};
ProductInfosTemplate.propTypes = {
  products: PropTypes.array.isRequired,
};
