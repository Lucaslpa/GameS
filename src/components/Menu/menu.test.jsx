import { screen } from '@testing-library/react';
import { Menu } from '.';
import { renderConfig } from '../../utils/RenderConfig';

describe('Menu', () => {
  it('should render logo', () => {
    renderConfig(<Menu />);
    expect(screen.getByLabelText(/Site logo/i)).toBeInTheDocument();
  });

  it('should render search', () => {
    renderConfig(<Menu />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should render navigator', () => {
    renderConfig(<Menu />);

    expect(screen.getByAltText(/cart/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/favorites/i)).toBeInTheDocument();
  });
});
