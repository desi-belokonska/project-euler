export function nthPrime(n: number): number {
  const primes: Array<number> = [];
  let i = 2;

  while (true) {
    const isPrime = !primes.some((x) => i % x === 0 || i === 2);

    if (isPrime) {
      primes.push(i);
    }
    if (primes.length === n) {
      return i;
    }

    i += 1;
  }
}
