import { screen, fireEvent } from '@testing-library/react';
import { ProductInfos } from '.';
import { renderConfig } from '../../utils/RenderConfig';
import products from '../../db/products';

describe('Menu', () => {
  it('should render product image', () => {
    renderConfig(<ProductInfos freight={10} product={products[3]} />);
    const getProduct = screen.getByAltText('product');
    expect(getProduct).toBeInTheDocument();
  });

  it('should render infos name, price, quantity and freight', () => {
    renderConfig(<ProductInfos freight={10} product={products[3]} />);
    const name = screen.getByTestId(/name/i);
    const price = screen.getByTestId(/price/i);
    const quantity = screen.getByTestId(/quantity/i);
    const freight = screen.getByTestId(/freight/i);

    expect(name).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(quantity).toBeInTheDocument();
    expect(freight).toBeInTheDocument();
  });

  it('should render button', () => {
    renderConfig(<ProductInfos freight={10} product={products[3]} />);

    const button = screen.getByRole('button', {
      name: 'Add to cart: $259.99',
    });
    expect(button).toBeInTheDocument();
  });

  it('Should update product value on quantity change', () => {
    renderConfig(<ProductInfos freight={10} product={products[3]} />);

    const quantity = screen.getByTestId(/quantity/i);
    const button = screen.getByRole('button', {
      name: 'Add to cart: $259.99',
    });
    expect(button).toBeInTheDocument();
    fireEvent.input(quantity, { target: { value: 2 } });

    const buttonTwo = screen.getByRole('button', {
      name: "Add to cart: $509.98",
    });

    expect(buttonTwo).toBeInTheDocument();
  });
});
