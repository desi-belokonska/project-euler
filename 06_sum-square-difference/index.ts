export function sumSquareDifference(n: number): number {
  const sumOfSquares = Array(n)
    .fill(0)
    .reduce((acc, _, i) => acc + (i + 1) ** 2, 0);
  const squareOfSum =
    Array(n)
      .fill(0)
      .reduce((acc, _, i) => acc + (i + 1), 0) ** 2;
  return squareOfSum - sumOfSquares;
}
