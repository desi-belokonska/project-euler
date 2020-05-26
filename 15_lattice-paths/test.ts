import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { latticePaths } from "./index.ts";

const testTable: Array<Deno.TestDefinition> = [
  {
    name: "should return a number",
    fn(): void {
      assertEquals(typeof latticePaths(4), "number");
    },
  },
  {
    name: "when called with 4, should return 70",
    fn(): void {
      assertEquals(latticePaths(4), 70);
    },
  },
  {
    name: "when called with 9, should return 48620",
    fn(): void {
      assertEquals(latticePaths(9), 48620);
    },
  },
  {
    name: "when called with 20, should return 137846528820",
    fn(): void {
      assertEquals(latticePaths(20), 137846528820);
    },
  },
];

testTable.forEach((test) => Deno.test(test));
