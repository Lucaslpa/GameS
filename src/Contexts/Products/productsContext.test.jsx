import { render, screen } from '@testing-library/react';
import { ProductsContextProvider, useProductsContext } from '.';
import { buildActions } from './buildActions';

const Stub = () => {
  const [context, dispatch] = useProductsContext();
  const Context = buildActions(dispatch);
  return (
    <div>
      <span data-testid="cartLength">{context.products.length}</span>
      <button
        type="button"
        aria-label="Add into context"
        onClick={() => {
          Context.SET_PRODUCTS([1]);
        }}
      />
    </div>
  );
};

describe('FavoritesConext', () => {
  it('Should set products into products context', async () => {
    render(
      <ProductsContextProvider>
        <Stub />
      </ProductsContextProvider>
    );

    const value = (await screen.findByTestId('cartLength')).textContent;
    const button = await screen.findByLabelText('Add into context');
    expect(value).toBe('0');
    button.click();
    const newValue = (await screen.findByTestId('cartLength')).textContent;
    expect(newValue).toBe('1');
  });
});
