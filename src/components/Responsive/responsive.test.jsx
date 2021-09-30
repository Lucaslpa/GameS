import { render, screen } from '@testing-library/react';
import { Responsive } from '.';

describe('Responsive', () => {
  it('Should render web', () => {
    render(<Responsive screen="web" />);
    expect(screen.getByTestId('web'));
  });
  it('Should render mobile', () => {
    render(<Responsive screen="mobile" />);
    expect(screen.getByTestId('mobile'));
  });
});
