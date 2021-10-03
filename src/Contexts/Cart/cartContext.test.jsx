import { render, screen } from '@testing-library/react';
import { CartContextProvider, useCartContext } from '.';
import { buildActions } from './buildActions';

const Stub = () => {
  const [context, dispatch] = useCartContext();
  const CartContext = buildActions(dispatch);
  return (
    <div>
      <span data-testid="cartLength">{context.cart.length}</span>
      <button
        type="button"
        aria-label="Add into context"
        onClick={() => {
          CartContext.SET_CART([1]);
        }}
      />
    </div>
  );
};

describe('CartConext', () => {
  it('Should set products into cart context', async () => {
    render(
      <CartContextProvider>
        <Stub />
      </CartContextProvider>
    );

    const value = (await screen.findByTestId('cartLength')).textContent;
    const button = await screen.findByLabelText('Add into context');
    expect(value).toBe('0');
    button.click();
    const newValue = (await screen.findByTestId('cartLength')).textContent;
    expect(newValue).toBe('1');
  });
});
