import { sum, minus, divide } from "./math-functions";

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('subtracts 1 - 2 to equal -1', () => {
  expect(minus(1, 2)).toBe(-1);
});
