import { extractDelimiter, isValidInput, parseNumbers } from "./utils";

describe("extractDelimiter()", () => {
  test("should return comma as delimeter for empty values", () => {
    const expected = ",";
    const result = extractDelimiter();

    expect(result).toStrictEqual(expected);
  });

  test("should return comma as delimeter for appropriate values", () => {
    const expected = ",";
    const result = extractDelimiter("1,2,4......5");

    expect(result).toStrictEqual(expected);
  });

  test("should return comma as delimeter for inappropriate values", () => {
    const expected = ",";
    const result = extractDelimiter("//;23");

    expect(result).toStrictEqual(expected);
  });

  test("should return delimeter for appropriate values", () => {
    const expected = ";";
    const result = extractDelimiter("//;\n1,2,4......5");

    expect(result).toStrictEqual(expected);
  });
});

describe("isValidInput()", () => {
  test("should return false for negative numbers", () => {
    const expected = false;
    const result = isValidInput([1, 2, -5, 10]);

    expect(result).toStrictEqual(expected);
  });

  test("should return true for positive numbers", () => {
    const expected = true;
    const result = isValidInput([1, 2, 0.5, 10]);

    expect(result).toStrictEqual(expected);
  });
});

describe("parseNumbers()", () => {
  test("should return empty array for invalid input", () => {
    const expected = [];
    const result = parseNumbers();

    expect(result).toStrictEqual(expected);
  });

  test("should return empty array for no numbers with custom delimeter", () => {
    const expected = [];
    const result = parseNumbers("//;\n");

    expect(result).toStrictEqual(expected);
  });

  test("should return array for numbers with custom delimeter", () => {
    const expected = [1, 20, 3];
    const result = parseNumbers("//*\n1*20,*3");

    expect(result).toStrictEqual(expected);
  });

  test("should return array for numbers without delimeter", () => {
    const expected = [1];
    const result = parseNumbers("1 2 3 4");

    expect(result).toStrictEqual(expected);
  });
});
