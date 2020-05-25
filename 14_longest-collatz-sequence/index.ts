export function longestCollatzSequence(limit: number): number {
  const cache: Map<number, number> = new Map();
  cache.set(1, 1);
  cache.set(2, 2);

  let [num, maxSeq] = [2, 2];

  const collatz = (n: number): number => (n % 2 === 0 ? n / 2 : 3 * n + 1);

  outer: for (let i = 3; i <= limit; i++) {
    let n = i;
    let length = 0;

    while (n > 1) {
      // if n is in the cache
      const nSeq = cache.get(n);
      if (nSeq !== undefined) {
        const iSeq = length + nSeq;
        [num, maxSeq] = iSeq > maxSeq ? [i, iSeq] : [num, maxSeq];
        cache.set(i, iSeq);
        continue outer;
      }

      // if n is not in the cache
      n = collatz(n);
      length++;
    }
  }

  return num;
}
