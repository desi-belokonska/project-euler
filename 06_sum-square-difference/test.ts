import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { sumSquareDifference } from "./index.ts";

const testTable: Array<Deno.TestDefinition> = [
  {
    name: "should return a number",
    fn(): void {
      assertEquals(typeof sumSquareDifference(10), "number");
    },
  },
  {
    name: "when called with 10, should return 2640",
    fn(): void {
      assertEquals(sumSquareDifference(10), 2640);
    },
  },
  {
    name: "when called with 20, should return 41230",
    fn(): void {
      assertEquals(sumSquareDifference(20), 41230);
    },
  },
  {
    name: "when called with 100, should return 25164150",
    fn(): void {
      assertEquals(sumSquareDifference(100), 25164150);
    },
  },
];

testTable.forEach((test) => Deno.test(test));
