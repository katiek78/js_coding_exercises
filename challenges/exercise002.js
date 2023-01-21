export function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  if (typeof sandwich !== 'object' || sandwich === null) throw new Error("sandwich must be an object");

  return sandwich.fillings;
}

export function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  if (typeof person !== 'object' || person === null) throw new Error("person must be an object");

  return person.city === 'Manchester';
}

export function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  if (isNaN(people) || people === null) throw new Error("people must be numeric");

  return Math.ceil(people / 40);
}

export function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  if (!Array.isArray(arr)) throw new Error("arr must be an array");

  return arr.reduce((acc, val) => val === "sheep" ? ++acc : acc, 0);
}

export function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  if (typeof person !== 'object' || person === null) throw new Error("person must be an object");

  return (person.address?.postCode[0] === "M" && (!/[A-Za-z]/.test(person.address.postCode[1])));
}
