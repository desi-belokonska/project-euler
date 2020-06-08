export function maxPathSum(arr: number[][]): number {
  const sum: number[][] = [];

  for (let j = 0; j < arr.length; j++) {
    const row = arr[j];
    sum[j] = Array(row.length).fill(0);

    for (let i = 0; i < row.length; i++) {
      const n = arr[j][i];
      sum[j][i] = n;

      if (j > 0) {
        const l = sum[j - 1][i - 1] || 0;
        const r = sum[j - 1][i] || 0;
        sum[j][i] = l > r ? n + l : n + r;
      }
    }
  }

  return sum[sum.length - 1].reduce((acc, cur) => (cur > acc ? cur : acc), 0);
}
