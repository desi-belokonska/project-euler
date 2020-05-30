import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { numberLetterCounts } from "./index.ts";

const testTable: Array<Deno.TestDefinition> = [
  {
    name: "should return a number",
    fn(): void {
      assertEquals(typeof numberLetterCounts(5), "number");
    },
  },
  {
    name: "when called with 5, should return 19",
    fn(): void {
      assertEquals(numberLetterCounts(5), 19);
    },
  },
  {
    name: "when called with 150, should return 1903",
    fn(): void {
      assertEquals(numberLetterCounts(150), 1903);
    },
  },
  {
    name: "when called with 1000, should return 21124",
    fn(): void {
      assertEquals(numberLetterCounts(1000), 21124);
    },
  },
];

testTable.forEach((test) => Deno.test(test));
