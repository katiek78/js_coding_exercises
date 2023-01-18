export function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  if (!Array.isArray(nums)) throw new Error("nums must be an array");
  return nums.filter(el => el != null && el < 1);  
}

export function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  // Your code here
  if (!Array.isArray(names)) throw new Error("names must be an array");
  return names.filter(el => el[0] === char);
}

export function findVerbs(words) {
  if (!words) throw new Error("words is required");
  // Your code here
  if (!Array.isArray(words)) throw new Error("words must be an array");
  return words.filter(el => el.substring(0, 3) === "to ");
}

export function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  if (!Array.isArray(nums)) throw new Error("nums must be an array");
  let integers = [];
  nums.forEach(el => {
    if (Number.isInteger(el)) integers.push(el);
  });
  return integers;
}

export function getCities(users) {
  if (!users) throw new Error("users is required");
  // Your code here
  if (!Array.isArray(users)) throw new Error("users must be an array");
  let cities = [];
  users.forEach(el => {
    if (el.data && el.data.city && el.data.city.displayName) cities.push(el.data.city.displayName);
  });
  return cities;
}

export function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  if (!Array.isArray(nums)) throw new Error("nums must be an array");
  let squareRoots = [];
  nums.forEach(el => {
    if (!isNaN(el)) squareRoots.push(Number(Math.sqrt(el).toFixed(2)));
  });
  return squareRoots;
}

export function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
  if (!Array.isArray(sentences)) throw new Error("nums must be an array");
  if (typeof str != 'string') throw new Error("str must be a string");
  let newSentences = [];
  sentences.forEach(el => {
    if (typeof el == 'string' && el.toUpperCase().includes(str.toUpperCase())) newSentences.push(el);
  });
  return newSentences;
}

export function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
  if (!Array.isArray(triangles)) throw new Error("triangles must be an array");
  let longestSides = [];
  triangles.forEach(el => {
    if (Array.isArray(el)) longestSides.push(Math.max(...el.filter(subel => !isNaN(subel))));
  });
  return longestSides;
}
