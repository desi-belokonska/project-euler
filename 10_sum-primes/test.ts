import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { primeSummation } from "./index.ts";

const testTable: Array<Deno.TestDefinition> = [
  {
    name: "should return a number",
    fn(): void {
      assertEquals(typeof primeSummation(17), "number");
    },
  },
  {
    name: "when called with 17, should return 41",
    fn(): void {
      assertEquals(primeSummation(17), 41);
    },
  },
  {
    name: "when called with 2001, should return 277050",
    fn(): void {
      assertEquals(primeSummation(2001), 277050);
    },
  },
  {
    name: "when called with 140759, should return 873608362",
    fn(): void {
      assertEquals(primeSummation(140759), 873608362);
    },
  },
  {
    name: "when called with 2000000, should return 142913828922",
    fn(): void {
      assertEquals(primeSummation(2000000), 142913828922);
    },
  },
];

testTable.forEach((test) => Deno.test(test));
