import { SearchProducts } from './index';
import products from '../../db/products';

describe('Search', () => {
  it('should return searched item', () => {
    const searchedProducts = SearchProducts('call', products);
    expect(searchedProducts[0].id).toBe(201);
    expect(searchedProducts[1].id).toBe(99);
  });
});
