import { assert, assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { specialPythagoreanTriplet } from "./index.ts";

const testTable: Array<Deno.TestDefinition> = [
  {
    name: "should return a Set",
    fn(): void {
      assert(specialPythagoreanTriplet(24) instanceof Set);
    },
  },
  {
    name: "when called with 24, should return 480",
    fn(): void {
      assertEquals(specialPythagoreanTriplet(24), new Set([480]));
    },
  },
  {
    name: "when called with 120, should return 49920, 55080 and 60000 ",
    fn(): void {
      assertEquals(
        specialPythagoreanTriplet(120),
        new Set([49920, 55080, 60000])
      );
    },
  },
  {
    name: "when called with 1000, should return 31875000",
    fn(): void {
      assertEquals(specialPythagoreanTriplet(1000), new Set([31875000]));
    },
  },
];

testTable.forEach((test) => Deno.test(test));
