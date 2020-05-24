import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { multiplesOf3and5 } from "./index.ts";

const testTable = [
  {
    name: "should return a number",
    fn(): void {
      assertEquals(typeof multiplesOf3and5(10), "number");
    },
  },
  {
    name: "when called with 49, should return 543",
    fn(): void {
      assertEquals(multiplesOf3and5(49), 543);
    },
  },
  {
    name: "when called with 1000, should return 233168",
    fn(): void {
      assertEquals(multiplesOf3and5(1000), 233168);
    },
  },
  {
    name: "when called with 8456, should return 16687353",
    fn(): void {
      assertEquals(multiplesOf3and5(8456), 16687353);
    },
  },
  {
    name: "when called with 19564, should return 89301183",
    fn(): void {
      assertEquals(multiplesOf3and5(19564), 89301183);
    },
  },
];

testTable.forEach((test) => Deno.test(test));
