import {
    sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
    findWinner
} from "../challenges/exercise007";

describe("sumDigits", () => {
    test("returns the sum of the digits of n where n is an integer", () => {
        expect(sumDigits(31)).toBe(4);
        expect(sumDigits(483)).toBe(15);             
    });
    test("returns the sum of the digits of n where n is not an integer", () => {
        expect(sumDigits(3.5)).toBe(8);     
    });
    test("throws an error if n is not provided", () => {
        expect(() => {
            sumDigits();
        }).toThrow('n is required');
    })
    test("throws an error if n is not a number", () => {
        expect(() => {
            sumDigits("foo");
        }).toThrow('n must be a number');
        expect(() => {
            sumDigits([3]);
        }).toThrow('n must be a number');
    })
});