import { screen } from '@testing-library/react';
import { Sort } from '.';
import { renderConfig } from '../../utils/RenderConfig';

describe('Menu', () => {
  it('should render sort by', () => {
    renderConfig(<Sort />);

    expect(screen.getByTestId(/Sort/gi)).toBeInTheDocument();
  });
  it('should render select', () => {
    renderConfig(<Sort />);

    expect(screen.getByTestId(/select/gi)).toBeInTheDocument();
  });
});
