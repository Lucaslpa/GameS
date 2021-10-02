import { screen } from '@testing-library/react';
import { ListProducts } from '.';
import { renderConfig } from '../../utils/RenderConfig';

import products from '../../db/products';

describe('ListProducts', () => {
  it('should render products', () => {
    renderConfig(<ListProducts products={products} />);
    const getProducts = screen.getAllByAltText('product');
    expect(getProducts.length).toBe(products.length);
  });
});
