export function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  if (!Array.isArray(nums)) throw new Error("nums must be an array");
  if (!nums.length) return [];

  return nums.map(el => el * el);
}

export function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  if (!Array.isArray(words)) throw new Error("words must be an array");

  return words.map((word, idx) => idx === 0 ? word : word[0].toUpperCase() + word.slice(1)).join("");
}

export function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  if (!Array.isArray(people)) throw new Error("people must be an array");

  return people.reduce((acc, val) => val.subjects ? acc + val.subjects.length : acc, 0);
}

export function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  if (!Array.isArray(menu)) throw new Error("menu must be an array");

  for (let i = 0; i < menu.length; i++) {
    if (menu[i].ingredients?.indexOf(ingredient) > -1) return true;
  }
  return false;
}

export function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  if (!Array.isArray(arr1)) throw new Error("arr1 must be an array");
  if (!Array.isArray(arr2)) throw new Error("arr2 must be an array");

  // convert arr1 to a set to remove duplicates, filter for those that also appear in arr2, convert back to an array, then sort
  return Array.from(new Set(arr1.filter(element => arr2.indexOf(element) > -1))).sort((a, b) => a - b);
}
