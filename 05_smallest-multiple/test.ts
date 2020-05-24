import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { smallestMult } from "./index.ts";

const testTable: Array<Deno.TestDefinition> = [
  {
    name: "should return a number",
    fn(): void {
      assertEquals(typeof smallestMult(5), "number");
    },
  },
  {
    name: "when called with 5, should return 60",
    fn(): void {
      assertEquals(smallestMult(5), 60);
    },
  },
  {
    name: "when called with 7, should return 420",
    fn(): void {
      assertEquals(smallestMult(7), 420);
    },
  },
  {
    name: "when called with 10, should return 2520",
    fn(): void {
      assertEquals(smallestMult(10), 2520);
    },
  },
  {
    name: "when called with 13, should return 360360",
    fn(): void {
      assertEquals(smallestMult(13), 360360);
    },
  },
  {
    name: "when called with 20, should return 232792560",
    fn(): void {
      assertEquals(smallestMult(20), 232792560);
    },
  },
];

testTable.forEach((test) => Deno.test(test));
