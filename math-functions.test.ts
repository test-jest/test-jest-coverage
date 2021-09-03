import { sum, minus, divide } from "./math-functions";

test('adds 1 + 2 to equal 3', () => {
  expect(sum(2, 2)).toBe(4);
});

test('subtracts 1 - 2 to equal -1', () => {
  expect(minus(2, 1)).toBe(1);
});

test('divide 20/5 to equal 2', () => {
  expect(divide(20, 5)).toBe(4);
});

test('divide 10/5 to equal 2', () => {
  expect(divide(10, 5)).toBe(2);
});
