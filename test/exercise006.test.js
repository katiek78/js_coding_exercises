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
      expect(isItPrime("2")).toBeTruthy();    
      expect(isItPrime("173")).toBeTruthy();   
    });
    test("returns false if the number is not prime", () => {
        expect(isItPrime("4")).toBeFalsy();    
        expect(isItPrime("253")).toBeFalsy();   
      });    
  });

