export function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  if (!Array.isArray(nums)) throw new Error("nums must be an array");
  let newArr = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != null & nums[i] < 1) newArr.push(nums[i]);
  }
  return newArr;
}

export function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  // Your code here
  if (!Array.isArray(names)) throw new Error("names must be an array");
  let newNames = [];
  for (let i = 0; i < names.length; i++) {
    if (names[i][0] === char) newNames.push(names[i]);
  }
  return newNames;
}

export function findVerbs(words) {
  if (!words) throw new Error("words is required");
  // Your code here
  if (!Array.isArray(words)) throw new Error("words must be an array");
  let verbs = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].substring(0,3) === "to ") verbs.push(words[i]);
  }
  return verbs;
}

export function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  if (!Array.isArray(nums)) throw new Error("nums must be an array");
  let integers = [];
  for (let i = 0; i < nums.length; i++) {
    if (Number.isInteger(nums[i])) integers.push(nums[i]);
  }
  return integers;
}

export function getCities(users) {
  if (!users) throw new Error("users is required");
  // Your code here
  if (!Array.isArray(users)) throw new Error("users must be an array");
  let cities = [];
  for (let i = 0; i < users.length; i++) {
    if (users[i].data && users[i].data.city && users[i].data.city.displayName) cities.push(users[i].data.city.displayName);
  }
  return cities;
}

export function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  if (!Array.isArray(nums)) throw new Error("nums must be an array");
  let squareRoots = [];
  for (let i = 0; i < nums.length; i++) {
    if (!isNaN(nums[i])) squareRoots.push(Number(Math.sqrt(nums[i]).toFixed(2)));
  }
  return squareRoots;
}

export function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
  if (!Array.isArray(sentences)) throw new Error("nums must be an array");
  if (typeof str != 'string') throw new Error("str must be a string");
  let newSentences = [];
  for (let i = 0; i < sentences.length; i++) {    
    if (typeof sentences[i] == 'string' && sentences[i].toUpperCase().includes(str.toUpperCase())) newSentences.push(sentences[i]);
  }
  return newSentences;
}

export function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
}
