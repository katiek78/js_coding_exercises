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
  return nums.filter(el => Number.isInteger(el));
}

export function getCities(users) {
  if (!users) throw new Error("users is required");
  if (!Array.isArray(users)) throw new Error("users must be an array");

  return users.map(el => el.data?.city?.displayName);
}

export function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  if (!Array.isArray(nums)) throw new Error("nums must be an array");

  return nums.map(el => {
    if (!isNaN(el)) return Number(Math.sqrt(el).toFixed(2));
  });
}

export function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  if (!Array.isArray(sentences)) throw new Error("nums must be an array");
  if (typeof str != 'string') throw new Error("str must be a string");

  return sentences.filter(el => typeof el == 'string' && el.toUpperCase().includes(str.toUpperCase()));
}

export function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  if (!Array.isArray(triangles)) throw new Error("triangles must be an array");

  return triangles.map(el => {
    if (Array.isArray(el)) return Math.max(...el.filter(subel => !isNaN(subel)));
  });
}
