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
    const names = screen.getByText(products[0].name);
    const prices = screen.getByText(`$ ${products[0].price}`);

    expect(names).toBeInTheDocument();

    expect(prices).toBeInTheDocument();
  });

  it('Should render button and link', () => {
    renderConfig(<Product product={products[0]} />);

    expect(screen.getByTestId('button')).toBeInTheDocument();
    expect(screen.getByTestId('link')).toBeInTheDocument();
  });
});
