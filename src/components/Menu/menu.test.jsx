import { screen } from '@testing-library/react';
import { Menu } from '.';
import { renderConfig } from '../../utils/RenderConfig';

describe('Menu', () => {
  it('should render logo', () => {
    renderConfig(<Menu CartQuantity={1} FavoritesQuantity={3} />);
    expect(screen.getByLabelText(/Site logo/i)).toBeInTheDocument();
  });

  it('should render search', () => {
    renderConfig(<Menu CartQuantity={1} FavoritesQuantity={3} />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getAllByRole('link')[0]).toBeInTheDocument();
    expect(screen.getAllByRole('link')[1]).toBeInTheDocument();
  });

  it('should render navigator', () => {
    renderConfig(<Menu CartQuantity={1} FavoritesQuantity={3} />);

    expect(screen.getByAltText(/cart/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/favorites/i)).toBeInTheDocument();
  });
});
