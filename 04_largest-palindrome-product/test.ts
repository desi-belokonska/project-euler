import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { largestPalindromeProduct } from "./index.ts";

const testTable: Array<Deno.TestDefinition> = [
  {
    name: "should return a number",
    fn(): void {
      assertEquals(typeof largestPalindromeProduct(2), "number");
    },
  },
  {
    name: "when called with 2, should return 9009",
    fn(): void {
      assertEquals(largestPalindromeProduct(2), 9009);
    },
  },
  {
    name: "when called with 3, should return 906609",
    fn(): void {
      assertEquals(largestPalindromeProduct(3), 906609);
    },
  },
  {
    name: "when called with 4, should return 99000099",
    fn(): void {
      assertEquals(largestPalindromeProduct(4), 99000099);
    },
  },
];
testTable.forEach((test) => Deno.test(test));
