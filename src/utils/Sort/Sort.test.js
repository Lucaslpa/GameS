import { SortByPopularity } from './SortByPopularity';
import products from '../../db/products';

describe('Sort', () => {
  it('Should sort by score', () => {
    const sortResult = SortByPopularity(products);
    expect(sortResult[0].id).toBe(74);
    expect(sortResult[8].id).toBe(31);
  });
});
