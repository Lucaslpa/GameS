import { screen } from '@testing-library/react';
import { ProductInfos } from '.';
import { renderConfig } from '../../utils/RenderConfig';
import products from '../../db/products';

describe('ProductInfos', () => {
  it('should render product image', () => {
    renderConfig(<ProductInfos freight={10} product={products[3]} />);
    const getProduct = screen.getByAltText('product');
    expect(getProduct).toBeInTheDocument();
  });

  it('should render infos name, price and freight', () => {
    renderConfig(<ProductInfos product={products[3]} />);
    const name = screen.getByTestId(/name/i);
    const price = screen.getByTestId(/price/i);

    expect(name).toBeInTheDocument();
    expect(price).toBeInTheDocument();
  });

  it('should render button', () => {
    renderConfig(<ProductInfos product={products[3]} />);

    const button = screen.getByTestId('button');
    expect(button).toBeInTheDocument();
  });
});
