import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { longestCollatzSequence } from "./index.ts";

const testTable: Array<Deno.TestDefinition> = [
  {
    name: "should return a number",
    fn(): void {
      assertEquals(typeof longestCollatzSequence(14), "number");
    },
  },
  {
    name: "when called with 14, should return 9",
    fn(): void {
      assertEquals(longestCollatzSequence(14), 9);
    },
  },
  {
    name: "when called with 5847, should return 3711",
    fn(): void {
      assertEquals(longestCollatzSequence(5847), 3711);
    },
  },
  {
    name: "when called with 46500, should return 35655",
    fn(): void {
      assertEquals(longestCollatzSequence(46500), 35655);
    },
  },
  {
    name: "when called with 54512, should return 52527",
    fn(): void {
      assertEquals(longestCollatzSequence(54512), 52527);
    },
  },
  {
    name: "when called with 100000, should return 77031",
    fn(): void {
      assertEquals(longestCollatzSequence(100000), 77031);
    },
  },
  {
    name: "when called with 1000000, should return 837799",
    fn(): void {
      assertEquals(longestCollatzSequence(1000000), 837799);
    },
  },
];

testTable.forEach((test) => Deno.test(test));
