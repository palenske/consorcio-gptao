import { onlyNumbers } from "./string";

// onlyNumbers

test("Test `onlyNumbers` function to remove letters from string", () => {
  expect(onlyNumbers("abc123")).toBe("123");
});

test("Test `onlyNumbers` function to not change string if has only numbers", () => {
  expect(onlyNumbers("123")).toBe("123");
});

test("Test `onlyNumbers` function to cast number to string if recieves number", () => {
  expect(onlyNumbers(123)).toBe("123");
});
