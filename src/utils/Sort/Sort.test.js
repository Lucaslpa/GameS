import { SortByPopularity } from './SortByPopularity';
import { SortByPrice } from './SortByPrice';
import { SortByAlphabet } from './SortByAlphabet';

import products from '../../db/products';

describe('Sort', () => {
  it('Should sort by score', () => {
    const sortResult = SortByPopularity(products);

    expect(sortResult[0].id).toBe(31);
    expect(sortResult[8].id).toBe(74);
  });
  it('Should sort by price', () => {
    const sortResult = SortByPrice(products);

    expect(sortResult[0].id).toBe(201);
    expect(sortResult[8].id).toBe(99);
  });
  it('Should sort by alphabet', () => {
    const sortResult = SortByAlphabet(products);
    expect(sortResult[0].id).toBe(201);
    expect(sortResult[8].id).toBe(102);
  });
});
