import { finalPriceCalc } from '.';

describe('FinalPriceCalc', () => {
  it('Should return sum prices with and without freight', () => {
    const sum = finalPriceCalc([{ price: 10 }, { price: 10 }], 10);
    expect(sum.FinalPriceWithFreight).toBe(30);
    expect(sum.FinalPriceWithoutFreight).toBe(20);
  });
});
