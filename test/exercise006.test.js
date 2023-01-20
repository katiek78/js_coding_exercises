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
    test("throws an error if arr is not provided", () => {
        expect(() => {
            sumMultiples();
        }).toThrow('arr is required');
    })
    test("throws an error if arr is not an Array", () => {
        expect(() => {
            sumMultiples("foo");
        }).toThrow('arr must be an array');
        expect(() => {
            sumMultiples(4);
        }).toThrow('arr must be an array');
    })
});

describe("isValidDNA", () => {
    test("returns true if the string has only C, T, G and A", () => {
        expect(isValidDNA("CGTGAGGCGATT")).toBe(true);
    });
    test("returns false if the string has letters other than C, T, G and A", () => {
        expect(isValidDNA("CGTSKJDHFCGATT")).toBe(false);
    });
    test("returns false if the string contains any non-letters", () => {
        expect(isValidDNA("CGTS333FCGATT")).toBe(false);
    });
    test("throws an error if str is not provided", () => {
        expect(() => {
            isValidDNA();
        }).toThrow('str is required');
    })
    test("throws an error if str is not a string", () => {
        expect(() => {
            isValidDNA([3]);
        }).toThrow('str must be a string');
        expect(() => {
            isValidDNA(4);
        }).toThrow('str must be a string');
    })
});

describe("getComplementaryDNA", () => {
    test("returns a complementary DNA string", () => {
        expect(getComplementaryDNA("CGTAGAGGTCCA")).toBe("GCATCTCCAGGT");
    });
    test("throws an error if str is not provided", () => {
        expect(() => {
            getComplementaryDNA();
        }).toThrow('str is required');
    })
    test("throws an error if str is not a valid DNA string", () => {
        expect(() => {
            getComplementaryDNA("FOO");
        }).toThrow('str must be a valid DNA string');
    })
    test("throws an error if str is not a string", () => {        
        expect(() => {
            getComplementaryDNA([3]);
        }).toThrow('str must be a string');
        expect(() => {
            getComplementaryDNA(4);
        }).toThrow('str must be a string');
    })
});

describe("isItPrime", () => {
    test("returns true if the number is prime", () => {
        expect(isItPrime(2)).toBe(true);
        expect(isItPrime(173)).toBe(true);
    });
    test("returns false if the number is not prime", () => {
        expect(isItPrime(4)).toBe(false);
        expect(isItPrime(253)).toBe(false);
    });
    test("returns false if the number is not an integer", () => {
        expect(isItPrime(3.5)).toBe(false);
    });
    test("throws an error if n is not provided", () => {
        expect(() => {
            isItPrime();
        }).toThrow('n is required');
    })
});

describe("createMatrix", () => {
    test("returns an array of n arrays containing the filler element n times", () => {
        expect(createMatrix(2, "Jota")).toEqual([["Jota", "Jota"], ["Jota", "Jota"]]);
        expect(createMatrix(4, "Thiago")).toEqual([["Thiago", "Thiago", "Thiago", "Thiago"],
        ["Thiago", "Thiago", "Thiago", "Thiago"], ["Thiago", "Thiago", "Thiago", "Thiago"],
        ["Thiago", "Thiago", "Thiago", "Thiago"]]);
    });
    test("returns an empty array if n is 0", () => {
        expect(createMatrix(0, "Diaz")).toEqual([]);
    });
    test("throws an error if n is not provided", () => {
        expect(() => {
            createMatrix()
        }).toThrow("n is required");
    });
    test("throws an error if fill is not provided", () => {
        expect(() => {
            createMatrix(3)
        }).toThrow("fill is required");
    });
    test("throws an error if n is not an integer", () => {
        expect(() => {
            createMatrix(3.5, "Thiago")
        }).toThrow("n must be an integer");
        expect(() => {
            createMatrix("Thiago", "Thiago")
        }).toThrow("n must be an integer");
        expect(() => {
            createMatrix([3], "Thiago")
        }).toThrow("n must be an integer");
    });
    test("throws an error if fill is not a string", () => {
        expect(() => {
            createMatrix(3, 3)
        }).toThrow("fill must be a string");
        expect(() => {
            createMatrix(3, ["Thiago"])
        }).toThrow("fill must be a string");
    });
});

describe("areWeCovered", () => {
    test("returns true if at least 3 members of staff are working that day", () => {
        expect(areWeCovered([{ name: "Jordan", rota: ["Monday", "Tuesday", "Wednesday"] },
        { name: "Darwin", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
        { name: "Virgil", rota: ["Wednesday"] }], "Wednesday")).toBe(true);
        expect(areWeCovered([{ name: "Jordan", rota: ["Monday", "Tuesday", "Wednesday"] },
        { name: "Darwin", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
        { name: "Virgil", rota: ["Wednesday"] },
        { name: "Cody", rota: ["Wednesday", "Thursday"] }], "Wednesday")).toBe(true);
    });
    test("returns false if 2 or fewer members of staff are working that day", () => {
        expect(areWeCovered([{ name: "Jordan", rota: ["Monday", "Tuesday", "Wednesday"] },
        { name: "Darwin", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
        { name: "Virgil", rota: ["Wednesday"] }], "Friday")).toBe(false);
        expect(areWeCovered([{ name: "Jordan", rota: ["Monday", "Tuesday", "Wednesday"] },
        { name: "Darwin", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
        { name: "Virgil", rota: ["Wednesday"] }], "Saturday")).toBe(false);
        expect(areWeCovered([{ name: "Jordan", rota: ["Monday", "Tuesday", "Wednesday"] },
        { name: "Darwin", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
        { name: "Virgil", rota: ["Wednesday"] }], "Tuesday")).toBe(false);
    });
    test("returns false if array is empty", () => {
        expect(areWeCovered([], "Wednesday")).toBe(false);
    });
    test("throws an error if staff is not provided", () => {
        expect(() => {
            areWeCovered()
        }).toThrow("staff is required");
    });
    test("throws an error if day is not provided", () => {
        expect(() => {
            areWeCovered([{ name: "Jordan", rota: ["Monday", "Tuesday", "Wednesday"] },
            { name: "Darwin", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
            { name: "Virgil", rota: ["Wednesday"] }])
        }).toThrow("day is required");
    });
    test("throws an error if day is not a valid day of the week", () => {
        expect(() => {
            areWeCovered([{ name: "Jordan", rota: ["Monday", "Tuesday", "Wednesday"] },
            { name: "Darwin", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
            { name: "Virgil", rota: ["Wednesday"] }], "Fooday")
        }).toThrow("day must be a valid day of the week");
        expect(() => {
            areWeCovered([{ name: "Jordan", rota: ["Monday", "Tuesday", "Wednesday"] },
            { name: "Darwin", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
            { name: "Virgil", rota: ["Wednesday"] }], 2)
        }).toThrow("day must be a valid day of the week");
        expect(() => {
            areWeCovered([{ name: "Jordan", rota: ["Monday", "Tuesday", "Wednesday"] },
            { name: "Darwin", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
            { name: "Virgil", rota: ["Wednesday"] }], [])
        }).toThrow("day must be a valid day of the week");
    });
});