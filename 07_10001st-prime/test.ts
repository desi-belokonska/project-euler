import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { nthPrime } from "./index.ts";

const testTable: Array<Deno.TestDefinition> = [
  {
    name: "should return a number",
    fn(): void {
      assertEquals(typeof nthPrime(6), "number");
    },
  },
  {
    name: "when called with 1, should return 2",
    fn(): void {
      assertEquals(nthPrime(1), 2);
    },
  },
  {
    name: "when called with 6, should return 13",
    fn(): void {
      assertEquals(nthPrime(6), 13);
    },
  },
  {
    name: "when called with 10, should return 29",
    fn(): void {
      assertEquals(nthPrime(10), 29);
    },
  },
  {
    name: "when called with 100, should return 541",
    fn(): void {
      assertEquals(nthPrime(100), 541);
    },
  },
  {
    name: "when called with 10001, should return 104743",
    fn(): void {
      assertEquals(nthPrime(10001), 104743);
    },
  },
];

testTable.forEach((test) => Deno.test(test));
