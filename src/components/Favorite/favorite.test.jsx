import { screen } from '@testing-library/react';
import { Favorite } from '.';
import { renderConfig } from '../../utils/RenderConfig';
import products from '../../db/products';

describe('Favorite', () => {
  it('should render products', () => {
    renderConfig(<Favorite products={products} />);
    const getProducts = screen.getAllByAltText('Product');
    expect(getProducts.length).toBe(products.length);
  });

  it('should render product', () => {
    renderConfig(<Favorite products={[products[0]]} />);
    const name = screen.getByTestId('name');
    const price = screen.getByTestId('price');

    expect(name).toBeInTheDocument();
    expect(price).toBeInTheDocument();
  });
});
