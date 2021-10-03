export const SortByPopularity = (products) => {
  const sort = products.sort((a, b) => {
    if (a.score === b.score) return 0;
    if (a.score > b.score) return -1;
    if (a.score < b.score) return 1;
    return null;
  });

  return sort;
};
