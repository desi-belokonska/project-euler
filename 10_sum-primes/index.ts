export function primeSummation(limit: number): number {
  const nums: Array<[number, boolean]> = Array(limit - 2)
    .fill(0)
    .map((_, i) => [i + 2, true]);
  let sum = 0;

  for (let [n, isMarked] of nums) {
    if (isMarked) {
      sum += n;

      for (let x = n; x <= limit / n; x++) {
        nums[n * x - 2] = [n * x, false];
      }
    }
  }

  return sum;
}
