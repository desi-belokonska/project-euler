export function divisibleTriangleNumber(n: number): number {
  for (let num of triangularNumbers()) {
    if (numFactors(num) >= n) {
      return num;
    }
  }

  return 0;
}

function* triangularNumbers(): Generator<number> {
  let res = 0;

  for (let i = 1; ; i++) {
    yield (res += i);
  }
}

function numFactors(n: number): number {
  const factors: Set<number> = new Set();

  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      factors.add(i);
      factors.add(n / i);
    }
  }

  return factors.size;
}
