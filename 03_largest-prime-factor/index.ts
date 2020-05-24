export function largestPrimeFactor(num: number): number {
  const factors: Array<number> = [];
  for (let i = 2; i <= num; i++) {
    if (num % i === 0) {
      factors.push(i);
    }
    while (num % i === 0) {
      num /= i;
    }
  }

  return factors[factors.length - 1];
}
