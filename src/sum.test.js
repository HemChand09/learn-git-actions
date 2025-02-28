import { expect, test } from "vitest";
import sum from "./sum";

test("tesing sum function ", () => {
  expect(sum(10, 20)).toBe(30);
});

test("tesing sum function 1", () => {
  expect(sum(1, 10)).toBe(11);
});

test("tesing sum function 2", () => {
  const a = 10;
  const b = 20;
  const output = 30;
  expect(sum(a, b)).toBe(output);
});
