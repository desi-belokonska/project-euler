export function smallestMult(n: number): number {
  let mult = 1;
  const factors: Array<number> = [];

  for (let i = 2; i <= n; i++) {
    if (mult % i != 0) {
      const factor = factors.reduce(
        (acc, x) => (acc % x === 0 ? acc / x : acc),
        i
      );
      factors.push(factor);
      mult *= factor;
    }
  }

  return mult;
}
