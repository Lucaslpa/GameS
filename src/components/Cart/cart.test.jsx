import { screen } from '@testing-library/react';
import { Cart } from '.';
import { renderConfig } from '../../utils/RenderConfig';
import products from '../../db/products';

describe('Cart', () => {
  it('should render products', () => {
    renderConfig(<Cart products={products} />);
    const getProducts = screen.getAllByAltText('Product');
    expect(getProducts.length).toBe(products.length);
  });

  it('should render product', () => {
    renderConfig(<Cart products={[products[0]]} />);
    const name = screen.getByTestId('name');
    const price = screen.getByTestId('price');
    const quantity = screen.getByTestId('quantity');

    expect(name).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(quantity).toBeInTheDocument();
  });

  it('should render product infos', () => {
    renderConfig(<Cart products={products} />);
    const freight = screen.getByTestId('freight');
    const finalPrice = screen.getByTestId('finalPrice');
    const button = screen.getByTestId('finish');

    expect(freight).toBeInTheDocument();
    expect(finalPrice).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
