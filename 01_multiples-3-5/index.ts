export function multiplesOf3and5(number: number) {
  const multiples: Set<number> = new Set();

  for (let i = 3; i < number; i += 3) {
    multiples.add(i);
  }
  for (let i = 5; i < number; i += 5) {
    multiples.add(i);
  }

  const sum = Array.from(multiples).reduce((acc, n) => acc + n, 0);

  return sum;
}
