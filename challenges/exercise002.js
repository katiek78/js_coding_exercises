export function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  // Your code here!
  if (sandwich == null) throw new Error("sandwich must not be null");
  if (typeof sandwich != 'object') throw new Error("sandwich must be an object");
  return sandwich.fillings;
}

export function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
  if (person == null) throw new Error("person must not be null");
  if (typeof person != 'object') throw new Error("person must be an object");
  return (person.city === 'Manchester');
}

export function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
  if (isNaN(people)) throw new Error("people must be numeric");
  return (Math.ceil(people/40));
}

export function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
  if (!Array.isArray(arr)) throw new Error("arr must be an array");
  return arr.reduce((acc,val) => val === "sheep" ? ++acc : acc,0);
}

export function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
  if (person == null) throw new Error("person must not be null");
  if (typeof person != 'object') throw new Error("person must be an object");
  if (!person.address || !person.address.postCode) return false;
  return (person.address.postCode[0] === "M" && (!/[A-Za-z]/.test(person.address.postCode[1])));
}
