import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { largestPrimeFactor } from "./index.ts";

const testTable: Array<Deno.TestDefinition> = [
  {
    name: "should return a number",
    fn(): void {
      assertEquals(typeof largestPrimeFactor(2), "number");
    },
  },
  {
    name: "when called with 2, should return 2",
    fn(): void {
      assertEquals(largestPrimeFactor(2), 2);
    },
  },
  {
    name: "when called with 5, should return 5",
    fn(): void {
      assertEquals(largestPrimeFactor(5), 5);
    },
  },
  {
    name: "when called with 7, should return 7",
    fn(): void {
      assertEquals(largestPrimeFactor(7), 7);
    },
  },
  {
    name: "when called with 8, should return 2",
    fn(): void {
      assertEquals(largestPrimeFactor(8), 2);
    },
  },
  {
    name: "when called with 13195, should return 29",
    fn(): void {
      assertEquals(largestPrimeFactor(13195), 29);
    },
  },
  {
    name: "when called with 600851475143, should return 6857",
    fn(): void {
      assertEquals(largestPrimeFactor(600851475143), 6857);
    },
  },
];

testTable.forEach((test) => Deno.test(test));
