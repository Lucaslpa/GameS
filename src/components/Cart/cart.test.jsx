import { screen, fireEvent } from '@testing-library/react';
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
    const quantity = screen.getAllByTestId('quantity');

    expect(name).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(quantity[0]).toBeInTheDocument();
    expect(quantity[1]).toBeInTheDocument();
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

  it('should update product value according to increase quantity', () => {
    renderConfig(<Cart products={[{ ...products[0], quantity: 1 }]} />);
    const input = screen.getAllByTestId('quantity')[0];
    const price = screen.getAllByTestId('price')[0];
    expect(price.textContent).toBe(`$ ${products[0].price}`);
    fireEvent.input(input, { target: { value: 2 } });
    expect(price.textContent).toBe(`$ ${products[0].price * 2}`);
  });

  it('should update final price according to increase quantity', () => {
    renderConfig(<Cart products={[{ ...products[0], quantity: 1 }]} />);
    const input = screen.getAllByTestId('quantity')[0];
    const price = screen.getByTestId('finalPrice');
    expect(price.textContent).toBe(` Final price: $${products[0].price + 10}`);
    fireEvent.input(input, { target: { value: 2 } });
    expect(price.textContent).toBe(
      ` Final price: $405.76`
    );
  });

  it('should apply freight to final price', () => {
    renderConfig(
      <Cart products={[{ ...products[0], quantity: 1 }]} freight={100} />
    );
    const price = screen.getByTestId('finalPrice');
    expect(price.textContent).toBe(` Final price: $${products[0].price + 100}`);
  });
});
