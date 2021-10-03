export const SortByPrice = (products) => {
  const sort = products.sort((a, b) => {
    if (a.price === b.price) return 0;
    if (a.price < b.price) return -1;
    if (a.price > b.price) return 1;
    return null;
  });

  return sort;
};
