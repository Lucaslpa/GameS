export const SortByAlphabet = (products) => {
  const sort = products.sort((a, b) => {
    if (a.name === b.name) return 0;
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return null;
  });

  return sort;
};
