import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { powerDigitSum } from "./index.ts";

const testTable: Array<Deno.TestDefinition> = [
  {
    name: "should return a number",
    fn(): void {
      assertEquals(typeof powerDigitSum(15), "number");
    },
  },
  {
    name: "when called with 15, should return 26",
    fn(): void {
      assertEquals(powerDigitSum(15), 26);
    },
  },
  {
    name: "when called with 1000, should return 1366",
    fn(): void {
      assertEquals(powerDigitSum(1000), 1366);
    },
  },
];

testTable.forEach((test) => Deno.test(test));
