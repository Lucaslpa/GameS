import { render, screen } from '@testing-library/react';
import { FavoritesContextProvider, useFavoritesContext } from '.';
import { buildActions } from './buildActions';

const Stub = () => {
  const [context, dispatch] = useFavoritesContext();
  const Context = buildActions(dispatch);
  return (
    <div>
      <span data-testid="cartLength">{context.favorites.length}</span>
      <button
        type="button"
        aria-label="Add into context"
        onClick={() => {
          Context.SET_FAVORITES([1]);
        }}
      />
    </div>
  );
};

describe('FavoritesConext', () => {
  it('Should set favorites products into favorites context', async () => {
    render(
      <FavoritesContextProvider>
        <Stub />
      </FavoritesContextProvider>
    );

    const value = (await screen.findByTestId('cartLength')).textContent;
    const button = await screen.findByLabelText('Add into context');
    expect(value).toBe('0');
    button.click();
    const newValue = (await screen.findByTestId('cartLength')).textContent;
    expect(newValue).toBe('1');
  });
});
