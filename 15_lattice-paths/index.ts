export function latticePaths(gridSize: number): number {
  return auxIter(gridSize, gridSize);
}

// Iterative soution with a cache
function auxIter(m: number, n: number): number {
  const cache: Map<string, number> = new Map();

  // base case from the recursive function
  for (let i = 1; i <= n; i++) {
    cache.set(`1, ${i}`, i + 1);
    cache.set(`${i}, 1`, i + 1);
  }

  for (let i = 2; i <= n; i++) {
    for (let j = i; j <= m; j++) {
      // we know neither of those will be undefined but TS doesn't

      const subGrid1 = cache.get(`${j - 1}, ${i}`) || 0;
      const subGrid2 = cache.get(`${j}, ${i - 1}`) || 0;

      const grid = subGrid1 + subGrid2;

      cache.set(`${j}, ${i}`, grid);
      cache.set(`${i}, ${j}`, grid);
    }
  }

  return cache.get(`${m}, ${n}`) || 0;
}

// Recursive solution which is too slow for the largest number
function auxRec(m: number, n: number): number {
  if (m === 1) {
    return n + 1;
  }

  if (n === 1) {
    return m + 1;
  }

  return auxRec(m - 1, n) + auxRec(m, n - 1);
}
