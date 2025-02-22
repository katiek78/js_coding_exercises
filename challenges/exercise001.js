export function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  if (typeof word !== 'string') throw new Error("word must be a string");

  return word[0].toUpperCase() + word.slice(1);
}

export function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  if (typeof firstName !== 'string') throw new Error("firstName must be a string");
  if (typeof lastName !== 'string') throw new Error("lastName must be a string");

  return firstName[0] + "." + lastName[0];
}

export function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  if (isNaN(originalPrice) || originalPrice === null) throw new Error("originalPrice must be numeric");
  if (isNaN(vatRate) || vatRate === null) throw new Error("vatRate must be numeric");

  return Number((originalPrice + vatRate / 100 * originalPrice).toFixed(2));
}

export function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  if (isNaN(originalPrice) || originalPrice === null) throw new Error("originalPrice must be numeric");
  if (isNaN(reduction) || reduction === null) throw new Error("reduction must be numeric");

  return Number((originalPrice - reduction / 100 * originalPrice).toFixed(2));
}

export function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  if (typeof str !== 'string') throw new Error("str must be a string");

  return (str.length % 2 === 0 ? str[str.length / 2 - 1] + str[str.length / 2] : str[Math.floor(str.length / 2)]);
}

export function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  if (typeof word !== 'string') throw new Error("word must be a string");

  let reversedWord = "";
  for (let i = word.length - 1; i >= 0; i--) reversedWord += word[i];
  return reversedWord;
}

export function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  if (!Array.isArray(words)) throw new Error("words must be an array");

  return words.map(word => reverseWord(word));
}

export function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  if (!Array.isArray(users)) throw new Error("users must be an array");

  return users.reduce((acc, val) => val.type === 'Linux' ? ++acc : acc, 0);
}

export function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  if (!Array.isArray(scores)) throw new Error("scores must be an array");

  return Number((scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(2));
}

export function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  if (isNaN(n) || n === null) throw new Error("n must be numeric");

  if (n === 0) return 0;
  if (n % 3 === 0 && n % 5 === 0) {
    return "fizzbuzz";
  } else if (n % 3 === 0) {
    return "fizz";
  } else if (n % 5 === 0) {
    return "buzz";
  } else return n;
}
