import {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix,
    areWeCovered
} from "../challenges/exercise006";

describe("sumMultiples", () => {
    test("returns the sum of all multiples of 3 and 5 in the array", () => {
        expect(sumMultiples([5, 3, 7, 8, 1, 10])).toBe(18);
        expect(sumMultiples([2, 4, 8])).toBe(0);
        expect(sumMultiples([4, 22, 654, 123, 65, 23, 40, 1])).toBe(882);
    });
});

describe("isValidDNA", () => {
    test("returns true if the string has only C, T, G and A", () => {
        expect(isValidDNA("CGTGAGGCGATT")).toBeTruthy();
    });
    test("returns false if the string has letters other than C, T, G and A", () => {
        expect(isValidDNA("CGTSKJDHFCGATT")).toBeFalsy();
    });
    test("returns false if the string contains any non-letters", () => {
        expect(isValidDNA("CGTS333FCGATT")).toBeFalsy();
    });
});

describe("getComplementaryDNA", () => {
    test("returns a complementary DNA string", () => {
        expect(getComplementaryDNA("CGTAGAGGTCCA")).toBe("GCATCTCCAGGT");
    });
});

describe("isItPrime", () => {
    test("returns true if the number is prime", () => {
        expect(isItPrime(2)).toBeTruthy();
        expect(isItPrime(173)).toBeTruthy();
    });
    test("returns false if the number is not prime", () => {
        expect(isItPrime(4)).toBeFalsy();
        expect(isItPrime(253)).toBeFalsy();
    });
    test("returns false if the number is not an integer", () => {
        expect(isItPrime(3.5)).toBeFalsy();
    });
});

describe("createMatrix", () => {
    test("returns an array of n arrays containing the filler element n times", () => {
        expect(createMatrix(2, "Jota")).toStrictEqual([["Jota", "Jota"], ["Jota", "Jota"]]);
        expect(createMatrix(4, "Thiago")).toStrictEqual([["Thiago", "Thiago", "Thiago", "Thiago"],
        ["Thiago", "Thiago", "Thiago", "Thiago"], ["Thiago", "Thiago", "Thiago", "Thiago"],
        ["Thiago", "Thiago", "Thiago", "Thiago"]]);
    });
    test("returns an empty array if n is 0", () => {
        expect(createMatrix(0, "Diaz")).toStrictEqual([]);
    });
});

describe("areWeCovered", () => {
    test("returns true if at least 3 members of staff are working that day", () => {
        expect(areWeCovered([{ name: "Jordan", rota: ["Monday", "Tuesday", "Wednesday"] },
        { name: "Darwin", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
        { name: "Virgil", rota: ["Wednesday"] }], "Wednesday")).toBeTruthy();
        expect(areWeCovered([{ name: "Jordan", rota: ["Monday", "Tuesday", "Wednesday"] },
        { name: "Darwin", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
        { name: "Virgil", rota: ["Wednesday"] },
        { name: "Cody", rota: ["Wednesday", "Thursday"] }], "Wednesday")).toBeTruthy();
    });
    test("returns false if 2 or fewer members of staff are working that day", () => {
        expect(areWeCovered([{ name: "Jordan", rota: ["Monday", "Tuesday", "Wednesday"] },
        { name: "Darwin", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
        { name: "Virgil", rota: ["Wednesday"] }], "Friday")).toBeFalsy();
        expect(areWeCovered([{ name: "Jordan", rota: ["Monday", "Tuesday", "Wednesday"] },
        { name: "Darwin", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
        { name: "Virgil", rota: ["Wednesday"] }], "Saturday")).toBeFalsy();
        expect(areWeCovered([{ name: "Jordan", rota: ["Monday", "Tuesday", "Wednesday"] },
        { name: "Darwin", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
        { name: "Virgil", rota: ["Wednesday"] }], "Tuesday")).toBeFalsy();
    });
    test("returns false if array is empty", () => {
        expect(areWeCovered([], "Wednesday")).toBeFalsy();
    });
});