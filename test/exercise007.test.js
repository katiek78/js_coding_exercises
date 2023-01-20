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

describe("getScreentimeAlertList", () => {
    const USERS = [
         {
            username: "diogo20",
            name: "Diogo Jota",
            screenTime: [
                         { date: "2019-06-11", usage: { FIFA: 34, instagram: 22, facebook: 40} },
                         { date: "2019-06-12", usage: { FIFA: 56, instagram: 40, facebook: 31} },
                         { date: "2019-06-13", usage: { FIFA: 12, instagram: 15, facebook: 19} },
                         { date: "2019-06-14", usage: { FIFA: 10, instagram: 56, facebook: 1} },
                        ]
           },
           {
            username: "thiago6alcantara",
            name: "Thiago Alcantara",
            screenTime: [
                         { date: "2019-06-11", usage: { mapMyRun: 100, whatsApp: 0, facebook: 0, safari: 10} },
                         { date: "2019-06-13", usage: { mapMyRun: 100, whatsApp: 0, facebook: 0, safari: 0} },
                         { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
                        ]
           },
           {
            username: "dArWiN",
            name: "Darwin Nunez",
            screenTime: [
                         { date: "2019-06-11", usage: { mapMyRun: 50, whatsApp: 60, facebook: 0, safari: 10} },
                         { date: "2019-06-12", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
                         { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
                        ]
           },
           {
            username: "TheNormalOne",
            name: "Jurgen Klopp",
            screenTime: []
           },
           {
            username: "FT9",
            name: "Fernando Torres"
           }
         ]
    test("returns an array of users who have amassed at least 100 minutes of screen time on the date specified, ignoring users without screenTime data", () => {
        expect(getScreentimeAlertList(USERS, "2019-06-11")).toEqual(['thiago6alcantara', 'dArWiN']);                  
        expect(getScreentimeAlertList(USERS, "2019-06-12")).toEqual(['diogo20']);                  
        expect(getScreentimeAlertList(USERS, "2019-06-13")).toEqual(['thiago6alcantara']);
    });
    test("returns an empty array if no user has amassed sufficient screentime on the date specified", () => {
        expect(getScreentimeAlertList(USERS, "2019-06-14")).toEqual([]);
    });
    test("returns an empty array if no user has amassed any screentime on the date specified", () => {
        expect(getScreentimeAlertList(USERS, "2019-06-16")).toEqual([]);
    });
    test("throws an error if users is not an array", () => {
        expect(() => {
             getScreentimeAlertList("foo", "2019-06-10");
        }).toThrow('users must be an array');
    });
    test("throws an error if date is not a string", () => {
        expect(() => {
             getScreentimeAlertList(USERS, 22);
        }).toThrow('date must be a string');
    });
});

describe("hexToRGB", () => {
    test("returns a valid rgb code equivalent to the hex code represented by hexStr", () => {
        expect(hexToRGB("#FF1133")).toBe("rgb(255,17,51)");
    });
    test("throws an error if hexStr is not provided", () => {
        expect(() => {
             hexToRGB();
        }).toThrow('hexStr is required');
    });
    test("throws an error if hexStr is not a valid hex string", () => {
        expect(() => {
             hexToRGB("foo");
        }).toThrow('hexStr must be a valid hex string');
        expect(() => {
            hexToRGB("#AACCJJ");
        }).toThrow('hexStr must be a valid hex string');
    });
});

describe("findWinner", () => {

});