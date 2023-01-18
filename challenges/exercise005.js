export const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  // Your code here!
  if (!Array.isArray(nums)) throw new Error("nums should be an array");
  if (isNaN(n)) throw new Error("n should be a number");
  const idx = nums.indexOf(n);
  return (idx === nums.length - 1 || idx === -1) ? null : nums[idx + 1];
};

export const count1sand0s = (str) => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
  let newObj = { 0: 0, 1: 0 };
  [...str].forEach(el => {
    if (el === "0") {
      newObj["0"]++;
    } else if (el === "1") {
      newObj["1"]++;
    }
  });
  return newObj;
};

export const reverseNumber = (n) => {
  if (n === undefined) throw new Error("n is required");
  // Your code here!
  if (isNaN(n)) throw new Error("n must be a number");
  return Number([...n.toString()].reverse().join().replaceAll(',', ''));
};

export const sumArrays = (arrs) => {
  if (arrs === undefined) throw new Error("arrs is required");
  // Your code here!
};

export const arrShift = (arr) => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
};

export const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
};

export const getWordFrequencies = (str) => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
};
