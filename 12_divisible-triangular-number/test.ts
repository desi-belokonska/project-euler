import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { divisibleTriangleNumber } from "./index.ts";

const testTable: Array<Deno.TestDefinition> = [
  {
    name: "should return a number",
    fn(): void {
      assertEquals(typeof divisibleTriangleNumber(5), "number");
    },
  },
  {
    name: "when called with 5, should return 28",
    fn(): void {
      assertEquals(divisibleTriangleNumber(5), 28);
    },
  },
  {
    name: "when called with 23, should return 630",
    fn(): void {
      assertEquals(divisibleTriangleNumber(23), 630);
    },
  },
  {
    name: "when called with 167, should return 1385280",
    fn(): void {
      assertEquals(divisibleTriangleNumber(167), 1385280);
    },
  },
  {
    name: "when called with 374, should return 17907120",
    fn(): void {
      assertEquals(divisibleTriangleNumber(374), 17907120);
    },
  },
  {
    name: "when called with 500, should return 76576500",
    fn(): void {
      assertEquals(divisibleTriangleNumber(500), 76576500);
    },
  },
];

testTable.forEach((test) => Deno.test(test));
