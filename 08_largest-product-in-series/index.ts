export function largestProductInASeries(n: number, series: number[]): number {
  let largestProduct = 1;

  for (let i = 0; i < series.length - n; i++) {
    const nums = series.slice(i, i + n);
    const product = nums.reduce((acc, x) => acc * x, 1);

    if (product > largestProduct) {
      largestProduct = product;
    }
  }

  return largestProduct;
}
