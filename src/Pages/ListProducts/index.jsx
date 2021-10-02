import React from 'react';
import * as S from './style';
import { ListProducts } from '../../components/ListProducts';
import { Sort } from '../../components/Sort';
import { useProductsContext } from '../../Contexts/Products';
import { buildActions } from '../../Contexts/Products/buildActions';
import productsDB from '../../db/products';

export const ListProductsTemplate = () => {
  const [state, dispatch] = useProductsContext();
  const ProductsContext = buildActions(dispatch);
  const { products } = state;

  React.useEffect(() => {
    ProductsContext.SET_PRODUCTS(productsDB);
  }, []);

  if (products) {
    return (
      <S.Wrapper>
        <S.SortWrapper>
          <Sort />
        </S.SortWrapper>
        <ListProducts products={products} />
      </S.Wrapper>
    );
  }
  return null;
};
