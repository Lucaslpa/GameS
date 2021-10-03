export const SearchProducts = (search, Products) => {
  const products = Products.filter((product) => {
    const searchValue = product.name.search(new RegExp(`${search}`, 'ig'));
    if (searchValue !== -1) return product;
    return null;
  });
  return products;
};
