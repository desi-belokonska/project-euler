import { unimplemented } from "https://deno.land/std/testing/asserts.ts";

export function fiboEvenSum(n: number): number {
  let [i, j] = [1, 2];
  let sum = 0;

  while (i < n) {
    if (i % 2 === 0) {
      sum += i;
    }
    [i, j] = [j, i + j];
  }

  return sum;
}
