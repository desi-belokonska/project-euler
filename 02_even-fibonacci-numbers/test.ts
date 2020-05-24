import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { fiboEvenSum } from "./index.ts";

const testTable: Array<Deno.TestDefinition> = [
  {
    name: "should return a number",
    fn(): void {
      assertEquals(typeof fiboEvenSum(10), "number");
    },
  },
  {
    name: "when called with 10, should return 10",
    fn(): void {
      assertEquals(fiboEvenSum(10), 10);
    },
  },
  {
    name: "when called with 60, should return 44",
    fn(): void {
      assertEquals(fiboEvenSum(60), 44);
    },
  },
  {
    name: "when called with 1000, should return 798",
    fn(): void {
      assertEquals(fiboEvenSum(1000), 798);
    },
  },
  {
    name: "when called with 100000, should return 60696",
    fn(): void {
      assertEquals(fiboEvenSum(100000), 60696);
    },
  },
  {
    name: "when called with 4000000, should return 4613732",
    fn(): void {
      assertEquals(fiboEvenSum(4000000), 4613732);
    },
  },
];

testTable.forEach((test) => Deno.test(test));
