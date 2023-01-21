export const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  if (!Array.isArray(nums)) throw new Error("nums should be an array");
  if (isNaN(n)) throw new Error("n should be a number");

  const INDEX = nums.indexOf(n);
  return (INDEX === nums.length - 1 || INDEX === -1) ? null : nums[INDEX + 1];
};

export const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");

  let tally = { 0: 0, 1: 0 };
  [...str].forEach(el => {
    if (el === "0") {
      tally["0"]++;
    } else if (el === "1") {
      tally["1"]++;
    }
  });
  return tally;
};

export const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  if (isNaN(n) || n === null) throw new Error("n must be a number");

  return Number([...n.toString()].reverse().join().replaceAll(',', ''));
};

export const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");

  return arrs.reduce((acc, val) => {
    if (Array.isArray(val)) {
      return acc + val.reduce((subAcc, subVal) => isNaN(subVal) ? subAcc : subAcc + subVal, 0);
    }
  }, 0);
};

export const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  if (!Array.isArray(arr)) throw new Error("arr must be an array");

  return arr.length === 1 ? arr : [arr[arr.length - 1], ...arr.slice(1, arr.length - 1), arr[0]];
};

export const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  if (haystack === null) throw new Error("haystack must not be null");
  if (typeof haystack !== 'object') throw new Error("haystack must be an object");
  if (typeof searchTerm !== 'string') throw new Error("searchTerm must be a string");

  for (let key in haystack) {
    if (haystack[key].toString().toUpperCase().includes(searchTerm.toUpperCase())) return true;
  }
  return false;
};

export const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  if (typeof str !== 'string') throw new Error("str must be a string");

  let wordFrequencies = {};
  str.split(" ").forEach(word => {
    const trimmedWord = word.toLowerCase().replace(/\W/g, '')
    if (wordFrequencies[trimmedWord] === undefined) {
      wordFrequencies[trimmedWord] = 1;
    } else {
      wordFrequencies[trimmedWord]++;
    }
  });
  return wordFrequencies;
};
