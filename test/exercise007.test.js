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

describe("createRange", () => {
    test("returns an array of digits with start as the start, end as the end, and step as the increment", () => {
        expect(createRange(0, 10, 2)).toEqual([0, 2, 4, 6, 8, 10]);                  
        expect(createRange(1.5, 20, 2.5)).toEqual([1.5, 4, 6.5, 9, 11.5, 14, 16.5, 19]);     
    });
    test("returns an array of digits with start as the start and end as the end, with an increment of 1 if step is not provided", () => {
        expect(createRange(0, 5)).toEqual([0, 1, 2, 3, 4, 5]);                  
        expect(createRange(3.2, 8.6)).toEqual([3.2, 4.2, 5.2, 6.2, 7.2, 8.2]);    
    });
    test("throws an error if start is greater than end and step is positive", () => {
        expect(() => {
            createRange(10, 5);
        }).toThrow('start cannot be greater than end if step is positive');
    });
    test("throws an error if start is smaller than end and step is negative", () => {
        expect(() => {
            createRange(5, 10, -1);
        }).toThrow('start cannot be smaller than end if step is negative');
    });
    test("throws an error if start is not provided", () => {
        expect(() => {
            createRange();
        }).toThrow('start is required');
    });
    test("throws an error if end is not provided", () => {
        expect(() => {
            createRange(10);
        }).toThrow('end is required'); 
    });
    test("throws an error if start is not a number", () => {
        expect(() => {
            createRange("2", 10);
        }).toThrow('start must be a number'); 
    });
    test("throws an error if end is not a number", () => {
        expect(() => {
            createRange(2, "10");
        }).toThrow('end must be a number'); 
    });
    test("throws an error if step is not a number", () => {
        expect(() => {
            createRange(2, 10, "foo");
        }).toThrow('step must be a number'); 
    });
});