export const finalPriceCalc = (Products, defaultFreight = 10) => {
  const productsPrices = Products.map((product) => product.price);
  const ProductsPricesSum = productsPrices.reduce(
    (firstPrice, secondPrice) => firstPrice + secondPrice
  );
  const priceWithFreight = ProductsPricesSum + defaultFreight;
  const FinalPriceWithFreight = Number(priceWithFreight.toFixed(2));
  const FinalPriceWithoutFreight = Number(ProductsPricesSum.toFixed(2));
  return {
    FinalPriceWithFreight,
    FinalPriceWithoutFreight,
  };
};
