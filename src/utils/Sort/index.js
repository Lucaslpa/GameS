import { SortByAlphabet } from './SortByAlphabet';
import { SortByPopularity } from './SortByPopularity';
import { SortByPrice } from './SortByPrice';

export const SortMethods = {
  price: SortByPrice,
  alphabet: SortByAlphabet,
  popularity: SortByPopularity,
};
