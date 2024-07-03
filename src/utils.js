export const extractDelimiter = (numbers) => {
  const delimiter = numbers?.match(/\/\/(.*)\n/);
  if (delimiter?.length) {
    return delimiter[1];
  }
  return ",";
};

export const parseNumbers = (numbers) => {
  if (!numbers) {
    return [];
  }

  let delimiter = ",";
  if (numbers.startsWith("//")) {
    delimiter = extractDelimiter(numbers);
    numbers = numbers.substring(numbers.indexOf("\n") + 1) || "";
  }
  const numsArray = numbers.replace(/\n/g, delimiter).split(delimiter);

  const nums = numsArray.map((numStr) => parseInt(numStr)).filter((num) => num);

  return nums;
};

export const isValidInput = (nums) => !nums?.some((num) => num < 0);
