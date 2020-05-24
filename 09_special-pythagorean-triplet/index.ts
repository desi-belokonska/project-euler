export function specialPythagoreanTriplet(sum: number): Set<number> {
  // Based on Euclid's formula for genrating pythagorean triplets
  // m > n > 0
  // k is a factor of sum and so is m because
  // 2km(m+n) = sum
  const products: Set<number> = new Set();

  // if sum is odd there are no triplets
  if (sum % 2 === 1) {
    return products;
  }

  const factors = getFactors(sum);

  for (let m of factors) {
    for (let k of factors) {
      const n = sum / (2 * k * m) - m;

      if (n % 1 === 0 && m > n && n > 0) {
        const a = (m ** 2 - n ** 2) * k;
        const b = 2 * m * n * k;
        const c = (m ** 2 + n ** 2) * k;
        products.add(a * b * c);
      }
    }
  }
  return products;
}

function getFactors(n: number): Array<number> {
  const factors = [];

  for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) {
      factors.push(i);
    }
  }

  return factors;
}
