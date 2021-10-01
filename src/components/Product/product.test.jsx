import { screen } from '@testing-library/react';
import { renderConfig } from '../../utils/RenderConfig';
import { Product } from '.';
import products from '../../db/products';

describe('Product', () => {
  it('Should render IMG', () => {
    renderConfig(<Product product={products[0]} />);

    expect(screen.getByAltText(/product/i)).toBeInTheDocument();
  });
  it('Should render Name and Price', () => {
    renderConfig(<Product product={products[0]} />);
    const names = screen.getAllByText(products[0].name);
    const prices = screen.getAllByText(`$ ${products[0].price}`);

    expect(names[0]).toBeInTheDocument();
    expect(names[1]).toBeInTheDocument();

    expect(prices[0]).toBeInTheDocument();
    expect(prices[1]).toBeInTheDocument();
  });

  it('Should render button and link', () => {
    renderConfig(<Product product={products[0]} />);

    expect(screen.getByTestId('button')).toBeInTheDocument();
    expect(screen.getByTestId('link')).toBeInTheDocument();
  });
});
