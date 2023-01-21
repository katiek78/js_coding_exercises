// Spread Syntax Bonus activity

export function printColours(colours) {
  if (!colours) throw new Error("colour is required");
  // Your solution using the spread operator here!
  if (!Array.isArray(colours)) throw new Error("colours must be an array");
  return [...colours];
}

export function shoppingList(list, newItem) {
  if (!list) throw new Error("list is required");
  if (!newItem) throw new Error("newItem is required");
  // Your solution using the spread operator here!
  if (!Array.isArray(list)) throw new Error("list must be an array");
  if (!Array.isArray(newItem)) throw new Error("newItem must be an array");
  return [...list, ...newItem];
}

export function highestNumber(numbers) {
  if (!numbers) throw new Error("numbers are required");
  // Your solution using the spread operator here!
  if (!Array.isArray(numbers)) throw new Error("numbers must be an array");
  return Math.max(...numbers);
}

export function splitThatString(string) {
  if (!string) throw new Error("string is required");
  // Your solution using the spread operator here!
  if (typeof string !== 'string') throw new Error("string must be a string");
  return [...string];
}

// Optional Chaining Bonus activity!

export function addressLookUp(user) {
  if (!user) throw new Error("user is required");
  // Your solution using optional chaining here!
  if (typeof user !== 'object' || user === null) throw new Error("user must be an object");
  return user?.address?.postcode;
}
